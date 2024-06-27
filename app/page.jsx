import About from "./components/About";
import Commitment from "./components/Commitment";
import Hero from "./components/Hero";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <div className="image-bg bg-[url('/bg-3.jpg')] brightness-75 h-[70vh] bg-center bg-no-repeat bg-cover bg-fixed my-40"></div>
      <Offer />
      <div className="image-bg bg-[url('/bg-3.jpg')] brightness-75 h-[50vh] bg-center bg-no-repeat bg-cover bg-fixed my-40"></div>
      <Commitment />
    </div>
  );
}
