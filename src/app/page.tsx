import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Prices from "@/components/Prices/Prices";
import About from "@/components/About/About";
import carFetchers from "@/helpers/carFetchers";
import Stages from "@/components/Stages/Stages";
import { Header } from "@/components/Header/Header";
import { Gallery } from "@/components/Gallery/Gallery";
import { FeedBacks } from "@/components/FeedBacks/FeedBacks";

export default async function App() {
  const makes = await carFetchers.getMakes();

  return (
    <main>
      <Header makes={makes}></Header>
      <Hero makes={makes} />
      <Advantages />
      <Prices />
      <About />
      <Stages />
      <Gallery />
      <FeedBacks />
    </main>
  );
}
