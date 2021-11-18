const Input = ({ type, id, label, title, setTitle, readOnly=false }) => {
  return (
    <>
      <div>
        <label
          htmlFor={title}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          type={type}
          name={title}
          id={id}
          autoComplete="given-name"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          readOnly={readOnly}
        />
        <div className="text-red-600"></div>
      </div>
    </>
  );
};

export default Input;
