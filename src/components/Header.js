import "./styles.css";
import logo from "../images/globe.png";
const Header = () => {
  return (
    <header className="index-header">
      <div className="header-container-index">
        <img className="logo" src={logo} />
        <h1 className="index-title">Deine Reisekarte ins Nirwana</h1>
      </div>
    </header>
  );
};

export default Header;
