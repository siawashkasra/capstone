// import Header from "../Header"
import Button from "./Button";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children, setOpen }) => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      {/* <Header title={title} setOpen={setOpen} /> */}
      <main className=" flex-auto">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-gray-200 rounded-lg">{children}</div>
          </div>
          {/* /End replace */}
        </div>
        <Button setOpen={setOpen} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
