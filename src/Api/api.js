import axios from 'axios';


export const applicant = async (data) => {
  try {
    const res = await axios.post(
      "https://locatestudent.com/magst/api.php",
        data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};
export const uploadfile = async (data) => {
  try {
    const res = await axios.post(
      "https://locatestudent.com/magst/api.php",
        data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};