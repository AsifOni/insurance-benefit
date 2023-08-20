export const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-pattern"></div>
      <footer className="bg-white">
        <div className="md:container md:mx-auto mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://caasco.com/" className="flex items-center">
                <img src="logo-image.png" className="mr-3" alt="CAA Logo" />
              </a>
              <div className="w-[332px] m-9 ml-0">
              </div>
              <div className="flex mt-4 space-x-5 sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M22.6747 0.450073H1.3253C0.592157 0.450073 0 1.04223 0 1.77538V23.1212C0 23.8544 0.592157 24.4466 1.3253 24.4466H12.8195V15.1553H9.69305V11.5319H12.8195V8.86012C12.8195 5.76187 14.7123 4.07351 17.4757 4.07351C18.801 4.07351 19.9395 4.17221 20.2708 4.2145V7.45375H18.3534C16.8483 7.45375 16.5593 8.16927 16.5593 9.21612V11.5284H20.1439L19.6787 15.1483H16.5593V24.4395H22.6747C23.4043 24.4395 24 23.8473 24 23.1142V1.77538C23.9965 1.04223 23.4043 0.450073 22.6747 0.450073Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M7.54752 20.1989C16.6042 20.1989 21.5578 12.6956 21.5578 6.1887C21.5578 5.97558 21.5578 5.76342 21.5434 5.55222C22.507 4.85518 23.3389 3.99211 24 3.00342C23.1013 3.40163 22.148 3.66278 21.1718 3.77814C22.1998 3.16276 22.9691 2.19488 23.3366 1.05462C22.3701 1.62818 21.3126 2.03239 20.2099 2.24982C19.4675 1.4604 18.4856 0.937663 17.4162 0.762506C16.3468 0.587349 15.2494 0.769536 14.294 1.28087C13.3385 1.79221 12.5782 2.60419 12.1307 3.59117C11.6833 4.57814 11.5735 5.68509 11.8186 6.7407C9.86088 6.64256 7.94572 6.13382 6.19741 5.24751C4.4491 4.3612 2.90672 3.11713 1.6704 1.59606C1.04073 2.68006 0.847872 3.96329 1.1311 5.18448C1.41433 6.40568 2.15234 7.47301 3.19488 8.16918C2.41127 8.14596 1.64475 7.93457 0.96 7.55286V7.61526C0.960311 8.75211 1.35385 9.85386 2.07387 10.7336C2.79389 11.6134 3.79606 12.217 4.9104 12.4421C4.18547 12.6398 3.42488 12.6687 2.68704 12.5266C3.00169 13.505 3.61427 14.3606 4.43911 14.9737C5.26395 15.5869 6.25979 15.9268 7.28736 15.9461C5.54375 17.3165 3.38982 18.0604 1.17216 18.0581C0.780387 18.0574 0.388996 18.0337 0 17.9871C2.25181 19.4322 4.87192 20.1987 7.54752 20.1951"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M23.7603 3.64902C23.7603 3.64902 23.5254 1.99482 22.8063 1.26641C21.8947 0.310071 20.8702 0.305372 20.4026 0.248979C17.0425 0.00695801 12.0047 0.00695801 12.0047 0.00695801H11.9953C11.9953 0.00695801 6.95751 0.00695801 3.59741 0.248979C3.12982 0.305372 2.10535 0.310071 1.19366 1.26641C0.474643 1.99482 0.239671 3.64902 0.239671 3.64902C0.239671 3.64902 0 5.58988 0 7.5331V9.35413C0 11.2973 0.239671 13.2382 0.239671 13.2382C0.239671 13.2382 0.474643 14.8924 1.19366 15.6208C2.1077 16.5772 3.30605 16.5466 3.83944 16.6476C5.75915 16.8309 12 16.8897 12 16.8897C12 16.8897 17.0425 16.8826 20.4026 16.6382C20.8725 16.5819 21.8947 16.5772 22.8063 15.6208C23.5254 14.8924 23.7603 13.2382 23.7603 13.2382C23.7603 13.2382 24 11.295 24 9.35413V7.5331C24 5.58988 23.7603 3.64902 23.7603 3.64902ZM9.52105 11.5605V4.81683L16.0063 8.20042L9.52105 11.5605Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Youtube account</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M22.205 0.481567H1.79501C0.797784 0.481567 0 1.27935 0 2.2101V22.6866C0 23.6173 0.797784 24.4151 1.79501 24.4151H22.205C23.2022 24.4151 24 23.6173 24 22.6866V2.2101C23.9335 1.27935 23.1357 0.481567 22.205 0.481567ZM7.11357 20.8915H3.59003V9.45664H7.11357V20.8915ZM5.31856 7.86107C4.18837 7.86107 3.25762 6.9968 3.25762 5.86661C3.25762 4.66993 4.18837 3.80567 5.31856 3.80567C6.44875 3.80567 7.3795 4.73641 7.3795 5.86661C7.3795 6.9968 6.44875 7.86107 5.31856 7.86107ZM20.41 20.8915H16.8864V15.3071C16.8864 13.9774 16.8864 12.2489 15.0249 12.2489C13.1634 12.2489 12.8975 13.7115 12.8975 15.1741V20.8251H9.37396V9.45664H12.7645V10.9857H12.831C13.2964 10.055 14.4931 9.12423 16.2216 9.12423C19.8116 9.12423 20.4765 11.5176 20.4765 14.5757V20.8915H20.41Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">LinkedIn account</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-3 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Overview</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Rewards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Auto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Advocacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Magazine
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About CAA</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline ">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Corporate Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About our Website
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Store Locator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      CAA National
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{' '}
              <a href="https://caasco.com/" className="hover:underline">
                CAA Club Group
              </a>
              . All rights reserved. Serving Members in Southern and Central Ontario and Manitoba.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
