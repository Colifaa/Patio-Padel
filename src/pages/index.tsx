import { WobbleCardDemo } from "@/Components/WobbleCardDemo";

import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";
import AboutCompany from "../Components/AboutCompany";
import { Tarjetitas } from "../Components/Tarjetitas";



// import SplitWithImage from "../Components/SplitWithImage";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundBeamsWithCollisionDemo/>
      <Tarjetitas/>
      <WobbleCardDemo />
      <AboutCompany/>
   
    
     
    </div>

  );
}
