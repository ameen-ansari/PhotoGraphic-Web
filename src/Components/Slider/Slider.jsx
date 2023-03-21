import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Images/Rectangle 4.svg'
import img2 from '../../Images/Rectangle 5.svg'
import img3 from '../../Images/Rectangle 6.svg'
import img from '../../Images/Vector (5).svg'


export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let arr = [
      img1 ,
      img2 ,
      img1 ,
      img1 ,
      img1 ,
      img3 ,
    ]

    return (
      <div className={style.parent}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {arr.map((img, i) => {
            return (
                  <img key={i} className={style.img} alt="img" src={img} />
            );
          })}
        </Slider>
        <div className={style.arrows}>
          <img onClick={this.previous} src={img} alt="" />
          <img onClick={this.next} src={img} alt="" />
        </div>
      </div>
    );
  }
}