
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
        <div to="/" className="logo">
          <img src="/logos/iBC.png" alt="" />
        </div>

        <div className="navigation-links">
          <div to="/">Home</div>
          <div to="">About</div>
          <div to="">Contact</div>

          <div onClick={openMenu}>
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
