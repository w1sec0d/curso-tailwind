import Button from "./components/Button/Button";
import tailwindLogo from "./assets/tailwindlogo2.png";
import Navbar from "./components/Navbar/Navbar";

function saludar() {
  alert("Hola, soy un botón");
}

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-[80px]">
        <div className="flex items-center justify-center w-screen flex-col">
          <img
            src={tailwindLogo}
            alt="Tailwind Logo"
            className="w-[200px] hover:translate-x-1 hover:translate-y-1 hover:scale-110 transition-all"
          />
          <p className="text-blue text-6xl my-7">
            ¡Hello{" "}
            <span className="bg-[#fbfbfb] text-[#38bdf8] font-bold px-3 mr-3 hover:text-[69px] transition-all">
              Tailwind
            </span>
            !
          </p>
          <Button onClick={saludar}>Soy un botón</Button>
          <a
            href="https://www.youtube.com/@codewi?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-red-600 hover:bg-red-700 active:bg-red-800 active:ring active:ring-red-300">
              Suscríbete
            </Button>
          </a>
          <a href="https://tiktok.com/@codewi" target="_blank" rel="noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 active:bg-green-800 active:ring active:ring-green-300">
              Codewi
            </Button>
          </a>
        </div>
        <p className="mx-5 mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          aspernatur praesentium ratione libero? Nam quo, possimus ipsum iste
          repudiandae minus saepe neque dignissimos magnam consequatur, quidem,
          laborum totam provident pariatur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Voluptatum aspernatur praesentium
          ratione libero? Nam quo, possimus ipsum iste repudiandae minus saepe
          neque dignissimos magnam consequatur, quidem, laborum totam provident
          pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatum aspernatur praesentium ratione libero? Nam quo, possimus
          ipsum iste repudiandae minus saepe neque dignissimos magnam
          consequatur, quidem, laborum totam provident pariatur. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Voluptatum aspernatur
          praesentium ratione libero? Nam quo, possimus ipsum iste repudiandae
          minus saepe neque dignissimos magnam consequatur, quidem, laborum
          totam provident pariatur. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptatum aspernatur praesentium ratione libero?
          Nam quo, possimus ipsum iste repudiandae minus saepe neque dignissimos
          magnam consequatur, quidem, laborum totam provident pariatur. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          aspernatur praesentium ratione libero? Nam quo, possimus ipsum iste
          repudiandae minus saepe neque dignissimos magnam consequatur, quidem,
          laborum totam provident pariatur.
        </p>
      </main>
    </>
  );
}

export default App;
