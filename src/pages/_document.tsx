import { Html, Head, Main, NextScript } from "next/document";

// This file resolves the PageNotFoundError during build by providing
// an explicit _document page. In the new `app` directory it isn't
// strictly required, but Next still tries to locate it when collecting
// named exports. Exporting the default document makes the error go away.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
