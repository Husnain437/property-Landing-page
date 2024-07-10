import founder from "../assets/Founder1.jpg";

const Founder = () => {
  return (
    <div className="grad">
      <div className="container">
        {/* <hr className="mt-8" /> */}
        <h1 className="head font_bold ">Meet The Founder</h1>
        <h1 className="found-name font_semibold">Antonio Matera</h1>
        <div className="found-main">
          <div className="found-img">
            <img src={founder} alt="founder" />
          </div>
          <div className="found-details">
            <p>
              Antonio Matera is the Principal Agency Manager at SVAG and the
              Founder & CEO of MAGST Real Estate. With a solid foundation in
              engineering from Politecnico di Bari, Antonio seamlessly blends
              technical insight with financial expertise, having further
              specialized in Finance and Financial Management Services at the
              esteemed Centro Studi Villa Negroni. His comprehensive knowledge
              encompasses the Swiss system, prevoyance, deal closing, and
              investment law in Switzerland. Antonio is skilled in Real Estate
              Valuations, Financial Planning, Real Estate Investments, Income
              Properties, and Property Management. Passionate about real estate
              and finance, Antonio is committed to empowering individuals and
              businesses to achieve their property and financial aspirations.
              His approach is characterized by strategic insight, innovation,
              and a genuine dedication to client success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
