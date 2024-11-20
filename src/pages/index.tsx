import { CardHoverEffectDemo } from "../Components/CardHoverEffectDemo";
import { BackgroundBeamsWithCollisionDemo } from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import AboutUs from "@/Components/AboutUs";
import { StickyScrollRevealDemo } from "@/Components/StickyScrollRevealDemo";
import FAQSection from "@/Components/FAQSection";


export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo />
      <AboutUs />
      <StickyScrollRevealDemo />
      <CardHoverEffectDemo />
      <AboutCompany />
      <FAQSection/>
    </div>

  );
}
