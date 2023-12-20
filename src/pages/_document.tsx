import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/burningTree.png" />
          <meta name="apple-mobile-web-app-title" content="Rajprakash's Blog" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{ __html: setClientInitialColorTheme }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const setClientInitialColorTheme = `(function () {
  ${setInitialColorTheme.toString()}setInitialColorTheme();
})()`;

// from https://www.joshwcomeau.com/react/dark-mode/  blog :)
function setInitialColorTheme() {
  function getInitialColorTheme() {
    const persistedTheme = window.localStorage.getItem("theme");
    const hasPersistedTheme = typeof persistedTheme === "string";
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedTheme) {
      return persistedTheme;
    }

    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'dark'.
    return "dark";
  }

  const colorTheme = getInitialColorTheme();
  const root = document.documentElement;
  root.style.setProperty("--initial-data-theme", colorTheme);
  if (colorTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
