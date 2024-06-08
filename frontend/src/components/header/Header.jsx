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
  DropdownItem,
  Image
} from "@nextui-org/react";
import { Logo } from "./Logo"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Remplace ceci par la logique d'authentification réelle
  const user = { email: "user@example.com" }; // Remplace par l'utilisateur réel

  return (
    <Navbar
      isBordered
      variant="sticky"
      onMenuOpenChange={setIsMenuOpen}
      className="bg-zinc-900 text-zinc-50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-zinc-50"
        />
        <NavbarBrand>
          <Link href="/" className="text-inherit">
            <Logo />
            <p className="font-bold text-xl text-inherit ml-2">Tattoola</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/tattoo-finder" className="text-zinc-50">
            TattooFinder
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tattoo-view" className="text-zinc-50">
            TattooView
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tattoo-mag" className="text-zinc-50">
            TattooMag
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tattoo-talk" className="text-zinc-50">
            TattooTalk
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" className="text-zinc-50">
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
              <Link href="/register" className="text-zinc-50">Sign up</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="default" href="/authentication" variant="flat">
                Connexion
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/tattoo-finder" className="text-zinc-50">
            TattooFinder
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-view" className="text-zinc-50">
            TattooView
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-mag" className="text-zinc-50">
            TattooMag
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-talk" className="text-zinc-50">
            TattooTalk
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/" className="text-zinc-50">
            Vous êtes tatoueurs ?
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;