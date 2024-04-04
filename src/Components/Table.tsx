import React from 'react';

const places = [
    {
        index: 25,
        storeName: 'Kedai kopi MTRSWN',
        placeId: 'ChIJG2ZUnr5fZS4RAAJCWmRMURg',
        address: 'Jl. Sepak Bola I',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kedai+kopi+MTRSWN/data=!4m7!3m6!1s0x2e655fbe9e54661b:0x18514c645a420200!8m2!3d-7.4200399!4d109.2489682!16s%2Fg%2F11qgz_179z!19sChIJG2ZUnr5fZS4RAAJCWmRMURg?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,9 19 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 26,
        storeName: 'Etnik Coffee',
        placeId: 'ChIJz5o6HJ1fZS4RcTrmt3jn8NU',
        address: 'Jl. Ringin Tirto No.48',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Etnik+Coffee/data=!4m7!3m6!1s0x2e655f9d1c3a9acf:0xd5f0e778b7e63a71!8m2!3d-7.4098271!4d109.2419335!16s%2Fg%2F11nl6nf_7j!19sChIJz5o6HJ1fZS4RcTrmt3jn8NU?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,6 256 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 27,
        storeName: 'Kopi Arasta, Hotel Wisata Niaga',
        placeId: 'ChIJ8UTakT5fZS4RXycN5HRck-U',
        address: 'Jl. Merdeka No.5',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kopi+Arasta,+Hotel+Wisata+Niaga/data=!4m7!3m6!1s0x2e655f3e91da44f1:0xe5935c74e40d275f!8m2!3d-7.4253125!4d109.2367758!16s%2Fg%2F11kkj9hzz4!19sChIJ8UTakT5fZS4RXycN5HRck-U?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,9 533 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 28,
        storeName: 'Point Coffee Stasiun Purwokerto',
        placeId: 'ChIJ1QZbMs1fZS4Rd-Vb3SRzdR0',
        address: 'Jl. Pemuda',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Point+Coffee+Stasiun+Purwokerto/data=!4m7!3m6!1s0x2e655fcd325b06d5:0x1d757324dd5be577!8m2!3d-7.4193333!4d109.2220382!16s%2Fg%2F11j0z6dbt7!19sChIJ1QZbMs1fZS4Rd-Vb3SRzdR0?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,4 34 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 29,
        storeName: 'Kedai KOPI Oemah Sawah',
        placeId: 'ChIJ-azkmJteZS4Ryzu0bn_qk8A',
        address: 'H792+HPH, Jl. Sidodadi',
        category: 'Kafe',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kedai+KOPI+Oemah+Sawah/data=!4m7!3m6!1s0x2e655e9b98e4acf9:0xc093ea7f6eb43bcb!8m2!3d-7.4310541!4d109.251871!16s%2Fg%2F11by_cydxy!19sChIJ-azkmJteZS4Ryzu0bn_qk8A?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,6 19 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 30,
        storeName: 'Taman Coffee',
        placeId: 'ChIJv7t2ok9fZS4RKGWMAusph34',
        address: 'Jl. Gn. Muria No.985',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Taman+Coffee/data=!4m7!3m6!1s0x2e655f4fa276bbbf:0x7e8729eb028c6528!8m2!3d-7.4065128!4d109.2490427!16s%2Fg%2F11j2zr0_x0!19sChIJv7t2ok9fZS4RKGWMAusph34?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,5 478 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 31,
        storeName: 'Coffee termurah coffeetime purwokerto',
        placeId: 'ChIJ04QauS5fZS4R1NJHNLomsps',
        address: 'Jl. Letjend Pol. Soemarto No.15, RT.05/RW.02',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Coffee+termurah+coffeetime+purwokerto/data=!4m7!3m6!1s0x2e655f2eb91a84d3:0x9bb226ba3447d2d4!8m2!3d-7.4039893!4d109.2313762!16s%2Fg%2F11sdc1dwcp!19sChIJ04QauS5fZS4R1NJHNLomsps?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: undefined,
        stars: null,
        numberOfReviews: null
      },
      {
        index: 32,
        storeName: 'Warung Kopi Klothok',
        placeId: 'ChIJST8f53pfZS4RKX5C5sJi91A',
        address: 'Jl. Kenanga No.5',
        category: 'Kedai Kopi',
        phone: 'Jl. Kenanga No.5',
        googleUrl: 'https://www.google.com/maps/place/Warung+Kopi+Klothok/data=!4m7!3m6!1s0x2e655f7ae71f3f49:0x50f762c2e6427e29!8m2!3d-7.4014165!4d109.2552109!16s%2Fg%2F11q_jsmtbj!19sChIJST8f53pfZS4RKX5C5sJi91A?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,9 8 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 33,
        storeName: 'Ngunjuk Kopi Pwt',
        placeId: 'ChIJdRU6hvBfZS4RI-AXJxzd1wk',
        address: 'Perumahan Sapphire Regency, Jl. KS. Tubun No.Ds',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Ngunjuk+Kopi+Pwt/data=!4m7!3m6!1s0x2e655ff0863a1575:0x9d7dd1c2717e023!8m2!3d-7.4137275!4d109.2160562!16s%2Fg%2F11h7_k7gyt!19sChIJdRU6hvBfZS4RI-AXJxzd1wk?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,5 8 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 34,
        storeName: 'Kopi kita',
        placeId: 'ChIJqybH_d9fZS4RHph2w3rPGSA',
        address: 'Jl. Brigjend. Encung',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kopi+kita/data=!4m7!3m6!1s0x2e655fdffdc726ab:0x2019cf7ac376981e!8m2!3d-7.4081397!4d109.2358458!16s%2Fg%2F11g4b67p_s!19sChIJqybH_d9fZS4RHph2w3rPGSA?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,8 60 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 35,
        storeName: "Kopi Roti D'warko",
        placeId: 'ChIJtVCIDGNeZS4RJA78UHsWQgA',
        address: 'Jl. Jend. Soedirman No.322',
        category: 'Kafe',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kopi+Roti+D%27warko/data=!4m7!3m6!1s0x2e655e630c8850b5:0x42167b50fc0e24!8m2!3d-7.4255333!4d109.2313386!16s%2Fg%2F11fy99jb7y!19sChIJtVCIDGNeZS4RJA78UHsWQgA?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,4 448 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 36,
        storeName: 'Kedai Kopi OH - Purwokerto',
        placeId: 'ChIJ6ecQEwBfZS4Rpw7-nGObudE',
        address: 'Jalan HR Bunyamin No.677',
        category: 'Restoran',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kedai+Kopi+OH+-+Purwokerto/data=!4m7!3m6!1s0x2e655f001310e7e9:0xd1b99b639cfe0ea7!8m2!3d-7.4051749!4d109.2451897!16s%2Fg%2F11lddrj1x6!19sChIJ6ecQEwBfZS4Rpw7-nGObudE?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,2 20 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 37,
        storeName: 'Kedai Kopi Riri',
        placeId: 'ChIJD81wsjNcZS4RI60aywlhD-A',
        address: 'Jl. SMP 5 No.30',
        category: 'Kafe',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kedai+Kopi+Riri/data=!4m7!3m6!1s0x2e655c33b270cd0f:0xe00f6109cb1aad23!8m2!3d-7.4478892!4d109.2428025!16s%2Fg%2F11b7q1xjkg!19sChIJD81wsjNcZS4RI60aywlhD-A?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,4 9 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 38,
        storeName: 'Bento Kopi Purwokerto',
        placeId: 'ChIJjQCcLxNfZS4RZjKCZsFBuRY',
        address: undefined,
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Bento+Kopi+Purwokerto/data=!4m7!3m6!1s0x2e655f132f9c008d:0x16b941c166823266!8m2!3d-7.3956755!4d109.249619!16s%2Fg%2F11s3b0vc1t!19sChIJjQCcLxNfZS4RZjKCZsFBuRY?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,7 1.022 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 39,
        storeName: 'Coffee BRAKE',
        placeId: 'ChIJ3wtyjV1fZS4Rql4vlmkzohI',
        address: 'Jl. DR. Soeparno No.772',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Coffee+BRAKE/data=!4m7!3m6!1s0x2e655f5d8d720bdf:0x12a23369962f5eaa!8m2!3d-7.415875!4d109.2542398!16s%2Fg%2F11hzknq9zn!19sChIJ3wtyjV1fZS4Rql4vlmkzohI?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,7 574 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 40,
        storeName: 'Kedai Kopi Brother hood Coffee N Food',
        placeId: 'ChIJu8O6SXBfZS4RVqVrqp1Jn3o',
        address: 'Jl. KS. Tubun No.30',
        category: 'Kafe',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kedai+Kopi+Brother+hood+Coffee+N+Food/data=!4m7!3m6!1s0x2e655f7049bac3bb:0x7a9f499daa6ba556!8m2!3d-7.4198916!4d109.2173158!16s%2Fg%2F11h3qrkj95!19sChIJu8O6SXBfZS4RVqVrqp1Jn3o?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,7 23 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 41,
        storeName: 'TOMORO COFFEE - Stasiun Purwokerto',
        placeId: 'ChIJ2dstFwBfZS4RpNMlHGTf5kU',
        address: 'Jl. Kober No.36',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/TOMORO+COFFEE+-+Stasiun+Purwokerto/data=!4m7!3m6!1s0x2e655f00172ddbd9:0x45e6df641c25d3a4!8m2!3d-7.4187181!4d109.2224055!16s%2Fg%2F11vk4vc395!19sChIJ2dstFwBfZS4RpNMlHGTf5kU?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: undefined,
        stars: null,
        numberOfReviews: null
      },
      {
        index: 42,
        storeName: 'Saka Kopi Purwokerto',
        placeId: 'ChIJCaMv-0JfZS4Rl7T8jnZrFgk',
        address: 'Jl. Candrawijaya No.110',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Saka+Kopi+Purwokerto/data=!4m7!3m6!1s0x2e655f42fb2fa309:0x9166b768efcb497!8m2!3d-7.395237!4d109.228866!16s%2Fg%2F11fl0x4zs5!19sChIJCaMv-0JfZS4Rl7T8jnZrFgk?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,3 7 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 43,
        storeName: 'Ds Family Kedai Kopi Menara Teratai Purwokerto',
        placeId: 'ChIJPdmu5LBfZS4Rg_3kwer50qo',
        address: 'Jl. Bung Karno',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Ds+Family+Kedai+Kopi+Menara+Teratai+Purwokerto/data=!4m7!3m6!1s0x2e655fb0e4aed93d:0xaad2f9eac1e4fd83!8m2!3d-7.4285909!4d109.2315782!16s%2Fg%2F11vb31g95p!19sChIJPdmu5LBfZS4Rg_3kwer50qo?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: undefined,
        stars: null,
        numberOfReviews: null
      },
      {
        index: 44,
        storeName: 'KAU Kopi',
        placeId: 'ChIJqX6KVGNfZS4RJ5tc6XQtn0o',
        address: 'H6JV+2QH, Jl. Jatiwinangun',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/KAU+Kopi/data=!4m7!3m6!1s0x2e655f63548a7ea9:0x4a9f2d74e95c9b27!8m2!3d-7.4199371!4d109.2444699!16s%2Fg%2F11h3m9qzb6!19sChIJqX6KVGNfZS4RJ5tc6XQtn0o?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,5 82 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 45,
        storeName: 'Brilian Cafe Purwokerto',
        placeId: 'ChIJ-5H8c7dfZS4RKuxVNCAPRdA',
        address: 'Jl. A. Yani No.28',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Brilian+Cafe+Purwokerto/data=!4m7!3m6!1s0x2e655fb773fc91fb:0xd0450f203455ec2a!8m2!3d-7.4145388!4d109.2308241!16s%2Fg%2F11n0v9dzh6!19sChIJ-5H8c7dfZS4RKuxVNCAPRdA?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,9 18 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 46,
        storeName: 'Kopi Kenangan - Ruko Suharso Purwokerto',
        placeId: 'ChIJpWRemzxfZS4R4gxA8p9XyIw',
        address: 'Jl. Prof. Dr. Suharso Kelurahan No.6, RT.01/RW.01',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Kopi+Kenangan+-+Ruko+Suharso+Purwokerto/data=!4m7!3m6!1s0x2e655f3c9b5e64a5:0x8cc8579ff2400ce2!8m2!3d-7.4176794!4d109.2518145!16s%2Fg%2F11t2cntg5r!19sChIJpWRemzxfZS4R4gxA8p9XyIw?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,7 123 Ulasan',
        stars: null,
        numberOfReviews: NaN
      },
      {
        index: 47,
        storeName: 'KOPI SULTAN',
        placeId: 'ChIJwTw3PIRfZS4R_csGM6l-YYs',
        address: 'Komplek stasiun timur, Jl. Jend. Sudirman Blok. C16',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/KOPI+SULTAN/data=!4m7!3m6!1s0x2e655f843c373cc1:0x8b617ea93306cbfd!8m2!3d-7.4271303!4d109.2369775!16s%2Fg%2F11nymf4qfs!19sChIJwTw3PIRfZS4R_csGM6l-YYs?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: undefined,
        stars: null,
        numberOfReviews: null
      },
      {
        index: 48,
        storeName: 'Caping coffe banyumas',
        placeId: 'ChIJMaZjT69fZS4R16R_V6HwWlg',
        address: 'Gg. Volly No.1',
        category: 'Kedai Kopi',
        phone: undefined,
        googleUrl: 'https://www.google.com/maps/place/Caping+coffe+banyumas/data=!4m7!3m6!1s0x2e655faf4f63a631:0x585af0a1577fa4d7!8m2!3d-7.4197111!4d109.248996!16s%2Fg%2F11jt74hs03!19sChIJMaZjT69fZS4R16R_V6HwWlg?authuser=0&hl=id&rclk=1',
        bizWebsite: undefined,
        ratingText: 'Bintang 4,8 35 Ulasan',
        stars: null,
        numberOfReviews: NaN
      }
]

function Table() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Alamat
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Link
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating & Ulasan
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {places.map(item => (
                <tr key={item.storeName}>
                     <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.index}</div>
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.storeName}</div>
                  </td>
                 
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href="{item.googleUrl}" target="_blank"><span
                      className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Ke Lokasi
                    </span>
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.ratingText}</div>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
