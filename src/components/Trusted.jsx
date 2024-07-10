import { Parallax } from "react-parallax";
import banner from "../assets/trusted.jpg";
import comp from "../assets/Emaar-Properties-Logo.png";
import face from "../assets/fac.png"
import addi from "../assets/adidas.png"
import nike from '../assets/nike.png'
import apple from '../assets/apple-logo.png'

const Trusted = () => {
  return (
    <>
      <Parallax
        className="parallax"
        blur={0}
        bgImage={banner}
        strength={100}
        bgImageStyle={{ minHeight: "700px" }}
      >
        <div className="trusted-content font_bold">Trusted Us</div>
      </Parallax>
      <div className="companies">
        {/* <h1 className="head font_color font_bold">Trusted Clients</h1> */}
        <div className="items">
          <div className="item">
            <img className="comp_img" src={apple} alt="companies" />
            <p className=" comp_name font_bold">Apple </p>
          </div>
          <div className="item">
            <img className="comp_img" src={nike} alt="companies" />
            <p className=" comp_name font_bold">Nike </p>
          </div>
          <div className="item">
            <img className="comp_img" src={addi} alt="companies" />
            <p className=" comp_name font_bold">Addidas </p>
          </div>
          <div className="item">
            <img className="comp_img" src={face} alt="companies" />
            <p className=" comp_name font_bold">FaceBook </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
