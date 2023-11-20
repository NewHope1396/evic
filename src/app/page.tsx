import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Prices from "@/components/Prices/Prices";
import About from "@/components/About/About";
import carFetchers from "@/helpers/carFetchers";
import Stages from "@/components/Stages/Stages";

export default async function App() {
  const makes = await carFetchers.getMakes();

  return (
    <main>
      <Hero />
      <Advantages />
      <Prices />
      <About />
      <Stages />
    </main>
  );
}
