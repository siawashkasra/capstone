
const Input = ({ label, register, errors }) => {

    return(
        <>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                {...register("name", { required: true, maxLength: 20 })}

            />
            <div className="text-red-600">
                {errors.name?.type === 'required' && "Name is required"}
                {errors.name?.type === 'maxLength' && "Max length should be 20"}
            </div>

        </>
    )
}


export default Input