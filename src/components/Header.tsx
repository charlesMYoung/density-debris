import {
  NextUIProvider,
  Navbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { Icon } from "@iconify/react";
import useTheme, { type Theme } from "~/hooks/useTheme";
import { socialLinks } from "~/config";
/**
 * Navbar component
 * @returns
 */
export default function Header() {
  const { colorMode, theme, setTheme } = useTheme();
  const switchTheme = (themeName: Theme) => {
    setTheme(themeName);
  };
  return (
    <NextUIProvider>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Link color="foreground" href="/">
            LOGO
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link
              color="foreground"
              href="/reflection"
              className="hidden md:block"
            >
              Blog
            </Link>
            <Button
              title="Blog"
              isIconOnly
              as={Link}
              href="/reflection"
              variant="light"
              className="md:hidden"
            >
              <Icon icon="ooui:article-rtl"></Icon>
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            {socialLinks
              ? socialLinks.map((item, index) => (
                  <Button
                    isIconOnly
                    variant="light"
                    as={Link}
                    href={item.url}
                    key={index}
                  >
                    {item.icon}
                  </Button>
                ))
              : null}
            {colorMode === "light" ? (
              <Button
                isIconOnly
                variant="light"
                onClick={() => switchTheme("dark")}
              >
                <Icon icon="ri:sun-fill" />
              </Button>
            ) : (
              <Button
                isIconOnly
                variant="light"
                onClick={() => switchTheme("light")}
              >
                <Icon icon="ri:moon-fill" />
              </Button>
            )}
            <Button isIconOnly variant="light" as={Link} href="/rss.xml">
              <Icon icon="ri:rss-line" />
            </Button>
          </NavbarItem>
          <NavbarItem />
        </NavbarContent>
      </Navbar>
    </NextUIProvider>
  );
}
