import React from "react";
import { getMDXComponent } from "next-contentlayer/hooks";

import { allPages, Page } from "../../.contentlayer/generated";

import { DocumentHead } from "@/components/shared/seo";
import { Center, Container } from "@/styles/layout";
import { SocialLinksOverlay } from "@/components/icons";
import { MDXComponents } from "@/components/mdx";
import { ViewCounter } from "@/components/viewCounter";
import { TitleHighlight } from "@/components/shared/typography";

interface AboutProps {
  page: Page;
}
const About = ({ page }: AboutProps) => {
  const Component = getMDXComponent(page.body.code);
  return (
    <>
      <DocumentHead title="About Me" />
      <Container className="content about">
        <Center>
          <h2>About <TitleHighlight>Me! 🙋‍♂️</TitleHighlight></h2>
        </Center>
        <Component components={{ SocialLinksOverlay, ...MDXComponents }} />
        <ViewCounter />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const page = allPages.find((page) => page.slug === "about");
  return { props: { page } };
}
export default About;
