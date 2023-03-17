import style from "./Navbar.module.css";
import Union from "../../Images/Union.svg";

function Navbar() {
  return (
    <div className={style.parent}>
      <div>
        <p>Jessie.</p>
      </div>
      <div>
        <p>Portfolio</p>
        <p>Blog</p>
        <p>Client review</p>
        <p>Contact me</p>
      </div>
      <div>
        <div className={`${style.dropdown} ${style.dropdown}`}>
          <p>More</p>
          <ul className={`${style.dropdownC}`}>
            <li>
              <p>Portfolio</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Client review</p>
            </li>
            <li>
              <p>Contact me</p>
            </li>
          </ul>
        </div>
        <button>Schedule a call</button>
        <img src={Union} alt="dkh" />
      </div>
    </div>
  );
}

export default Navbar;
