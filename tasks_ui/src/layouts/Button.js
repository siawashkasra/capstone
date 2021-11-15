import { PencilAltIcon } from "@heroicons/react/outline";

const Button = ({ setOpen }) => {
  return (
    <div className="absolute bottom-24 right-24">
      <div className="flex justify-center h-20 w-20 m-2 py-2 px-4 border border-transparent shadow-2xl text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 hover:rotate-45">
        <button onClick={() => setOpen(true)}>
          <PencilAltIcon className="h-8" />
        </button>
      </div>
    </div>
  );
};

export default Button;
