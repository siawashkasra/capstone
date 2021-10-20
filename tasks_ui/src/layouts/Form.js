import Input from "./Input"
import List from "./List"
import TextArea from "./TextArea"


const Form = () => {
    return(
        <div className="mt-2 w-96 relative">
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="mt-5 md:mt-0">
                    <form action="#" method="POST">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <Input label="Team Name" />
                            </div>

                            <div className="col-span-6">
                                <List />
                            </div>
                            
                            <div className="col-span-6">
                                <TextArea />
                            </div>
                        </div>
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
    )
}


export default Form