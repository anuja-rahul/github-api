import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import SwitchMode from "./SwitchMode";

export default function Header() {
  return (
    <Navbar isBordered className="px-4 w-screen">
      <NavbarBrand>
        <p className="font-bold text-inherit">GitHub Finder</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-xs md:text-lg">
            Find <p className="text-primary">Your</p>Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="mr-1">
        <NavbarItem className="flex">
          <SwitchMode />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
