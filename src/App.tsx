import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex justify-center mt-5">
      <div className="text-center">
        <h1 className="text-3xl text-green-500 text-center mb-5 font-semibold">
          ShadeCN Initalized with react 19 and tailwindcss 4
        </h1>
        <Button>Test Button</Button>
      </div>
    </div>
  );
}

export default App;
