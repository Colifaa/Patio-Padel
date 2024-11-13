import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import WithSubnavigation from "../Components/WithSubnavigation";
import Footer from "../Components/Footer";
import ParticlesBg from "../Components/BgParticles/ParticlesBg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <ParticlesBg />
      <WithSubnavigation/>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
