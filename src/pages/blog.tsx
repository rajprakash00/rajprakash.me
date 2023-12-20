import React from "react";
import { getMDXComponent } from "next-contentlayer/hooks";

import { allPages, Page } from "../../.contentlayer/generated";

import { DocumentHead } from "@/components/shared/seo";
import { Center, Container } from "@/styles/layout";
import { MDXComponents } from "@/components/mdx";

interface BlogProps {
  page: Page;
}
const Blog = ({ page }: BlogProps) => {
  //const Component = getMDXComponent(page.body.code);
  return (
    <>
      <DocumentHead title="Blogs" />
      <Container className="content about">
        <Center>
          <h2>Coming Soon! ⌛</h2>
          <br />
          <br />
          <p>I swear I have written first 10 lines of ... 😓</p>
        </Center>
        {/* <Component components={{...MDXComponents }} /> */}
      </Container>
    </>
  );
};
/* 
export async function getStaticProps() {
  const page = allPages.find((page) => page.slug === "blog");
  return { props: { page } };
} */
export default Blog;
