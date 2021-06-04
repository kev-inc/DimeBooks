import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Carousel title="Latest Additions" list={[1, 2, 3]} />
        <Carousel title="Just Sold" list={[1, 2, 3, 4]} />
      </div>
    </div>
  );
}
