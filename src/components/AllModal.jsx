import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import upload from "../assets/cloud-computing.png";
import { ArrowLeft, XCircle } from "react-feather";
// import { applicant, uploadfile } from "../../services/api";
import { applicant,uploadfile } from "../Api/api";
export default function AllModal({isOpen, click}) {
  const navigation = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [companymodal, setCompanymodal] = useState(false);
  const [questionmodal, setQuestionmodal] = useState(false);
  const [passport, setPssport] = useState("");
  const [userdata, setUserData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [viderChcek, SetendViderFalse] = useState(false); 
  const fileInputRef = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    setShowModal(isOpen);
    if(click){
      SetendViderFalse(true);
      setShowModal(false);
      setShowModal2(true);
    } 
  }, [isOpen,click]);
 
  

  const fomrm_1 = {
    name: "",
    middlename: "",
    nationality: "",
    company: "",
  };

  const fomrm_2 = {
    email: "",
    phone: "",
    linkdin: "",
    twitter: "",
    facebook: "",
    located: "",
  };

  const fomrm_3 = {
    why: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    middlename: Yup.string().trim().required("Middle Name is required"),
    nationality: Yup.string().trim().required("Nationality is required"),
    company: Yup.string().trim().required("Company is required"),
  });

  const validationSchema2 = Yup.object().shape({
    email: Yup.string().trim().required("Email is required"),
    phone: Yup.string().trim().required("Phone Name is required"),
    linkdin: Yup.string().trim().required("Linkdin url is required"),
    twitter: Yup.string().trim().required("Twitter url is required"),
    facebook: Yup.string().trim().required("Facebook url is required"),
    located: Yup.string().trim().required("Location is required"),
  });

  const validationSchema3 = Yup.object().shape({
    why: Yup.string().trim().required("Question is required"),
  });

 
  const Sginupmodal = () => {
    SetendViderFalse(true);
    setShowModal(false);
    setShowModal2(true);
  };

  const handleImageChange = (event) => {
    console.log(event.target.file);
    const file = event.target.files[0];
    console.log(file);
    uploadFile(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("type", "upload_data");
    formData.append("file", file);
    uploadfile(formData).then((res) => {
      setPssport(res.data?.file_name);
    });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (values) => {
    const data = {
      type: "add_data",
      table_name: "users",
      name: values?.name,
      middle_name: values?.middlename,
      nationality: values?.nationality,
      company: values?.company,
      passport: passport,
    };
    setUserData(data);
    setCompanymodal(true);
    setShowModal2(false);
  };

  const handleSubmit2 = (values) => {
    const datacomp = {
      email: values?.email,
      phone: values?.phone,
      linkedin_url: values?.linkdin,
      twitter_url: values?.twitter,
      fb_url: values?.facebook,
      location: values?.located,
    };
    const updatedUserData = { ...userdata, ...datacomp };
    setUserData(updatedUserData);
    setQuestionmodal(true);
    setCompanymodal(false);
  };

  const handleSubmit3 = (values) => {
    setLoading(true);

    const datacomp = {
      description: values?.why,
    };
    const newdata = { ...userdata, ...datacomp };
    setUserData(newdata);

    applicant(newdata).then((res) => {
      if (res["data"]?.result === true) {
        setQuestionmodal(false);
        setShowModal3(true);
        setLoading(false);
        window.localStorage.setItem("checked", "loged");
      }
    });
  };

  const EmptyImg = () => {
    setImageUrl("");
  };

  return (
    <>
    <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
        
      >
        <Modal.Body className="onboard_modal">
          <p className="font_semibold text_white fs_20 text-center">
            To continue exploring, we invite you to apply for our access list.
          </p>
          <Button
            className="modal_btn font_semibold "
            onClick={() => Sginupmodal()}
          >
            Click here
          </Button>
        </Modal.Body>
      </Modal>
   
     

      <Modal
        className="abc"
        show={showModal2}
        onHide={() => setShowModal2(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="radius_10 ">
          <div className="onboard_modal_sginup ">
            <h1 className="text-center font_semibold fs_30">
              Personal Details
            </h1>
            <p className="text-center text_white font_regular">
              Fill up the below details
            </p>

            <Formik
              initialValues={fomrm_1}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* <p className="font_semibold text_white mb-2">Name</p> */}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                    className="input_felid "
                  />
                  {touched.name && errors.name && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.name}
                    </div>
                  )}
                  {/* <p className="font_semibold text_white mb-2 mt-2">Middle Name</p> */}
                  <input
                    className="input_felid "
                    id="middlename"
                    name="middlename"
                    placeholder="Middle Name"
                    type="text"
                    onChange={handleChange}
                    value={values.middlename}
                  />
                  {touched.middlename && errors.middlename && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.middlename}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Nationality </p> */}
                  <input
                    id="nationality"
                    name="nationality"
                    placeholder="Nationality"
                    type="text"
                    onChange={handleChange}
                    value={values.nationality}
                    className="input_felid "
                  />

                  {touched.nationality && errors.nationality && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.nationality}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Company</p> */}
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    onChange={handleChange}
                    value={values.company}
                    className="input_felid "
                  />
                  {touched.company && errors.company && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.company}
                    </div>
                  )}

                  <p className="font_semibold text_white mb-2 mt-2">Passport</p>

                  <div className="upload">
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      className="upload_feild"
                      accept="image/*"
                    />
                    <img
                      onClick={handleImageClick}
                      src={upload}
                      width={30}
                      height={30}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                  {imageUrl ? (
                    <div
                      style={{ position: "relative", width: 100, height: 100 }}
                    >
                      <>
                        <img
                          src={imageUrl}
                          width={100}
                          height={100}
                          style={{
                            borderRadius: 10,
                            marginTop: 20,
                            marginBottom: 20,
                          }}
                          alt=""
                        />
                        <div
                          style={{
                            background: "#fff",
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: 10,
                            right: -10,
                          }}
                        >
                          <XCircle
                            onClick={EmptyImg}
                            className="mt-2 mb-2 "
                            style={{
                              cursor: "pointer",
                              color: "red",
                              position: "absolute",
                            }}
                          />
                        </div>
                      </>
                    </div>
                  ) : (
                    ""
                  )}

                  <Button
                    className="  font_semibold modal_dark w-100  mt-5"
                    type="submit"
                  >
                    Next
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="abc"
        show={companymodal}
        onHide={() => setCompanymodal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="bg_secondary radius_10">
          <div className="onboard_modal_sginup ">
            <ArrowLeft
              onClick={() => setCompanymodal(false)}
              className="text_white  mt-2 mb-2 "
              style={{ cursor: "pointer" }}
            />
            <Formik
              initialValues={fomrm_2}
              validationSchema={validationSchema2}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit2(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* <p className="font_semibold text_white mb-2">Email</p> */}
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                    className="input_felid "
                  />

                  {touched.email && errors.email && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.email}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Phone number</p> */}
                  <input
                    className="input_felid "
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+92-1234567"
                    onChange={handleChange}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.phone}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Linkdin url </p> */}
                  <input
                    id="linkdin"
                    name="linkdin"
                    type="text"
                    placeholder="LinkedIn Url"
                    onChange={handleChange}
                    value={values.linkdin}
                    className="input_felid "
                  />
                  {touched.linkdin && errors.linkdin && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.linkdin}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Twitter url </p> */}
                  <input
                    id="twitter"
                    name="twitter"
                    type="text"
                    placeholder="Twitter Url"
                    onChange={handleChange}
                    value={values.twitter}
                    className="input_felid "
                  />
                  {touched.twitter && errors.twitter && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.twitter}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">Facebook url</p> */}
                  <input
                    id="facebook"
                    name="facebook"
                    type="text"
                    placeholder="FaceBook Url"
                    onChange={handleChange}
                    value={values.facebook}
                    className="input_felid "
                  />
                  {touched.facebook && errors.facebook && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.facebook}
                    </div>
                  )}

                  {/* <p className="font_semibold text_white mb-2 mt-2">
                    Where is the company located
                  </p> */}
                  <input
                    id="located"
                    name="located"
                    type="text"
                    placeholder="Location"
                    onChange={handleChange}
                    value={values.located}
                    className="input_felid "
                  />

                  {touched.located && errors.located && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.located}
                    </div>
                  )}

                  <Button
                    className="m_0 text_white font_semibold modal_dark w-100  mt-4 "
                    type="submit"
                  >
                    Next
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={questionmodal}
        onHide={() => setQuestionmodal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="abc"
      >
        <Modal.Body>
          <div className="onboard_modal_sginup ">
            <Formik
              initialValues={fomrm_3}
              validationSchema={validationSchema3}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit3(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <p className="font_semibold text_white mb-2 mt-2">
                    Why do you want to start a project in Switzerland?
                  </p>
                  <textarea
                    id="why"
                    name="why"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={values.why}
                    className="input_felid "
                    style={{ height: 97 }}
                  />

                  {touched.why && errors.why && (
                    <div className="text_red fs_12 font_regular mt-2 mb-2">
                      {errors.why}
                    </div>
                  )}

                  <Button
                    className="m_0 text_white font_semibold modal_dark w-100 mt-4"
                    type="submit"
                    onClick={handleSubmit3} // Assuming this is the function to handle the submit
                  >
                    {loading ? (
                      <Spinner animation="border" role="status"></Spinner>
                    ) : (
                      "Next"
                    )}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal3}
        onHide={() => setShowModal3(false)}
      >
        <Modal.Body className="onboard_modal" style={{ padding: 40 }}>
          <p className="font_regular text_white fs_20 text-center">
            Thanks for applying, we will be in touch!
          </p>
          <Button
            className="m_0 text_white font_regular modal_btn "
            onClick={() => {
              navigation("/")
              setShowModal3(false)
            }}
          >
            Click here!
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
