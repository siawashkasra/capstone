const Header = ({ title, name = false, create = false, setOpen }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-white flex justify-between">
          <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-purple-900">{name}</h1>{" "}
            <span className={name === false ? "text-lg font-bold" : ""}>
              {title}
            </span>
          </div>
        </div>
        <div>
          {create === true ? (
            <button
              onClick={() => setOpen(true)}
              className=" block bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            >
              Create
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
