import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const GridAnimation = () => {
  useEffect(() => {
    if (window.innerWidth > 800) {
      var horizontalTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var horizontalTL2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var verticalTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var verticalTL2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      horizontalTL.fromTo(
        "#b1",
        { width: "50px" },
        { width: "45%", duration: 1 }
      );
      horizontalTL.fromTo(
        "#p1",
        { y: 100, opacity: 0 },
        { y: 0, delay: 1, opacity: 1 }
      );

      horizontalTL.fromTo(
        "#bot2",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        0
      );
      horizontalTL.fromTo(
        "#bot3",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        1
      );

      horizontalTL2.fromTo(
        "#bot4",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 }
      );
      horizontalTL2.fromTo(
        "#bot5",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      horizontalTL2.fromTo(
        "#bot6",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        "<"
      );

      verticalTL.fromTo(
        "#r1",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 }
      );
      verticalTL.fromTo(
        "#r4",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL.fromTo(
        "#r7",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL2.fromTo(
        "#r2",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 }
      );
      verticalTL2.fromTo(
        "#r5",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL2.fromTo(
        "#r8",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
    }
  });
  return (
    <div className="gr1">
      <div className="card1">
        <h1 className="head font_bold ">Our Services</h1>
      </div>
      <div className="card1">
        <div className="border-bot" id="bot2"></div>
        <div className="border-right" id="r2"></div>
      </div>
      <div className="card1">
        <div className="border-bot" id="bot3"></div>
        <div className="card-content  ">
          <p className="card-title font_bold">Market Research and Analysis</p>
          <p className="card-text">
            {" "}
            We conduct thorough market research to identify high-potential
            investment opportunities.
          </p>
        </div>
      </div>
      <div className="card1">
        <div className="border-bot" id="bot4"></div>
        <div className="border-right" id="r4"></div>
        <div className="card-content">
          <p className="card-title font_bold">Property Sourcing</p>
          <p className="card-text">
            {" "}
            Leveraging our extensive network, we source properties that meet
            your investment criteria.
          </p>
        </div>
        {/* <div className="card1-content">
          <p className="txt font_medium">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
          <div className="btn-flex">
            <button className="bl-btn" id="b1">
              {" "}
              <p className="font_medium" id="p1">Book your Stay</p>
            </button>
            <button className="trans-btn" id="b1">
              <p className="font_medium" id="p1">Contact us</p>
            </button>
          </div>
        </div> */}
      </div>
      <div className="card1">
        <div className="border-bot" id="bot5"></div>
        <div className="border-right" id="r5"></div>
        <div className="card-content">
          <p className="card-title font_bold">Due Diligence</p>
          <p className="card-text">
            Our team performs comprehensive due diligence, including property
            inspections, title checks, and financial assessments, to ensure you
            make informed decisions.
          </p>
        </div>
      </div>
      <div className="card1">
        <div className="border-bot" id="bot6"></div>
        <div className="card-content">
          <p className="card-title font_bold">Personalized Investment Plans</p>
          <p className="card-text">
            We work with you to develop a customized investment strategy based
            on your financial goals, risk tolerance, and investment horizon.
          </p>
        </div>
      </div>
      <div className="card1">
        <div className="border-right" id="r7"></div>
        <div className="card-content">
          <p className="card-title font_bold">Loan Advisory Services</p>
          <p className="card-text">
            Our financial experts assist you in securing the best mortgage rates
            and financing options tailored to your investment needs.
          </p>
        </div>
      </div>
      <div className="card1">
        <div className="border-right" id="r8"></div>
        <div className="card-content">
          <p className="card-title font_bold">Expert Advice</p>
          <p className="card-text">
            Benefit from our team's extensive experience and industry knowledge
            to make informed investment decisions.
          </p>
        </div>
      </div>
      <div className="card1">
        <div className="card-content">
          <p className="card-title font_bold">Risk Management</p>
          <p className="card-text">
            We identify potential risks and provide strategies to mitigate them,
            ensuring your investments are protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridAnimation;
