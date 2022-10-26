import API_URL from "./url";
import axios from "axios";

const login = (data) => {
  // console.log(data);
  console.log(API_URL+`/login`);
    return axios({
        method: "POST",
        url: API_URL + `/login`,
        data: {
          username: data.username,
          password: data.password,
        },
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw err;
        });
}

export default  login ;