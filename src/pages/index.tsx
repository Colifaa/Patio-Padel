import { WobbleCardDemo } from "@/Components/WobbleCardDemo";
import Inicio from "../Components/Inicio";

import List from "../Components/List";
import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";
import { LayoutGridDemo } from "@/Components/LayoutGridDemo";
import { AppleCardsCarouselDemo } from "@/Components/AppleCardsCarouselDemo";
// import SplitWithImage from "../Components/SplitWithImage";

export default function Home() {
  return (
    <div>
      <AppleCardsCarouselDemo/>
      <BackgroundBeamsWithCollisionDemo/>
      <Inicio />
      <LayoutGridDemo/>
      <WobbleCardDemo />
      <List />
    </div>

  );
}
