import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Advantages/Advantages";
import carFetchers from "@/helpers/carFetchers";

export default async function App() {
  const makes = await carFetchers.getMakes();

  return (
    <main>
      <Hero />
      <Advantages />
    </main>
  );
}
