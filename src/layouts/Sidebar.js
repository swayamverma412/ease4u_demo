import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
    section: "Logistics",
  },
  {
    title: "PO Status",
    href: "/table",
    icon: "bi bi-layout-split",
    section: "My Account",
  },
  {
    title: "Monthly Report",
    href: "/monthly",
    icon: "bi bi-download",
    section: "My Account",
  },
  {
    title: "Book Shipments",
    href: "/forms",
    icon: "bi bi-textarea-resize",
    section: "Logistics",
  },
  {
    title: "Resource",
    href: "/about",
    icon: "bi bi-folder",
    section: "Help",
  },
  {
    title: "Contact Us",
    href: "/ContactUs",
    icon: "bi bi-envelope",
    section: "Help",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  const sections = [...new Set(navigation.map(item => item.section))];

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">Coca cola</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="text-gray-500 pt-3 pb-2 pl-1 text-sm">{section}</h6>
              {navigation
                .filter(item => item.section === section)
                .map((navi, idx) => (
                  <NavItem key={idx} className="sidenav-bg">
                    <Link
                      to={navi.href}
                      className={
                        location.pathname === navi.href
                          ? "active nav-link py-3"
                          : "nav-link text-secondary py-3"
                      }
                    >
                      <i className={navi.icon}></i>
                      <span className="ms-3 d-inline-block">{navi.title}</span>
                    </Link>
                  </NavItem>
                ))}
            </div>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
