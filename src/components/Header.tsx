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
/**
 * Navbar component
 * @returns
 */
export default function Header() {
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

            <Button isIconOnly variant="light">
              <Icon icon="ri:rss-line" />
            </Button>
            <Button isIconOnly variant="light">
              <Icon icon="ri:sun-fill" />
            </Button>
            <Button isIconOnly variant="light">
              <Icon icon="ri:moon-fill" />
            </Button>
          </NavbarItem>
          <NavbarItem />
        </NavbarContent>
      </Navbar>
    </NextUIProvider>
  );
}
