import * as cheerio from "cheerio";
import puppeteerExtra from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";


interface Business {
  index: number;
  storeName: string;
  placeId: string;
  address: string;
  category: string;
  phone?: string;
  googleUrl: string;
  bizWebsite?: string;
  stars: number | null;
  numberOfReviews: number | null;
}
export default async function searchGoogleMaps(query: string): Promise<any[]> {
  try {

    puppeteerExtra.use(stealthPlugin());

    const browser = await puppeteerExtra.launch({
      headless: false,
      // headless: "new",
      // devtools: true,
      executablePath: "", // your path here
    });

    const page = await browser.newPage();

    try {
      await page.goto(
        `https://www.google.com/maps/search/${query.split(" ").join("+")}`
      );
    } catch (error) {
      console.log("error going to page");
    }

    async function autoScroll(page: any): Promise<void> {
      await page.evaluate(async () => {
        const wrapper: any = document.querySelector('div[role="feed"]');

        await new Promise((resolve, reject) => {
          let totalHeight: number = 0;
          let distance: number = 1000;
          const scrollDelay: number = 3000;

          const timer = setInterval(async () => {
            const scrollHeightBefore: number = wrapper.scrollHeight;
            wrapper.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeightBefore) {
              totalHeight = 0;
              await new Promise((resolve) => setTimeout(resolve, scrollDelay));

              // Calculate scrollHeight after waiting
              const scrollHeightAfter: number = wrapper.scrollHeight;

              if (scrollHeightAfter > scrollHeightBefore) {
                // More content loaded, keep scrolling
                return;
              } else {
                // No more content loaded, stop scrolling
                clearInterval(timer);
                resolve();
              }
            }
          }, 700);
        });
      });
    }

    await autoScroll(page);

    const html: string = await page.content();
    const pages: any[] = await browser.pages();
    await Promise.all(pages.map((page) => page.close()));

    await browser.close();
    console.log("browser closed");

    // get all a tag parent where a tag href includes /maps/place/
    const $ = cheerio.load(html);
    const aTags: any = $("a");
    const parents: any[] = [];
    aTags.each((i: number, el: any) => {
      const href: string | undefined = $(el).attr("href");
      if (!href) {
        return;
      }
      if (href.includes("/maps/place/")) {
        parents.push($(el).parent());
      }
    });

    console.log("parents", parents.length);

    const business: any[] = [];
    let index: number = 0;

    parents.forEach((parent: any) => {
      const url: string | undefined = parent.find("a").attr("href");
      // get a tag where data-value="Website"
      const website: string | undefined = parent
        .find('a[data-value="Website"]')
        .attr("href");
      // find a div that includes the class fontHeadlineSmall
      const storeName: string = parent.find("div.fontHeadlineSmall").text();
      // find span that includes class fontBodyMedium
      const ratingText: string | undefined = parent
        .find("span.fontBodyMedium > span")
        .attr("aria-label");

      // get the first div that includes the class fontBodyMedium
      const bodyDiv: any = parent.find("div.fontBodyMedium").first();
      const children: any = bodyDiv.children();
      const lastChild: any = children.last();
      const firstOfLast: any = lastChild.children().first();
      const lastOfLast: any = lastChild.children().last();
      index = index + 1;
      
      business.push({
        index,
        storeName,
        placeId: `ChI${url?.split("?")?.[0]?.split("ChI")?.[1]}`,
        address: firstOfLast?.text()?.split("·")?.[1]?.trim(),
        category: firstOfLast?.text()?.split("·")?.[0]?.trim(),
        phone: lastOfLast?.text()?.split("·")?.[1]?.trim(),
        googleUrl: url,
        bizWebsite: website,
        ratingText: ratingText
      });
    });
    business.sort((a, b) => {
      if (a.stars && b.stars) {
        return b.stars - a.stars;
      } else {
        return 0;
      }
    });

    return business;
  } catch (error) {
    console.log("error at googleMaps", error);
    return [];
  }
}

