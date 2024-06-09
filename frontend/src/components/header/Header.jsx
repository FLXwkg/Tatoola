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
import { useAuth } from "../../contexts/authContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, state: { user, isLoggedIn } } = useAuth()

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
          <Image
              src="/public/logos/logo.png"
              alt="Tattoola Logo"
              className="h-10 w-auto ml-[-5px]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
  <NavbarItem>
    <Link
      href="/tattoo-finder"
      className="text-zinc-50 group relative hover:bg-white hover:text-black px-3 py-2 rounded-md"
    >
      <span className="block group-hover:hidden">TattooFinder</span>
      <span className="hidden group-hover:block">
        TattooFinder
        <span className="block text-xs">Recherche</span>
      </span>
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link
      href="/tattoo-view"
      className="text-zinc-50 group relative hover:bg-white hover:text-black px-3 py-2 rounded-md"
    >
      <span className="block group-hover:hidden">TattooView</span>
      <span className="hidden group-hover:block">
        TattooView
        <span className="block text-xs">V.R</span>
      </span>
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link
      href="/tattoo-mag"
      className="text-zinc-50 group relative hover:bg-white hover:text-black px-3 py-2 rounded-md"
    >
      <span className="block group-hover:hidden">TattooMag</span>
      <span className="hidden group-hover:block">
        TattooMag
        <span className="block text-xs">Blog</span>
      </span>
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link
      href="/tattoo-talk"
      className="text-zinc-50 group relative hover:bg-white hover:text-black px-3 py-2 rounded-md"
    >
      <span className="block group-hover:hidden">TattooTalk</span>
      <span className="hidden group-hover:block">
        TattooTalk
        <span className="block text-xs">Chat</span>
      </span>
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link
      href="/become_artist"
      className="text-zinc-50 group relative hover:bg-white hover:text-black px-3 py-2 rounded-md"
    >
      <span className="block group-hover:hidden">Vous êtes tatoueur ?</span>
      <span className="hidden group-hover:block">
        Vous êtes tatoueur ?
      </span>
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
              <DropdownItem key="logout" color="danger" onPress={() => logout()}>
                Déconnexion
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/register" className="text-zinc-50">S'inscrire</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} className="bg-zinc-50" href="/authentication" variant="flat">
                Connexion
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/tattoo-finder" className="text-zinc-800">
            TattooFinder
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-view" className="text-zinc-800">
            TattooView
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-mag" className="text-zinc-800">
            TattooMag
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/tattoo-talk" className="text-zinc-800">
            TattooTalk
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/" className="text-zinc-800">
            Vous êtes tatoueurs ?
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;