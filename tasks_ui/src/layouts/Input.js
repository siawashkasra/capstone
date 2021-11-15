const Input = ({ type, id, label, name, setName }) => {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          autoComplete="given-name"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="text-red-600"></div>
      </div>
    </>
  );
};

export default Input;
