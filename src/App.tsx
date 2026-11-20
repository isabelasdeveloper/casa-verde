import { Vector } from "./components/Vector";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div className="flex flex-1 h-full flex-col gap-36">
      <Vector />
      <Navbar></Navbar>
      <Hero />
    </div>
  );
}
