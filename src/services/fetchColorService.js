import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      console.log("response", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("axios fetch color catch", err);
      return err;
    });
};

export default fetchColorService;
