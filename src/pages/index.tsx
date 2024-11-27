import { CardHoverEffectDemo } from "../Components/CardHoverEffectDemo";
import { BackgroundBeamsWithCollisionDemo } from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import { InfiniteMovingCardsDemo } from "../Components/InfiniteMovingCardsDemo";
import AboutUs from "@/Components/AboutUs";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo />
      <AboutUs/>
      <AboutCompany />
      <CardHoverEffectDemo />
      <InfiniteMovingCardsDemo/>
      <FAQSection/>
      <Footer />
    </div>

  );
}
