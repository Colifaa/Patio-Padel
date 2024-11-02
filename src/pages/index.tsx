import { WobbleCardDemo } from "@/Components/WobbleCardDemo";
import Inicio from "../Components/Inicio";

import List from "../Components/List";
import  {BackgroundBeamsWithCollisionDemo} from "../Components/BackgroundBeamsWithCollisionDemo";

// import SplitWithImage from "../Components/SplitWithImage";

export default function Home() {
  return (
    <div>
      <BackgroundBeamsWithCollisionDemo/>
      <Inicio />
      <WobbleCardDemo />
      <List />
    </div>

  );
}
