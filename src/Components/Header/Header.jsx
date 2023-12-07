import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
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
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const services = [
  {
    name: "Web Development",
    description: "Get a better understanding of your traffic",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
  {
    name: "Graphics Design",
    description: "Speak directly to your customers",
    href: "/services/graphics-design",
    icon: PaintBrushIcon,
  },
  {
    name: "Search Engine Optimization",
    description: "Your customers’ data will be safe and secure",
    href: "/services/search-engine-optimization",
    icon: MegaphoneIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("cubitose-access-token");
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
        <div className="flex lg:hidden">
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
        <div className="hidden lg:flex gap-10 items-center">
          {/* Menu */}
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <NavLink to="/" className="text-sm leading-6 text-white uppercase">
              Home
            </NavLink>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-white uppercase focus-visible:outline-none">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ">
                  {({ close }) => (
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
              className="text-sm leading-6 text-white uppercase"
            >
              About Us
            </NavLink>
            <NavLink
              to="/portfolios"
              className="text-sm leading-6 text-white uppercase"
            >
              Portfolios
            </NavLink>
          </Popover.Group>
          {/* Menu Contact Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact-us"
              className="text-sm leading-6 text-themeColor bg-white py-2 px-4 rounded-md uppercase"
            >
              Contact Us <span aria-hidden="true"></span>
            </Link>
          </div>
          {/* Profile Dropdown */}
          {user && (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-white"
                    src="/favicon.webp"
                    alt="User Profile Image"
                  />
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/public/white-logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
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
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
