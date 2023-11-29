import Breadcrumb from '../components/Breadcrumb';
const EventList = () => {
    return (
      <>
        <Breadcrumb pageName="Event List" />
        <div className="bg-white dark:bg-meta-4 rounded-lg shadow dark:border-strokedark dark:text-white dark:focus:border-primary p-6">
  <h2 className="text-title-md2 font-semibold text-black dark:text-white mb-4">
    Event List
  </h2>

  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Event Name
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Description
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-800">
      {[1, 2, 3,4,5,6,7,8].map((index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                {/* Add event-specific icon or image */}
                <img className="h-10 w-10 rounded-full" src={`../images/event-${index}.jpg`} alt={`Event ${index}`} />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Event {index}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Date {index}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Description {index}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <a href="#" className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
              View
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

     </>
  );
};

export default EventList;