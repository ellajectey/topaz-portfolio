import React from "react";

function AchievementModal(props) {
  return (
    <div>
      <div className="flex items-center justify-center ">
        {/* <!-- Author: FormBold Team --> */}
        <div className="mx-auto w-full max-w-[550px] bg-white px-8 py-4 rounded-lg drop-shadow-brown-600">
          <label
            for="name"
            className="mb-3 block text-base font-medium text-[#07074D] text-center text-xl text-brown-400"
          >
            Add New Achievement
          </label>
          <form>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Achievement title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 pt-3">
              <div className="mb-5">
                <label
                  for="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add a brief description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-small text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date Obtained
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                className="flex  cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 my-8"
                tabindex="0"
              >
                <span
                  for="photo-dropbox"
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="h-6 w-6 stroke-gray-400"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                    <path
                      d="M80,128a80,80,0,1,1,144,48"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                    <polyline
                      points="118.1 161.9 152 128 185.9 161.9"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></polyline>
                    <line
                      x1="152"
                      y1="208"
                      x2="152"
                      y2="128"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">
                    Drop Image to Attach, or
                    <span className="text-blue-600 underline"> Upload</span>
                  </span>
                </span>
                <input id="photo-dropbox" type="file" className="sr-only" />
              </label>
              <button className="hover:shadow-form w-full rounded-md bg-[#964B00] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add Achievement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AchievementModal;
