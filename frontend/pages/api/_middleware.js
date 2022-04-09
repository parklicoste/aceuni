
import { NextResponse } from "next/server";

export function middleware(req){
    // const basicAuth = req.headers.get('authorization')

    // if(basicAuth) {
    //     const auth = basicAuth.split(' ')[1]
    //     const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    //     if(user === 'admin' && pwd === 'password'){
    //         return NextResponse.next()
    //     }
    // }
    if (req.method === 'POST') {
        console.log("Inside the POST account")
      // Process a POST request
        axios.get('http://localhost:3000/api/accounts').then(response => {
    console.log(response.data.username);
    alert('Successfully made the account with username', this.state.username)
    });
    return "Successfully made the account"
        }

    return new Response('Auth required', {
        status: 401,
        headers:{
            'WWW-Authenticate': 'Basic realm="Secure Area"'
        }
    })
}

// export default function accounts_handler(req, res) {
//     if (req.method === 'POST') {
//         console.log("Inside the POST account")
//       // Process a POST request
//       axios.get('http://localhost:3000/api/accounts').then(response => {
//   console.log(response.data.username);
//   alert('Successfully made the account with username', this.state.username)
// });
// return "Successfully made the account"
//     } else {
//       // Handle any other HTTP metho
//   }
// }

