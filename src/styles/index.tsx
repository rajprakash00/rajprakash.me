import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 650px;
    --color-primary: #54a854;   //#54a854
    --color-primary-transparent: rgba(255, 255, 255, 0.93);
    --primary-background: white;
    --primary-background-transparent: rgba(255, 255, 255, 0.8);
    --text-color-primary: rgb(51, 51, 51);
    --text-color-grey: rgb(36, 41, 47);
    --color-divider: rgba(102, 102, 102, 0.3);
    --color-block-quote: #e5e7eb;
    }
    [data-theme="dark"] {
    --color-primary: #60bc63 ;  //#479f61
    --color-primary-transparent: rgba(1, 56, 2, 0.95);  //rgba(71, 159, 97, 0.95)
    --primary-background: black;
    --primary-background-transparent: rgba(1, 1, 1, 0.8);
    --text-color-primary: white;
    --text-color-grey: rgb(201, 209, 217);
    --color-block-quote: #333;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    color: var(--text-color-primary);
    background-color: var(--primary-background);
    font-size: 18px;
    line-height: 1.5;
    min-height: 100vh;
	  scroll-padding-top: 60px;
	  scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    }

  ul {
    padding: 0;
    margin: 0;
    padding-left: 1.625rem;
    }

  h1,
	h2,
	h3,
	h4 {
		margin: 0;
		padding-top: 2rem;
	}

	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;

		:visited {
			text-decoration: none;
		}
		:hover {
			text-decoration-color: currentColor;
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-thickness: 2px;
		}
	}

  .intro {
    blockquote {
      border-left: 0.25rem solid var(--color-block-quote);
      margin: 0;
      padding-left: 1rem;
      font-style: italic;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-color-grey);
    }
  }
`;
