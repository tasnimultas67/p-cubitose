import { Fragment, useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const code = import.meta.env.VITE_SIGNUP_CODE


export default function Login() {
  const { signInUser,signInGoogle } = useContext(AuthContext);
  const [error, setError] = useState();
  const [isMatch, setisMatch] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)


// Email Password Login Handle
  const userLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let userName = form.email.value;
    let password = form.password.value;
    signInUser(userName, password)
      .then((result) => {
        const user = result.user;
        const loggedUserInfo = {
          email: user.email,
        };
        form.reset();
            navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Google Login Handle
  const handleGoogleLogin = () => {
    signInGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
      })
    
  }
  // Secret Code input
  const handleSubmitCode = (e) => {
        e.preventDefault()
        const form = e.target;
        const teamCode = form.team_code.value;
        // if user code matched with secret code then login form will show
        if (teamCode === code) {
            setisMatch(true)
          }
        else {
          setOpen(true)
          }
  }

  return (
    <>
      {/* Error Modal */}
      <div>
              <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Incorrect Code
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently
                                        removed. This action cannot be undone.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                      </div>
                                      {/*Action Buttons */}
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                className="inline-flex w-full justify-center rounded-md bg-themeColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                                >
                                    Try Again
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={() =>  navigate('/contact-us')}
                                    ref={cancelButtonRef}
                                >
                                    Contact
                                </button>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Information */}
        <div className="order-2 lg:order-1">
                {/* Code Input */}
            {isMatch== false?<div className="flex py-20 lg:h-screen flex-col justify-center bg-white">
              <div className="">
                <h2 className="text-center text-4xl font-bold tracking-tight leading-tight text-black mb-3">
                  Secret Code
                </h2>
                <p className="text-center text-gray-500 text-sm">Please enter the secret code to proceed to the login page.</p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-5 lg:px-0">
                <form onSubmit={handleSubmitCode} className="space-y-6">
                  <div>
                    <label htmlFor="teamCode" className="block text-sm font-medium leading-6 text-gray-900">
                      Secret Code
                    </label>
                    <div className="mt-2">
                      <input
                        id="team-code"
                        name="team_code"
                          type="text"
                          placeholder="Enter your team code"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-themeColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit Code
                    </button>
                  </div>
                </form>
              </div>
            </div> : ""}
            {/* Login Form */}
            {isMatch && <div className="flex min-h-full flex-col justify-center px-6 py-12 pb-20 bg-white">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                  Cubitose Team Login
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                  onSubmit={userLogin}
                  className="space-y-6"
                  action="#"
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3"
                      />
                    </div>
                  </div>
                  {/* Error Message */}
                  {error && (
                    <div>
                      <p className="text-red-800 text-center">{error.message}</p>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-themeColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeColor"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              {/* Google Login */}
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 w-full m-auto text-center bg-white p-2 rounded-md shadow-lg border font-medium"><img className="h-5 w-5" src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0" alt="Google Login" /> Sign in with Google</button>
              </div>
            </div>}
        </div>
        {/* Image */}
        <div className="order-1 lg:order-2">
          <img className="h-[20rem] lg:h-[45rem] lg:w-full w-11/12 mt-5 lg:mt-0 rounded-md lg:rounded-none m-auto object-cover object-bottom" src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  );
}
