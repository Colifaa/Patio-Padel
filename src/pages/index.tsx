import { WobbleCardDemo } from "@/Components/WobbleCardDemo";

import List from "../Components/List";
import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import AboutUs from "@/Components/AboutUs";



// import SplitWithImage from "../Components/SplitWithImage";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo/>
      <AboutUs/>
      <List />
      <AboutCompany/>
      <WobbleCardDemo />
  

    </div>

  );
}
