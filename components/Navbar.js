function Navbar() {
  const showSidebar = () =>
    document.getElementById("sidebar").classNameList.toggle("active");
    function openMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("open-menu");
  }

  return (
    < >
      <header id="header">
        <div id="menu" className="menu">

          <div className="menu-grid">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Semester 1</li>
              <li>Semester 2</li>
              <li>Semester 3</li>
              <li>Semester 4</li>
              <li>Semester 5</li>
              <li>Semester 6</li>
            </ul>
          </div>


          <div className="close-button" onClick={openMenu}>
            x
          </div>
        </div>
      </header>
      <div className="header">
        <a href="/" className="logo">
          <img src="/logos/iBC.png" alt="" />
        </a>

        <div className="navigation-links">
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>

          <a onClick={openMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
