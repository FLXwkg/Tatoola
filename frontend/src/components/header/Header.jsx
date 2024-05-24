import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { Logo } from "./Logo"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Remplace ceci par la logique d'authentification réelle
  const user = { email: "user@example.com" }; // Remplace par l'utilisateur réel

  return (
    <Navbar isBordered variant="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-xl text-inherit">Tattoola</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" color="inherit">
            TatooFinder
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="inherit">
            TatooView
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="inherit">
            TatooMag
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="inherit">
            TatooTalk
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="inherit">
            Vous êtes tatoueurs ?
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {isLoggedIn ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user.email}
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Connecté en tant que</p>
                <p className="font-normal text-sm">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="dashboard" as="a" href="/dashboard" color="success">
                Voir mon dashboard
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onPress={() => console.log("Logout")}>
                Déconnexion
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/register">Sign up</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/authentication" variant="flat">
                Login
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">
            TatooFinder
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">
            TatooView
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">
            TatooMag
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">
            TatooTalk
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">
            Vous êtes tatoueurs ?
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
