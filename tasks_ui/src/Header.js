const Header = () => {
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
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              </div>
            </header>
          </div>
        </>
      )
}


export default Header