import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  FiSun,
  FiMenu,
  FiX,
  FiGithub,
  FiTwitter,
  FiMoon,
} from "react-icons/fi";
import { GiBurningTree } from "react-icons/gi";

import {
  NavbarContainer,
  NavLink,
  NavbarBody,
  NavLinks,
  IconContainer,
  IconWrapper,
  SideDrawer,
  LogoContainer,
} from "./styles";

const NAV_LINKS = [
  {
    title: "blog",
    path: "/blog",
  },
  { title: "about", path: "/about" },
];

const variants: Variants = {
  open: { opacity: 1, transition: { staggerChildren: 0.1 } },
  closed: { opacity: 0 },
};

const linkVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: { x: "-100%", opacity: 0 },
};
const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { asPath } = useRouter();

  useEffect(() => {
    // Get initial colour mode
    const root = window.document.documentElement;
    const value = root.style.getPropertyValue("--initial-data-theme") as
      | "light"
      | "dark";
    setDarkTheme(value === "dark");
  }, []);

  useEffect(() => {
    setShowDrawer(false);
    document.body.style.removeProperty("overflow");
  }, [asPath]);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showDrawer]);
  
  const handleThemeChange = (e: React.MouseEvent) => {
    e.preventDefault();
    setDarkTheme(!darkTheme);
  };

  const handleSideDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDrawer(!showDrawer);
  };

  return (
    <AnimatePresence>
      <NavbarContainer>
        <NavbarBody>
          <Link href="/" passHref>
            <LogoContainer>
              <GiBurningTree title="Home" />
            </LogoContainer>
          </Link>
          <NavLinks>
            <DesktopNavWrapper />

            {/* theme switch component */}
            <NavLink>
              <IconWrapper onClick={handleThemeChange}>
                {darkTheme === undefined ? (
                  <span style={{ width: "25px" }} />
                ) : darkTheme ? (
                  <FiMoon
                    aria-label="Switch to Light Mode"
                    title="Switch to Light Mode"
                  />
                ) : (
                  <FiSun
                    aria-label="Switch to Dark Mode"
                    title="Switch to Dark Mode"
                  />
                )}
              </IconWrapper>
            </NavLink>
            {/* hamburger toggle component if mobile screen */}
            <NavLink $mobile>
              <IconWrapper onClick={handleSideDrawer}>
                {showDrawer ? (
                  <FiX aria-label="Close sidebar" title="Close sidebar" />
                ) : (
                  <FiMenu aria-label="Open sidebar" title="Open sidebar" />
                )}
              </IconWrapper>
            </NavLink>
          </NavLinks>

          <SideDrawer
            initial="closed"
            animate={showDrawer ? "open" : "closed"}
            $visible={showDrawer}
            variants={variants}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            <MobileNavWrapper />
          </SideDrawer>
        </NavbarBody>
      </NavbarContainer>
    </AnimatePresence>
  );
};

const DesktopNavWrapper = () => {
  return (
    <>
      {NAV_LINKS.map((page, id) => (
        <NavLink key={id} arial-label={page.title} $desktop>
          <Link href={page.path} passHref>
            {page.title}
          </Link>
        </NavLink>
      ))}

      <NavLink $desktop>
        <IconContainer
          href="https://twitter.com/RajprakashSahoo"
          target="_blank"
          rel="noopener noreferrer"
          $applyhoverstyle
        >
          <FiTwitter
            aria-label="Twitter @RajprakashSahoo"
            title="Twitter @RajprakashSahoo"
          />
        </IconContainer>
      </NavLink>

      <NavLink $desktop>
        <IconContainer
          href="https://github.com/rajprakash00"
          target="_blank"
          rel="noopener noreferrer"
          $applyhoverstyle
        >
          <FiGithub
            aria-label="Github @rajprakash00"
            title="Github @rajprakash00"
          />
        </IconContainer>
      </NavLink>
    </>
  );
};

const MobileNavWrapper = () => {
  return (
    <>
      {NAV_LINKS.map((page, id) => (
        <NavLink
          variants={linkVariants}
          key={id}
          arial-label={page.title}
          $drawer
        >
          <Link href={page.path} passHref>
            {page.title}
          </Link>
        </NavLink>
      ))}
      <NavLink variants={linkVariants} $drawer>
        <IconContainer
          href="https://twitter.com/RajprakashSahoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter
            aria-label="Twitter @RajprakashSahoo"
            title="Twitter @RajprakashSahoo"
          />
        </IconContainer>
      </NavLink>
      <NavLink variants={linkVariants} $drawer>
        <IconContainer
          href="https://github.com/rajprakash00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub
            aria-label="Github @rajprakash00"
            title="Github @rajprakash00"
          />
        </IconContainer>
      </NavLink>
    </>
  );
};

export default Navbar;
