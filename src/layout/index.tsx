import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Container, FullHeightWrapper } from "@/styles/layout";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <FullHeightWrapper>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </FullHeightWrapper>
  );
};

export default Layout;
