import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Prices from "@/components/Prices/Prices";
import About from "@/components/About/About";
import carFetchers from "@/helpers/carFetchers";
import Stages from "@/components/Stages/Stages";
import { Header } from "@/components/Header/Header";
import Container from "@/components/Container/Container";

export default async function App() {
  const makes = await carFetchers.getMakes();

  return (
    <main>
      <Container>
        <Header makes={makes}></Header>
      </Container>
      <Hero makes={makes} />
      <Container>
        <Advantages />
        <Prices />
        <About />
        <Stages />
      </Container>
    </main>
  );
}
