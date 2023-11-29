

export default function AddCustomerReview() {



  return (
    <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="">
                  <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> Add Customer Review </h2>
              </div>
              <div className="mt-10">
                  <form className="space-y-6" action="#" method="POST">
                      {/* Customer Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Customer Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="customer-name"
                                name="customer_name"
                                type="text"
                                placeholder="example: John Doe"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                      </div>
                      {/* grid  */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7">
                          {/* Customer Review Editor */}
                          <div className="col-span-2">
                              <label className="block text-sm font-medium leading-6 text-gray-900 mb-2" htmlFor="customer_review">Customer Review</label>
                              <textarea className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" name="customer_review" id="customer-review" cols="30" rows="10"></textarea>
                          </div>

                          <div className="space-y-5">
                                {/* Customer Position */}
                              <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">Customer Position</label>
                                    </div>
                                        <div className="mt-2">
                                        <input id="customer-position" name="customer_position" type="text" placeholder="example: CEO, Google" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
                                        
                                        </div>
                              </div>
                              {/* Project Role */}
                                  <div>
                                    <label htmlFor="project-role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Category</label>
                                    <select id="project-role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                        <option selected="">Select</option>
                                        <option value="Web-Development">Web Development</option>
                                        <option value="Web-Design">Web Design</option>
                                        <option value="Graphics-Design">Graphics Design</option>
                                        <option value="Digital-Marketing">Digital Marketing</option>
                                    </select>
                                </div>
                              {/* Submit Button */}
                              <div className="mt-6">
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Review</button>
                              </div>
                          </div>
                      </div>
                      
                  </form>
              </div>
          </div>
    </>
  )
}
