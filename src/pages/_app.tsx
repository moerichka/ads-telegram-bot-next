/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

import HeightSetter from "components/helpers/HeightSetter";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const onSendData = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(
        JSON.stringify({ message: "Hello from Web App!" }),
      );
    }
  };

  return (
    <>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
      <HeightSetter />
    </>
  );
}
