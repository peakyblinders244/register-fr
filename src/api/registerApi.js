import API_URL from "./url";
import axios from "axios";

const register = (data) => {
    console.log("data:", data);
    return axios({
      method: "POST",
      url: API_URL + `/register`,
      data: {
        username: data.username,
        password: data.password,
        fullName: data.fullName,
        address: data.address,
        phone: data.phone,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };

  export default register ;