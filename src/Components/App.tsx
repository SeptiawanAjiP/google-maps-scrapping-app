import reactLogo from "../assets/react.svg";
import electron from "../assets/electron.svg.png";
import viteLogo from "/electron-vite.animate.svg";
import Table from "./Table";
import Input from "./Input";
import { useState, useEffect  } from "react";

function App() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    window.ipcRenderer.on("scraping-done", (event, results) => {
      console.log('Scraping done:', results);
        setResults(results);
    });

    window.ipcRenderer.on("scraping-error", (event, error) => {
        console.error("Error during scraping:", error);
        // Handle error as needed
    });
}, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center my-8">
        <div className="text-center">
          <div className="flex justify-center">
            <a
              className="mx-4"
              href="https://electron-vite.github.io"
              target="_blank"
            >
              <img
                src={electron}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Vite logo"
              />
            </a>
            <a className="mx-4" href="https://react.dev" target="_blank">
              <img
                src={reactLogo}
                className="w-24 h-24 mb-4 mx-auto"
                alt="React logo"
              />
            </a>
            <a
              className="mx-4"
              href="https://electron-vite.github.io"
              target="_blank"
            >
              <img
                src={viteLogo}
                className="w-24 h-24 mb-4 mx-auto"
                alt="Vite logo"
              />
            </a>
          </div>

          <h1 className="text-3xl font-bold mb-2">Google Maps Scrapping</h1>
          <div className="text-center text-sm text-gray-500">
            created by dewakoding.com
          </div>
          
        </div>
      </div>
      
      <div className="flex justify-center my-4">
        <Input/>
      </div>
      <div className="flex justify-center items-center my-8">
        <Table places={results!}/>
      </div>
    </div>
  );
}

export default App;
