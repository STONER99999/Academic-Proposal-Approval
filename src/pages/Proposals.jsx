import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useUpdate } from "../Auth/useUpdate";
import { UpdateProposalStatus, getProposals } from "../services/apiProposals";
import { Link } from "react-router-dom";
import { MiniSpinner } from "../components/Spinner";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
export const ProposalsTable = () => {
  // const { update, isLoading } = useUpdate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const queryClient = useQueryClient();
  const hanldeUpdate = (value, id) => {
    console.log({ value, id });
    UpdateProposalStatus(value, id);
    queryClient.invalidateQueries({ queryKey: ["proposals"] });
    QueryCache.invalidateQueries({ active: true });
  };
  queryClient.invalidateQueries({ queryKey: ["proposals"] });
  const handleRejected = (value, id) => {
    handleOpen("xs");
    console.log({ value, id });
    UpdateProposalStatus(value, id);
    queryClient.invalidateQueries({ queryKey: ["proposals"] });
    QueryCache.invalidateQueries({ active: true });
  };
  queryClient.invalidateQueries({ queryKey: ["proposals"] });
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
    toast.error("proposals could not be loaded");
  }
  const handleMessage = () => {
    toast.error("HEY! YOU ALLREADY Approved PROPOSAL ");
  };
  const rejectedMessage = () => {
    toast.error("HEY! YOU ALLREADY Rejected PROPOSAL ");
  };

  return (
    <div className="overflow-x-auto flex-grow max-w-6xl mx-auto p-4">
      <table className="table-auto min-w-full divide-y divide-gray-200">
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
              faculty id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              chairperson
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              file
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Remark
            </th>
          </tr>
        </thead>

        {data?.map((proposal) => (
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
                  {proposal?.facultyId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {proposal?.chairperson}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    download={proposal?.file}
                    href={proposal?.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "blue" }}
                  >
                    {"Download " +
                      (proposal?.file &&
                        proposal?.file.split("/")[
                          proposal?.file.split("/")?.length - 2
                        ]) +
                      " file"}
                  </Link>
                  {/* <DownloadButton fileurl={proposal.fileurl} /> */}
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

                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    type="button"
                    value={"approved"}
                    style={{
                      display:
                        proposal?.status === "rejected"
                          ? "none"
                          : "inline-block",
                    }}
                    onClick={
                      proposal?.status === "pending"
                        ? () => hanldeUpdate("approved", proposal?.id)
                        : () => handleMessage()
                    }
                    className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    {proposal?.status === "approved" ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    style={{
                      display:
                        proposal?.status === "approved"
                          ? "none"
                          : "inline-block",
                    }}
                    onClick={
                      proposal?.status === "pending"
                        ? () => handleRejected("rejected", proposal?.id)
                        : () => rejectedMessage()
                    }
                    value={"rejected"}
                    className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    {proposal?.status === "rejected" ? "Rejected" : "Reject"}
                  </button>

                  <Dialog open={open} size="xs" handler={handleOpen}>
                    <div className="flex items-center justify-between">
                      <DialogHeader className="flex flex-col items-start">
                        {" "}
                        <Typography className="mb-1" variant="h4">
                          Feedback
                        </Typography>
                      </DialogHeader>
                    </div>
                    <DialogBody>
                      <div className="grid gap-6">
                        <Textarea label="Message" />
                      </div>
                    </DialogBody>
                    <DialogFooter className="">
                      <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                      >
                        confirm
                      </Button>
                    </DialogFooter>
                  </Dialog>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};
