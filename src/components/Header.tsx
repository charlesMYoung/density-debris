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
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link color="foreground" href="/reflection">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button isIconOnly variant="light">
              <Icon icon="ri:github-line" />
            </Button>

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
