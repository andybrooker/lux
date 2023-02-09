import CTA from "./CTA";
import Logo from "./Logo";

export default function Nav() {
  return (
    <>
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex gap-6 font-semibold">
          <li>
            <a>Rewards</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>App</a>
          </li>
          <li>
            <a>Company</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <CTA type="small">Check Eligibility</CTA>
        <MenuIcon />
      </div>
    </>
  );
}

const MenuIcon = () => {
  return (
    <svg
      className="block sm:hidden"
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
