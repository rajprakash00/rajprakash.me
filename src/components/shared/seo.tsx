import Head from "next/head";
import React from "react";
import { SITE_URL, SITE_DESCRIPTION , IMAGE_URL} from "../config/constants";

interface DocumentHeadProps {
  title: string;
  description?: string;
  imageURL?: string;
  noIndex?: boolean;
}
export const DocumentHead = ({
  title,
  description = SITE_DESCRIPTION,
  imageURL = IMAGE_URL,
  noIndex = false,
}: DocumentHeadProps) => {
  const pageTitle = `${title} | Rajprakash`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex" /> : null}

      <meta property="og:title" content={pageTitle} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta name="og:image" content={imageURL} />
      <meta name="og:image:alt" content={pageTitle} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RajprakashSahoo" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />
    </Head>
  );
};
