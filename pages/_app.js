import '../styles/transitions.css';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import {NextUIProvider} from "@nextui-org/react";
import { ParallaxProvider } from 'react-scroll-parallax';

import Transition from './components/Transition';

export default function App({ Component, pageProps }) {
  return (
    <Transition>
      <NextUIProvider>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </NextUIProvider>
		</Transition>
  )
}

