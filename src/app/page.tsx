import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import Prices from "@/components/Prices/Prices";
import About from "@/components/About/About";
import carFetchers from "@/helpers/carFetchers";
import Stages from "@/components/Stages/Stages";
import { Header } from "@/components/Header/Header";
import { SwiperGallery } from "@/components/SwiperGallery/SwiperGallery";
import { SwiperFeedbacks } from "@/components/SwiperFeedbacks/SwiperFeedbacks";

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
      <SwiperGallery />
      <SwiperFeedbacks />
    </main>
  );
}
