import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-fixed w-full flex-shrink flex-grow-0">
      <div className="sticky top-0 w-full h-full">
        <nav className="bg-nav-background w-full z-20 top-0 left-0 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between p-4">
            <a href="https://www.caasco.com//" className="flex items-center">
              <img src="logo-image.png" className="mr-3" alt="CAA Logo" role="presentation" />
            </a>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                <Link href="/about-us">
                  <span className="block py-2 pl-3 pr-4 text-insurance-primary text-base font-semibold uppercase">
                    About us
                  </span>
                 </Link>
                </li>
                <li>
                <Link href="/our-products">
                  <span
                    className="block py-2 text-insurance-primary text-base font-semibold uppercase"
                    aria-current="page"
                  >
                    Our Products
                  </span>
                  </Link>
                </li>
                <li>
                <Link href="/contact-us">
                  <span
                    className="block py-2 text-insurance-primary text-base font-semibold uppercase"
                    aria-current="page"
                  >
                    Contact Us
                  </span>
                  </Link>
                </li>
                <li>
                <Link href="/career">
                  <span
                    className="block py-2 text-insurance-primary text-base font-semibold uppercase"
                    aria-current="page"
                  >
                    Career
                  </span>
                  </Link>
                </li>
                <li>
                <Link href="/our-blog">
                  <span
                    className="block py-2 text-insurance-primary text-base uppercase"
                    aria-current="page"
                  >
                    Our Blog
                  </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between gap-2">
              {/* <div>Location of Deals: </div>
              <div>
                <a href="#" className="text-caa-dark-blue font-semibold text-base flex gap-2">
                  Toronto, Ontario, Canada
                  <img src="icon-map-pin.svg" className="w-15 h-15 mr-3" alt="" role="presentation" />
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
