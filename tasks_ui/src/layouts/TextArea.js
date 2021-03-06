const TextArea = ({ label, description, setDescription, readOnly = false }) => {
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={readOnly}
      >
        {description}
      </textarea>
      <div className="text-red-600"></div>
    </>
  );
};

export default TextArea;
