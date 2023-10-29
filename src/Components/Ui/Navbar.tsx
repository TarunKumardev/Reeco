function Header() {
  return (
    <nav className="bg-green-800 border-gray-200 dark:bg-gray-900 ">
      <div className=" flex flex-wrap items-center gap-10 py-4 px-0 max-w-[1440px] mx-auto">
        <a href="https://flowbite.com/" className="flex items-center w-fit">
          <h1 className="text-xl font-bold text-white">Reeco</h1>
        </a>

        <div className="flex justify-between items-center w-full md:w-auto flex-1" id="navbar-default">
          <div className="flex gap-6 text-white items-center">
            <div>Store</div>
            <div>Orders</div>
            <div>Analytics</div>
          </div>
          <div className="flex gap-4 text-white items-center">
            <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
              <a href="#" role="button" className="relative flex">
                <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-[-4px] rounded-full bg-green-300 w-4 h-4 top right p-0 m-0 text-white font-semibold text-xs leading-tight text-center">
                  5
                </span>
              </a>
            </li>
            <div>
              Hello, James
            </div>
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Header;
