
import { BackgroundBeamsWithCollisionDemo } from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import Footer from "@/Components/Footer";

import AboutUs from "@/Components/AboutUs";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo />
      <AboutUs/>
      <AboutCompany />
      <Footer />
    </div>

  );
}
