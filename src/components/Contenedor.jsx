import UltimoCreadoDetalle from "./UltimoCreadoDetalle";
import TotalPaneles from "./TotalPaneles";
import CategoriasPanel from "./CategoriasPanel";

function Contenedor() {
    return (
        <>
            <div id="wrapper">
                {/* Sidebar */}
                <ul
                    className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    {/* Sidebar - Brand */}
                    <a
                        className="sidebar-brand d-flex align-items-center justify-content-center"
                        href="/"
                    >
                        <div className="sidebar-brand-icon">
                            <p>Grupo-5 React</p>
                        </div>
                    </a>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard - UrbanEats</span>
                        </a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">Actions</div>
                    {/* Nav Item - Pages */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/">
                            <i className="fas fa-fw fa-folder" />
                            <span>Pages</span>
                        </a>
                    </li>
                    {/* Nav Item - Charts */}
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-chart-area" />
                            <span>Charts</span>
                        </a>
                    </li>
                    {/* Nav Item - Tables */}
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-table" />
                            <span>Tables</span>
                        </a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Alerts */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        id="alertsDropdown"
                                    >
                                        <i className="fas fa-bell fa-fw" />
                                        {/* Counter - Alerts */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                </li>
                                {/* Nav Item - Messages */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        id="messagesDropdown"
                                    >
                                        <i className="fas fa-envelope fa-fw" />
                                        {/* Counter - Messages */}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                </li>
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        id="userDropdown"
                                    >
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                            Grupo-5
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Content Row Top */}
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                            </div>
                            {/* Content Row Movies*/}
                            <TotalPaneles />
                            {/* End movies in Data Base */}
                            {/* Content Row Last Movie in Data Base */}
                            <div className="row">
                                {/* Last Movie in DB */}
                                <UltimoCreadoDetalle />
                                {/* End content row last movie in Data Base */}
                                {/* Genres in DB */}
                                <CategoriasPanel />
                                {/*End Genres in DB */}
                            </div>
                        </div>
                        {/*End Content Row Top*/}
                    </div>
                    {/* End of MainContent */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Dashboard 2021</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
        </>
    );
}

export default Contenedor;