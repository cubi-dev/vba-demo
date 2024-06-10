import "@/styles/globals.css";

import RootLayout from "@/pages/layout";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
