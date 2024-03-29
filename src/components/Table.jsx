import Title from "antd/es/skeleton/Title";

const Table = ({ proposal }) => {
  const { id, proposalTitle, description, status, studentId } = proposal;
  return (
    <>
      <div className="overflow-x-auto flex-grow max-w-6xl mx-auto p-4">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                proposal Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Proposal Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                submitted By
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remark
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{proposalTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{studentId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{description}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  Approve
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
