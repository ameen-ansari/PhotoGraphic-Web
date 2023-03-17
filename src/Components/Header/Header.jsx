import style from "./Header.module.css";
import bgimg from "../../Images/Rectangle 2.svg";
import circleType from "../../Images/Ellipse 1.svg";
import line from "../../Images/Line 1.svg";
import SimpleSlider from "../Slider/Slider";
import img from '../../Images/Vector (5).svg'

function Header() {
  return (
    <div className={style.parent}>
      <img className={style.bg} src={bgimg} alt="" />
      <div>
        <div>
          <img src={circleType} alt="" />
          <p>Pro</p>
          <p>Photograper</p>
        </div>
        <div>
          <img src={line} alt="" />
          <p>Let’s take your photographs to next level</p>
        </div>
      </div>
      <div>
        <div>
          <p>Hello there, Nice to meet you. I am</p>
          <p>Jessie</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <div>
          <div>
            <p>Latest shorts</p>
            <p>View All</p>
          </div>
          <div className={style.sliderp}>
            <SimpleSlider />
          </div>
          <div>
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
