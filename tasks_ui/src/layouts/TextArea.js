const TextArea = ({ label, desc, setDesc }) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <textarea
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        required
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <div className="text-red-600"></div>
    </>
  );
};

export default TextArea;
