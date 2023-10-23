import Home from "@/components/HomePage/Home";
import carFetchers from "@/helpers/carFetchers";

export default async function HomePage() {
  const makes = await carFetchers.getMakes();

  return <Home makes={makes} />;
}
