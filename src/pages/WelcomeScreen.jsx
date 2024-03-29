import gannVideo from "../assets/gannVideo.mp4";
const WelcomeScreen = () => {
  return (
    <div className="relative">
      <video className="videoTag w-full h-auto" autoPlay loop muted>
        <source src={gannVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Gannon Univerity{" "}
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
