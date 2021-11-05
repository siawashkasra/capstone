import Input from "../layouts/Input";
import TextArea from "../layouts/TextArea";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Form = ({setTeam, createTeam, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createTeam(data, setTeam);
    setOpen(false);
  };

  return (
    <div className="mt-2 w-96 relative">
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Input
                      label="Team Name"
                      register={register}
                      errors={errors}
                    />
                  </div>

                  <div className="col-span-6">
                    <TextArea
                      label="Description"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-4 py-3 text-right sm:px-6">
                <button
                  type="button"
                  className="m-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="m-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* Ends here */}
    </div>
  );
};

export default Form;
