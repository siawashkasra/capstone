const Header = ({ title, entity }) => {
  return (
    <>
      <div className="min-h-full flex justify-end">
        <header className="bg-white">
          <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-purple-900">{entity.name}</h1> <span>{title}</span>
            {/* {title === "Dashboard" || title === "Reports" ? (
              ""
            ) : (
              <button
                onClick=''
                className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Create
              </button>
            )} */}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
