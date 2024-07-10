// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { applicant } from "../Api/api.js";
// import { Disc } from "react-feather";

// gsap.registerPlugin(ScrollTrigger);

// const LineAnimation = () => {
//   const [listingdata, setlistingdata] = useState([]);
//   const imge_url = "https://locatestudent.com/magst/upload/";

//   const legRef = useRef(null);
//   const imageRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const data = {
//       type: "get_data",
//       table_name: "listings",
//     };
//     applicant(data).then((res) => {
//       setlistingdata(res?.data?.data);
//     });

    
//     const arrLength = listingdata.length;
    

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".clock",
//         start: "top 50%",
//         end: "bottom 20%",
//         toggleActions: "play none none none",
//         onLeave: () => {
//           tl2.pause();
//         },
//         onEnterBack: () => {
//           tl2.play();
//         },
//       },
//     });
//     // tl.fromTo(
//     //   "#line",
//     //   { width: "0%" },
//     //   { width: "29%", delay: 2, duration: 2 }
//     // );

//     const tl2 = gsap.timeline({
//       repeat: -1,
//       scrollTrigger: {
//         trigger: ".clock",
//         start: "top 50%",
//         end: "bottom 20%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl2.to(legRef.current, {
//       rotation: 360,
//       transformOrigin: "bottom",
//       duration: 3,
//       ease: "linear",
//       scale: 0,
//       opacity: 0,
      
//       onComplete: () => {
//         setIndex((prevIndex) => (prevIndex + 1) % arrLength);
//       },
//       onUpdate: () => {
//         let angle = gsap.getProperty(legRef.current, "rotation") % 360;
//         const x = 50 + 50 * Math.cos((Math.PI * angle) / 180 - Math.PI / 2);
//         const y = 50 + 50 * Math.sin((Math.PI * angle) / 180 - Math.PI / 2);
//         let clipPathValue;

//         if (angle <= 90) {
//           clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, ${x}% ${y}%, 50% 50%)`;
//         } else if (angle <= 180) {
//           clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${x}% ${y}%, 50% 50%)`;
//         } else if (angle <= 270) {
//           clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, ${x}% ${y}%, 50% 50%)`;
//         } else {
//           clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${x}% ${y}%, 50% 50%)`;
//         }
//         gsap.set(imageRef.current, {
//           clipPath: clipPathValue,
//         });
        
//       },
//     });
//     tl.fromTo(
//       "#location",
//       { opacity: 0, scale: 0, y: 100 },
//       { opacity: 1, scale: 1, y: 0, duration: 1 },
//       0
//     );
//     tl.fromTo(
//       "#count",
//       { opacity: 0, scale: 0, y: 100 },
//       { opacity: 1, scale: 1, y: 0, duration: 1 },
//       0
//     );
//     tl.fromTo(
//       "#blk-btn",
//       { width: "50px" },
//       { width: "150px", duration: 2 },
//       0
//     );
//     tl.fromTo(
//       "#bt-tx",
//       { y: 100, opacity: 0 },
//       { y: 0, delay: 2, opacity: 1 },
//       0
//     );

//     tl.add(tl2, "+=0");
//     return () => {
//       tl.kill();
//     };
//   }, [listingdata.length]);
//   console.log(listingdata, "im img");

//   return (
//     <div className="main-mid ">
//       {listingdata.length > 0 && (
//         <div className="middle">
//           <div className="middle_animations">
//             <div className="counting font_bold" id="count">
//               {listingdata[index]?.id}
//             </div>
//             <div className="clock" ref={imageRef}>
//               <div className="leg" ref={legRef}></div>
//               <div className="circle"></div>
//               {console.log(listingdata[index]?.image)}
//                 <img
//                   src={imge_url + listingdata[index]?.image}
//                   className="image"
//                   alt="clock segment"
//                 />
//             </div>
//             <div className="loc font_bold" id="location">
//               {listingdata[index]?.title}
//               <br />
//               <p className="des font_medium">
//                 {" "}
//                 {listingdata[index]?.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="middle-lower container">
//         <div>
//           <p className="font_medium">Best of Month</p>
//         </div>
//         <div>
//           <p className="cords" id="cords">
//             {index}
//           </p>
//         </div>
//         <div>
//           <button className="black-btn" id="blk-btn">
//             <p className="font_medium" id="bt-tx">
//               Book this Villa
//             </p>
//           </button>
//         </div>
//       </div>
//       {/* <div className="line" id="line"  style={{top:position.top, left: position.left}} ></div> */}
//     </div>
//   );
// };

// export default LineAnimation;
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applicant } from "../Api/api.js";

gsap.registerPlugin(ScrollTrigger);

const LineAnimation = () => {
  const [listingdata, setlistingdata] = useState([]);
  const imge_url = "https://locatestudent.com/magst/upload/";

  const legRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        type: "get_data",
        table_name: "listings",
      };
      const res = await applicant(data);
      setlistingdata(res?.data?.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (listingdata.length === 0) return;

    const arrLength = listingdata.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".clock",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        onLeave: () => {
          tl2.pause();
        },
        onEnterBack: () => {
          tl2.play();
        },
      },
    });

    const tl2 = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: ".clock",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl2.to(legRef.current, {
      rotation: 360,
      transformOrigin: "bottom",
      duration: 3,
      ease: "linear",
      scale: 0,
      opacity: 0,
      onComplete: () => {
        setIndex((prevIndex) => (prevIndex + 1) % arrLength);
      },
      onUpdate: () => {
        let angle = gsap.getProperty(legRef.current, "rotation") % 360;
        const x = 50 + 50 * Math.cos((Math.PI * angle) / 180 - Math.PI / 2);
        const y = 50 + 50 * Math.sin((Math.PI * angle) / 180 - Math.PI / 2);
        let clipPathValue;

        if (angle <= 90) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, ${x}% ${y}%, 50% 50%)`;
        } else if (angle <= 180) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${x}% ${y}%, 50% 50%)`;
        } else if (angle <= 270) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, ${x}% ${y}%, 50% 50%)`;
        } else {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${x}% ${y}%, 50% 50%)`;
        }
        gsap.set(imageRef.current, {
          clipPath: clipPathValue,
        });
      },
    });

    tl.fromTo(
      "#location",
      { opacity: 0, scale: 0, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      0
    );
    tl.fromTo(
      "#count",
      { opacity: 0, scale: 0, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      0
    );
    tl.fromTo(
      "#blk-btn",
      { width: "50px" },
      { width: "150px", duration: 2 },
      0
    );
    tl.fromTo(
      "#bt-tx",
      { y: 100, opacity: 0 },
      { y: 0, delay: 2, opacity: 1 },
      0
    );

    tl.add(tl2, "+=0");

    return () => {
      tl.kill();
    };
  }, [listingdata]);

  console.log(listingdata, "im img");

  return (
    <div className="main-mid ">
      {listingdata.length > 0 && (
        <div className="middle">
          <div className="middle_animations">
            <div className="counting font_bold" id="count">
              {listingdata[index]?.id}
            </div>
            <div className="clock" ref={imageRef}>
              <div className="leg" ref={legRef}></div>
              <div className="circle"></div>
              {console.log(listingdata[index]?.image)}
              <img
                src={imge_url + listingdata[index]?.image}
                className="image"
                alt="clock segment"
              />
            </div>
            <div className="loc font_bold" id="location">
              {listingdata[index]?.title}
              <br />
              <p className="des font_medium">
                {listingdata[index]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="middle-lower container">
        <div>
          <p className="font_medium">Best of Month</p>
        </div>
        <div>
          <p className="cords" id="cords">
            {index}
          </p>
        </div>
        <div>
          <button className="black-btn" id="blk-btn">
            <p className="font_medium" id="bt-tx">
              Book this Villa
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineAnimation;
