import axios from "axios";

const API_URL = "http://localhost:1122/auth/";

class AuthService {
  login(username, password) {
    alert("Hitted Me")
    return axios
      .post(API_URL + "generateToken", {
        username,
        password
      })
      .then(response => {
        alert(response.data);
      
          alert("Token Came");
          localStorage.setItem("user", JSON.stringify(response.data));
    

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password,roles="ROLE_USER") {
    return axios.post(API_URL + "addNewUser", {
      name,
      email,
      password,
      roles
    });
  }

    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();
