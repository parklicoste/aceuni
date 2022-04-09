import axios from "axios";

// axios.get('http://localhost:3000/api/accounts').then(response => {
//   console.log(response);
// });

export default function accounts_handler(req, res) {
    if (req.method === 'POST') {
        console.log("Inside the POST account")
      // Process a POST request
      axios.get('http://localhost:3000/api/accounts').then(response => {
  console.log(response.data.username);
  alert('Successfully made the account with username', this.state.username)
});
return "Successfully made the account"
    } else {
      // Handle any other HTTP metho
  }
}