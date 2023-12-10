import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";
import { useNavigate, redirect} from "react-router-dom";

    const code = import.meta.env.VITE_SIGNUP_CODE

export default function SignUpCaptcha() {
  // const [userInput, setUserInput] = useState("");
  // const [isValid, setIsValid] = useState(null);

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const handleSubmitCode = (e) => {
        e.preventDefault()
        const form = e.target;
      const teamCode = form.team_code.value;
      // setUserInput(teamCode)

      if (teamCode === code) {
            // setIsValid(true);
            navigate('/team-login');
        }
      else {
        // setIsValid(false);
        // setUserInput("");
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
        {/* Info */}
      <div className="flex h-screen flex-col justify-center">
        <div className="">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Team Code
          </h2>
          <p className="text-center text-gray-500 text-sm">Please enter the secret code to proceed to the login page.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form onSubmit={handleSubmitCode} className="space-y-6">
            <div>
              <label htmlFor="teamCode" className="block text-sm font-medium leading-6 text-gray-900">
                Team Code
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
          </div>
          
    </>
  )
}
