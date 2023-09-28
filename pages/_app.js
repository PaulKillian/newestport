import '../styles/transitions.css';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import {NextUIProvider} from "@nextui-org/react";

import Transition from './components/Transition';

export default function App({ Component, pageProps }) {
  return (
    <Transition>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
		</Transition>
  )
}

