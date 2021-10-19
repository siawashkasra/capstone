import Header from "../Header"
import Nav from "./Nav"

const Layout = ({children, title}) => {
    return(
        <>  <Nav />
            <Header title={title} />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        {children}
                    </div>
                </div>
                {/* /End replace */}
                </div>
            </main>
        </>
    )
}

export default Layout