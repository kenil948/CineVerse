import { ImSpinner8 } from "react-icons/im";

const LoadMoreLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <ImSpinner8 className="text-[#C1121F] text-[26px] animate-spin [animation-duration:1.2s]" />
      <p className="mt-2 text-sm text-zinc-500">Loading...</p>
    </div>
  );
};

export default LoadMoreLoader;
