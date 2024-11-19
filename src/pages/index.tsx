import { WobbleCardDemo } from "@/Components/WobbleCardDemo";
import { CardHoverEffectDemo } from "../Components/CardHoverEffectDemo";

import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import AboutUs from "@/Components/AboutUs";


export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo/>
      <AboutUs/>
      <CardHoverEffectDemo/>
      <AboutCompany/>
      <WobbleCardDemo />
    </div>

  );
}
