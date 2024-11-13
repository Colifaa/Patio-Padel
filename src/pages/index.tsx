import { WobbleCardDemo } from "@/Components/WobbleCardDemo";
import Inicio from "../Components/Inicio";
import List from "../Components/List";
import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";

import AboutCompany from "../Components/AboutCompany";

// import SplitWithImage from "../Components/SplitWithImage";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
     
      <BackgroundBeamsWithCollisionDemo/>
      <Inicio />
      <AboutCompany/>
      <WobbleCardDemo />
      <List />
    </div>

  );
}
