// import { useState } from "react";

// export const SignupView = () => {
//     const [username, setUsername] = useState(""); 
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [birthday, setBirthday] = useState("");
// validation of signup view
//     const handleSubmit = (event) => {
//         event.preventDefault();
//     const data = {
//         username: username,
//         secret: password,
//         email: email,
//         birthday: birthday
//         };

//     fetch("Signup_URL/signup", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)        
//         }).then((response) => {
//          if (response.ok) {
//             alert("Signup successful");
//              window.location.reload();
//              } else {
//                  alert("Signup failed")
//                 } 
//             });
//          };
// signup form with submit button
//         return (
    // handleSubmit is the callback of onSubmit, tells the login API to validate user & password
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input type= "text" 
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 minLength="5"/>
//             </label>
//             <label> 
//                 Password:
//                 <input type="password"
//                  value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                  required />
//             </label>
//             <label>
//                 Email:
//                 <input type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required />
//             </label>
//             <label>
//                 Birthday:
//                 <input type="date"
//                 value={birthday}
//                 onChange={(e) => setBirthday(e.target.value)}
//                 required />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };