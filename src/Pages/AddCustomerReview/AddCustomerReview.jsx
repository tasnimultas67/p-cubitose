import Swal from "sweetalert2";

export default function AddCustomerReview() {
  const handleReviewForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let customerName = form.customer_name.value;
    let customerPosition = form.customer_position.value;
    let customerReview = form.customer_review.value;
    let serviceCategory = form.service_category.value;
    const reviewForm = {
      customerName,
      customerPosition,
      customerReview,
      serviceCategory,
    };
    fetch("https://cubitose-backend-production.up.railway.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            `Successfully added ${customerName}'s review`,
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <>
      <div className="p-5 mr-3 rounded-md backdrop-blur-2xl bg-dashBg shadow-md">
        <div className="">
          <form className="space-y-6" onSubmit={handleReviewForm} method="POST">
            {/* Customer Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 2xl:text-xl"
              >
                Customer Name
              </label>
              <div className="mt-2">
                <input
                  id="customer-name"
                  name="customer_name"
                  type="text"
                  placeholder="example: John Doe"
                  required
                  className="2xl:text-xl block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-themeColor  sm:text-sm sm:leading-6 px-3 bg-white/50"
                />
              </div>
            </div>
            {/* grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7">
              {/* Customer Review Editor */}
              <div className="col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 2xl:text-xl"
                  htmlFor="customer_review"
                >
                  Customer Review
                </label>
                <textarea
                  className="2xl:text-xl w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-themeColor  sm:text-sm sm:leading-6 px-3 bg-white/50"
                  name="customer_review"
                  id="customer-review"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="space-y-5">
                {/* Customer Position */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium leading-6 text-gray-900 2xl:text-xl"
                    >
                      Customer Position
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="customer-position"
                      name="customer_position"
                      type="text"
                      placeholder="example: CEO, Google"
                      required
                      className="2xl:text-xl block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-themeColor  sm:text-sm sm:leading-6 px-3 bg-white/50"
                    />
                  </div>
                </div>
                {/* Project Role */}
                <div>
                  <label
                    htmlFor="project-role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white 2xl:text-xl"
                  >
                    Service Category
                  </label>
                  <select
                    id="project-role"
                    className="2xl:text-xl bg-white/50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    name="service_category"
                    required
                  >
                    <option>Select</option>
                    <option value="Web-Development">Web Development</option>
                    <option value="Web-Design">Web Design</option>
                    <option value="Graphics-Design">Graphics Design</option>
                    <option value="Digital-Marketing">Digital Marketing</option>
                  </select>
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="2xl:text-xl 2xl:py-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
