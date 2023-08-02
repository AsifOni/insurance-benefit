import { Button as IButton } from 'ccg-insurance';

export const SearchBar = () => {
  return (
    <div className="flex p-8 justify-center bg-caa-pink">
      <div className="w-[625px] mr-6 self-center">
        <div className="flex bg-white p-2 items-center divide-x">
          <div className="flex w-80 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-0"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#003087"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 20.9999L16.6504 16.6499"
                stroke="#003087"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="appearance-none block w-full h-[25px] text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Search by name, keyword"
              aria-label="Search benefits"
            />
          </div>

          <div className="w-64 px-3 mb-6 md:mb-0 ml-auto">
            <div className="relative">
              <select
                className="block appearance-none w-full h-[40px] py-0 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                aria-label="State"
              >
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
              <div className="pointer-events-none absolute top-2 right-10 flex items-center px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#003087"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IButton label="Find Offers" btnStyle="font-semibold" />
    </div>
  );
};
