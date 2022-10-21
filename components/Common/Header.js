const Header = ({ icon, children }) => (
  <header>
    <h1>
      <i className={icon}></i>
    </h1>
    {children}
  </header>
);
export default Header;
