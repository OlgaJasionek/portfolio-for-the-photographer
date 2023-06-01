import "@/styles/main.scss";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/layout.component";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
