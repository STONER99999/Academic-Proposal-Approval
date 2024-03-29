export default function PageNotFound() {
  //

  return (
    <div className="flex mx-96 my-64 items-center h-screen flex-col gap-5">
      <h1 className=" text-black text-5xl">Oops!</h1>
      <p className="flex">Sorry, an unexpected error has occurred.</p>
      <p className="">
        <i className="text-red-800">Not Found ☹️</i>
      </p>
    </div>
  );
}
