import logo from "../assets/logo.svg";
import X from "../assets/twitter (1).png";
import insta from "../assets/instagram.png";
import face from "../assets/facebook (2).png";
const Footer = () => {
  return (
    <>
      <div className="footer-main text_color">
        
          <div className="flex justify-center items-center">
            <img className="comp_img" src={logo} alt="logo" />
            <h1 className=" comp_name font_bold">Magst</h1>
          </div>
          
     
        <div className="md:mb-5">
          <h2 className=" footer_title font_bold">Links</h2>
          <ul>
            <li className="link font_semibold">Listing</li>
            <li className="link font_semibold">Founder</li>
            <li className="link font_semibold">Trusted Clients</li>
          </ul>
        </div>
        <div className="md:mb-5">
          <h2 className=" footer_title font_bold">Contact us</h2>
          <ul>
            <li className="link font_semibold">Email: Magst@gmail.com</li>
            <li className="link font_semibold">Fax: +92-31123213</li>
            <li className="link font_semibold">Phone: +92-123456789</li>
          </ul>
        </div>
        <div className="md:mb-5">
          <h2 className=" footer_title font_bold">Social</h2>
          <div className="flex">
            <img className="icon" src={X} alt="twiter" />
            <img className="icon" src={insta} alt="inst" />
            <img className="icon" src={face} alt="face" />
          </div>

          {/* <ul>
          <li className="link font_semibold">FaceBook</li>
          <li className="link font_semibold">Instagram</li>
          <li className="link font_semibold">Twitter</li>
        </ul> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
