function Header() {
    return   <nav className="light-blue darken-1">
    <div className="nav-wrapper">
        <a href="!#" className="brand-logo">Movies</a>

      

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* <li>
          <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" for="search"><i className="material-icons">Search Movies</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
          </li> */}
        <li><a href="!#">Gallery</a></li>
      </ul>
    </div>
  </nav>
}

export default Header