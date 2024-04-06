import Button from "./components/Button/Button";

function saludar() {
  alert("Hola, soy un botón");
}

function App() {
  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <p className="text-blue">Hello Tailwind</p>
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
      <a href="https://www.tiktok.com/@codewi" target="_blank" rel="noreferrer">
        <Button className="bg-green-600 hover:bg-green-700 active:bg-green-800 active:ring active:ring-green-300">
          Codewi
        </Button>
      </a>
    </div>
  );
}

export default App;
