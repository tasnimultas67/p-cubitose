import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Listbox,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  CodeBracketIcon,
  MegaphoneIcon,
  XMarkIcon,
  PaintBrushIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const services = [
  {
    name: "Web Development",
    description: "The Ultimate Web Development Service for Digital Agencies",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
  {
    name: "Graphics Design",
    description: "We Bring Your Brand to Life with Stunning Visuals",
    href: "/services/graphics-design",
    icon: PaintBrushIcon,
  },
  {
    name: "Search Engine Optimization",
    description: "We Optimize Your Site for Your Goals and Audience",
    href: "/services/search-engine-optimization",
    icon: MegaphoneIcon,
  },
];
const colors = [
  { "name": "Palatinate Blue", "colorCode":  "25 84 237", "hexCol": "#1954ed"},
  { "name": "Neon Blue", "colorCode":  "17 0 154", "hexCol": "#11009E"},
  { "name": "Chocolate", "colorCode":  "135 54 0", "hexCol": "#873600"},
  { "name": "Lincoln Green", "colorCode":  "27 89 14", "hexCol": "#1B590E"},
  { "name": "Violet", "colorCode":  "152 0 163", "hexCol": "#9800A3"},
  { "name": "Blue-Violet", "colorCode":  "126 48 225", "hexCol": "#7E30E1"},
  { "name": "Metallic Violet", "colorCode":  "91 8 136", "hexCol": "#5B0888"},
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0])
  document.documentElement.style.setProperty("--theme-color", `${selectedColor.colorCode}`)
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("cubitose-access-token");
        navigate('/');
      })
      .then((error) => console.log(error));
  };

  return (
    <header className="bg-themeColor z-[1000] sticky top-0">
      <nav
        className="mx-auto flex items-center justify-between py-2 w-11/12 z-[1000]"
        aria-label="Global"
      >
        {/* Website Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cubitose</span>
            <img
              className="h-14 w-auto"
              src="/white-logo.png"
              alt="Cubitose logo"
            />
          </Link>
        </div>

        {/* Website Mobile Menu bar */}
        <div className="flex lg:hidden gap-5">
                  {/* User Info */}
            {user && (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {user.photoURL? <img
                    className="h-8 w-8 rounded-full bg-white"
                    src={user.photoURL}
                    alt="User Profile Image"
                  />: <img
                    className="h-8 w-8 rounded-full bg-white"
                    src="/favicon.webp"
                    alt="User Profile Image"
                  />}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* Dashboard */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Dashboard
                      </Link>
                    )}
                  </Menu.Item>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogOut}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          " px-4 py-2 text-sm text-gray-700 w-full text-left flex items-center gap-2"
                        )}
                      >
                        Sign out{" "}
                        <ArrowRightOnRectangleIcon className="h-4 w-4 text-gray-700"></ArrowRightOnRectangleIcon>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Website Menu  */}
        <div className="hidden lg:flex gap-10 items-center relative">
          {/* Menu */}
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <NavLink to="/" className="text-sm 2xl:text-base leading-6 text-white uppercase">
              Home
            </NavLink>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm 2xl:text-base leading-6 text-white uppercase focus-visible:outline-none">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-in duration-300"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-2xl ">
                  {({ close }) => (
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-themeColor/5"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-themeColor"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.href}
                              className="block font-semibold text-gray-900"
                              onClick={() => close()}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
            <NavLink
              to="/about-us"
              className="text-sm 2xl:text-base leading-6 text-white uppercase"
            >
              About Us
            </NavLink>
            <NavLink
              to="/portfolios"
              className="text-sm 2xl:text-base leading-6 text-white uppercase"
            >
              Portfolios
            </NavLink>
          </Popover.Group>
          {/* Menu Contact Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact-us"
              className="text-sm 2xl:text-base leading-6 text-black bg-white py-2 px-4 rounded uppercase hover:shadow-2xl"
            >
              Contact Us <span aria-hidden="true"></span>
            </Link>
          </div>
          {/* Color Palette */}
                          <Listbox
                  as="div"
                  className=" p-0.5 rounded-full flex items-center"
                  value={selectedColor}
                  onChange={setSelectedColor}>
                  
                  <Listbox.Button className=" flex items-center" title='Color Palette'><div className={`w-5 h-5 rounded-full outline outline-2 outline-offset-2 outline-white bg-themeColor`} ></div></Listbox.Button>
                  
                    <Transition
                      as={Fragment}
                      enter="transition ease-in duration-300"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Listbox.Options className="absolute right-0 top-10 z-10 mt-3 w-[230px] overflow-hidden rounded-xl bg-white shadow-2xl py-3 px-2">
                        {colors.map((color) => (
                          <Listbox.Option
                            key={color.name}
                            value={color}
                            as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`${
                                  active ? 'bg-themeColor text-white' : 'bg-white text-black'
                                } flex items-center justify-start gap-1 px-2 py-1 rounded-md cursor-pointer`}
                              >
                                {selected && <CheckIcon className="h-4 w-4" />}
                                <div className="w-5 h-5 rounded-full" style={{backgroundColor: `${color.hexCol}`}}></div>{color.name}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                      </Transition>
                    </Listbox>
          {/* Profile Dropdown */}
          {user && (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {user.photoURL? <img
                    className="h-8 w-8 rounded-full bg-white"
                    src={user.photoURL}
                    alt="User Profile Image"
                  />: <img
                    className="h-8 w-8 rounded-full bg-white"
                    src="/favicon.webp"
                    alt="User Profile Image"
                  />}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* Dashboard */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm 2xl:text-base text-gray-700"
                        )}
                      >
                        Dashboard
                      </Link>
                    )}
                  </Menu.Item>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogOut}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          " px-4 py-2 text-sm 2xl:text-base text-gray-700 w-full text-left flex items-center gap-2"
                        )}
                      >
                        Sign out{" "}
                        <ArrowRightOnRectangleIcon className="h-4 w-4 text-gray-700"></ArrowRightOnRectangleIcon>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </nav>
      {/* Mobile Menu Bar */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cubitose</span>
              <img className="h-8 w-auto" src="/public/white-logo.png" alt="" />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  onClick={()=> setMobileMenuOpen(false)}
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services].map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={()=> setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink
                  onClick={()=> setMobileMenuOpen(false)}
                  to="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/portfolios"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={()=> setMobileMenuOpen(false)}
                >
                  Portfolios
                </NavLink>
              </div>
              <div className="py-6">
                <Link
                  onClick={()=> setMobileMenuOpen(false)}
                  to="/contact-us"
                  className="-mx-3 block rounded px-3 py-2.5 text-base font-semibold leading-7 text-white bg-themeColor text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
