import CTA from "./CTA";
import Logo from "./Logo";

export default function Nav() {
  return (
    <>
      <Logo />
      <nav>
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
      <CTA type="small">Check Eligibility</CTA>
    </>
  );
}
