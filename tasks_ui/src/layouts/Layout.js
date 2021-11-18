import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <Main>
        { children }
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
