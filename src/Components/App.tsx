import reactLogo from "../assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import Table from "./Table";
import Input from "./Input";

function App() {

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
                src={viteLogo}
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
          </div>

          <h1 className="text-3xl font-bold mb-4">Google Maps Scrapping</h1>
          <h3 className="text-1xl mb-4">Electron + React + Vite</h3>
          
        </div>
      </div>
      
      <div className="flex justify-center my-4">
        <Input/>
      </div>
      <div className="flex justify-center items-center my-8">
        <Table/>
      </div>
    </div>
  );
}

export default App;
