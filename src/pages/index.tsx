import React from "react";
import { getMDXComponent } from "next-contentlayer/hooks";

import { allPages, Page } from "../../.contentlayer/generated";

import { DocumentHead } from "@/components/shared/seo";
import { Container, Center } from "@/styles/layout";
import { MDXComponents } from "@/components/mdx";
import { ViewCounter } from "@/components/viewCounter";
import { TitleHighlight } from "@/components/shared/typography";

interface HomeProps {
  page: Page;
}
const Home = ({ page }: HomeProps) => {
  const Component = getMDXComponent(page.body.code);
  return (
    <>
      <DocumentHead title="Home" />
      <Container className="content intro">
        <Center>
          <h2>Hello , I&apos;m <TitleHighlight> Raj! 👋</TitleHighlight></h2>
        </Center>

        <Component components={{ ...MDXComponents }} />
        <ViewCounter />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const page = allPages.find((page) => page.slug === "intro");
  return { props: { page } };
}
export default Home;
