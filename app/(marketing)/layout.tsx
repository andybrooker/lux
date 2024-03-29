import NavContainer from "@/components/NavContainer";
import NavContents from "@/components/NavContents";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="absolute h-screen w-full flex">
        <svg
          viewBox="0 0 1440 725"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1418_61)">
            <path
              d="M510 167.117H934.688M510 167.117V362.5M510 167.117L347.812 5H0M510 557.883H934.688M510 557.883V362.5M510 557.883L347.812 720H0M934.688 557.883V362.5M934.688 557.883L1096.88 720H1440M934.688 167.117V362.5M934.688 167.117L1015.78 86.0583L1096.88 5H1440M934.688 362.5H1440M510 362.5H0"
              stroke="#FBFBFB"
              stroke-width="10"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1418_61"
              x="0"
              y="0"
              width="1441"
              height="726"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1418_61"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <NavContainer>
        <NavContents />
      </NavContainer>
      <main className="h-full flex-1 mx-auto w-full">{children}</main>
      <footer className="p-8  bg-gradient-to-br from-grayDark-2 to-grayDark-1 border-t border-grayDark-7 shadow-inner z-10">
        <div className="max-w-5xl mx-auto text-gray-2">
          <div className="flex justify-between w-full">
            <div className="flex gap-16 text-sm">
              <div className="flex">
                <p className="text-sm text-gray-9 font-semibold">
                  <span className="text-gray-2 mr-2">Lux</span> Crafted in
                  London.
                </p>
              </div>
              <div className="font-semibold">
                Product
                <ul className="flex flex-col gap-3 mt-3 font-normal text-gray-9">
                  <li>Rewards</li>
                  <li>Travel</li>
                  <li>Wealth Management</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-right text-gray-9">
              <div className="flex gap-2 items-center">
                <GithubLogo />
                <span className="text-xs font-medium">MIT License</span>
              </div>
              <span className="text-xs font-light">@andynbrooker</span>
            </div>
          </div>
          <div className="text-gray-9 mt-12 text-xs font-light">
            <p className="mb-2">This company does not exist.</p>
            <p>
              Mastercard is a registered trademark and the circles design is a
              trademark of Mastercard International Incorporated.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const GithubLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
