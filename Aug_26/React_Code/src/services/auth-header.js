export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  alert(user);
  if (user) {
    // alert("Entered  " +user);
     return { Authorization: 'Bearer ' + user }; // for Spring Boot back-end
    return { 'x-access-token': user };       // for Node.js Express back-end
  } else {
    return {};
  }
}
