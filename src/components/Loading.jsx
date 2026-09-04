

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-[#18181b] flex items-center justify-center">
      <div className="w-10 h-10 mr-3 animate-spin border-[3px] border-current border-t-[#C1121F] text-white rounded-full"></div>
      <h1 className="text-xl md:text-3xl text-white font-bold">Loading...</h1>
    </div>
  );
};

export default Loading;
