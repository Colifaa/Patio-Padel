import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import WithSubnavigation from "../Components/WithSubnavigation";
import ParticlesBg from "../Components/BgParticles/ParticlesBg";
import Wsp from "@/Components/WsP";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <ParticlesBg />
      <WithSubnavigation/>
      <Component {...pageProps} />
      <Wsp/>
    </ChakraProvider>
  );
}
