import Breadcrumb from "../components/Breadcrumb";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb pageName="Dashboard" />
      <div className="grid grid-cols-1 bg-white dark:bg-meta-4 rounded-lg shadow dark:border-strokedark dark:text-white dark:focus:border-primary">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white p-7">
          Ongoing Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <a
                href="#"
                className="card-container flex flex-col shadow bg-gray  rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={`../images/card/card-${index}.jpg`}
                  alt={`Event ${index}`}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Invite
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 bg-white mt-6 dark:bg-meta-4 rounded-lg shadow dark:border-strokedark dark:text-white dark:focus:border-primary">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white p-7">
          Upcoming Events
        </h2>

        <div className="flex overflow-x-auto p-4 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex-shrink-0 w-80">
              <a
                href="#"
                className="card-container  flex flex-col shadow bg-gray rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-48 md:h-40"
                  src={`../images/card/card-${index}.jpg`}
                  alt={`Event ${index}`}
                />
                <div className="flex flex-col justify-between p-4 leading-normal ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Invite
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Dashboard;
