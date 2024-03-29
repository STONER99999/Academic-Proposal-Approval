import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProposals } from "../services/apiProposals";
import { MiniSpinner } from "../components/Spinner";
import toast from "react-hot-toast";
import { useUser } from "../Auth/useUser";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Status = () => {
  const queryClient = useQueryClient();
  const [Proposal, setProposal] = useState([]);
  const { isPending, isError, data } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposals,
  });
  console.log(data);
  if (isPending) {
    <div className="w-full h-[500px] flex justify-center items-center">
      <MiniSpinner ClassName="h-12 w-12  " />
    </div>;
  }

  if (isError) {
    toast.error("Error while fetching data");
  }
  const { user } = useUser();

  const filteredProposals = data?.filter(
    (proposal) => proposal?.facultyId === user?.id
  );

  queryClient.invalidateQueries({ queryKey: ["proposals"] });
  useEffect(() => {
    setProposal(filteredProposals);
    queryClient.invalidateQueries({ queryKey: ["proposals"] });
  }, [queryClient, !isPending]);

  // const Status = Proposal?.map((d) => {
  //   return d?.status;
  // });

  return (
    <div className="overflow-x-auto flex-grow max-w-6xl mx-auto p-4">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        {Proposal?.length > 0 ? (
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                description
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                chairperson
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                faculty id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                file
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                status
              </th>
            </tr>
          </thead>
        ) : (
          <p className=" duration-100 inline-block py-4 px-8  text-teal-800 rounded-lg text-lg font-style: italic  ">You have not submitted any proposal yet , Submit your first Proposal!</p>
        )}

        {Proposal?.map((proposal) => (
          <>
            <tbody
              className="bg-white divide-y divide-gray-200"
              key={proposal?.id}
            >
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">{proposal?.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {proposal?.proposalTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {proposal?.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {proposal?.chairperson}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {proposal?.facultyId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    download={proposal?.file}
                    href={proposal?.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "blue" }}
                  >
                    {
                      proposal?.file?.split("/")[
                        proposal?.file?.split("/")?.length - 1
                      ]
                    }
                  </Link>
                </td>
                <td
                  className={`${
                    proposal?.status == "approved"
                      ? "bg-green-800"
                      : proposal?.status === "pending"
                      ? "bg-yellow-800"
                      : "bg-red-800"
                  } px-6 py-4 whitespace-nowrap`}
                >
                  {proposal?.status}
                </td>

                {/* <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    type="button"
                    value={"approved"}
                    onClick={
                      proposal?.status === "pending"
                        ? () => hanldeUpdate("approved", proposal?.id)
                        : () => handleMessage()
                    }
                    className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    {proposal.status === "approved" ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={
                      proposal.status === "pending"
                        ? () => hanldeUpdate("rejected", proposal?.id)
                        : () => handleMessage()
                    }
                    value={"rejected"}
                    className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    {proposal.status === "rejected" ? "Rejected" : "Reject"}
                  </button>
                </td> */}
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
    // <div className="flex ml-20">
    //   <div className="max-w-md  p-8  ">
    //     <h2 className="text-2xl font-semibold mb-4">Proposal Status</h2>
    //     <div className="flex items-center space-x-4 mb-4">
    //       <span className="text-gray-600 mr-2">Status:</span>
    //       <div
    //         className={`text-white rounded-full px-4 py-1 ${
    //           Status?.[0] === "pending"
    //             ? "bg-yellow-900"
    //             : Status?.[0] === "approved"
    //             ? "bg-green-800"
    //             : "bg-red-800"
    //         }`}
    //       >
    //         {Status?.[0]}
    //       </div>
    //     </div>
    //     {Status?.[0] === "pending" && (
    //       <p className="text-gray-600">Your proposal is under review.</p>
    //     )}
    //     {Status?.[0] === "rejected" && (
    //       <p className="text-gray-600">Your proposal has been rejected.</p>
    //     )}
    //     {Status?.[0] === "approved" && (
    //       <p className="text-gray-600">Your proposal has been accepted.</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default Status;
