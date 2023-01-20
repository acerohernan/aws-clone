const Loader: React.FC = () => {
  return (
    <div
      className="animate-spin inline-block w-10 h-10 border-[2px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
