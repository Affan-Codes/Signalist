import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropDown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image
            src="/assets/icons/logo.png"
            alt="Stockify logo"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <span className="font-bold text-white text-3xl">Stockify</span>
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
