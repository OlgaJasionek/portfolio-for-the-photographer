import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='pl'>
      <Head>
        <meta property='og:image' content='/img/logo1.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Forum&family=Roboto:wght@100;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
