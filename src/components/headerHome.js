import '../static/css/headerHome.css';

function HeaderHome() {
  return (
    <nav className="header-nav">
      <div className="header-container">
        <img src="/img/LOGO.png" alt="Logo" className="header-logo" />
        <ul className="header-menu">
          <li>
            <span className="menu-num">01</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>Home</span></span>
          </li>
          <li>
            <span className="menu-num">02</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>Solar system</span></span>
          </li>
          <li>
            <span className="menu-num">03</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>Objects</span></span>
          </li>
          <li>
            <span className="menu-num">04</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>Events</span></span>
          </li>
          <li>
            <span className="menu-num">05</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>About Us</span></span>
          </li>
          <li>
            <span className="menu-num">06</span>
            <span className="menu-row"><span className="menu-slash">//</span><span>Contacts</span></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default HeaderHome;