const Header = ({title, setOpen}) => {
    console.log(title)
    return (
        <>
          {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-100">
            <body class="h-full">
            ```
          */}
          <div className="min-h-full">
            <header className="bg-white shadow">
              <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                { (title === 'Dashboard' || title === 'Reports') ? "": <button onClick={setOpen} className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Create
                </button> }
              </div>
            </header>
          </div>
        </>
      )
}


export default Header