import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }) {

  return (

    <div className="layout">

      <SideBar />

      <div className="main-section">

        <Header />

        <div className="page-content">

          {children}

        </div>

      </div>

    </div>

  );

}

export default Layout;