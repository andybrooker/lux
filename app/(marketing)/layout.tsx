import CTA from "./components/CTA";
import Logo from "./components/Logo";
import NavContainer from "./components/NavContainer";
import NavContents from "./components/NavContents";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <NavContainer>
        <NavContents />
      </NavContainer>
      <main className="h-full flex-1 mx-auto px-16 w-full">{children}</main>
      <footer></footer>
    </div>
  );
}
