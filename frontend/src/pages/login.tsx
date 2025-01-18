// // import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../assets/api";
// import { useNavigate } from "react-router-dom";

// function GoogleLogin(){
//     const naviagte = useNavigate();
//     const responseGoogle = async (authResult : any )=>{
//         try{
//             if(authResult['code' ]){
//                 const result = await googleAuth(authResult['code']);
//                 const {email,name,image} = result.data.user;
//                 const token = result.data.token;
//                 const obj = {email,name,image, token};
//                 localStorage.setItem('user-info',JSON.stringify(obj));
//                 console.log('result.data.user---', result.data.user);
//                 naviagte('/dashboard')
//             }
//         }catch (err) {
//             console.error('Error while requesting google code: ', err);
//         }
//     }
//     const googleLogin = useGoogleLogin({
//         onSuccess: responseGoogle,
//         onError: responseGoogle,
//         flow : 'auth-code'
//         })

//     return (
//         <div >
//         <button onClick={googleLogin}> Login</button>
//         </div>
//     )
// }

// export default GoogleLogin;

import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../assets/api";
import { useNavigate } from "react-router-dom";


function GoogleLogin() {
  const navigate = useNavigate();

  const responseGoogle = async (authResult: any) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, image, token };
        localStorage.setItem("user-info", JSON.stringify(obj));
        console.log("result.data.user---", result.data.user);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error while requesting google code: ", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-400">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-700 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-500 mb-6">Please log in to continue</p>
        </div>

        {/* Google Login Button */}
        <button
          onClick={googleLogin}
          className="w-full bg-gray-300 text-black p-3 rounded-lg flex items-center justify-center space-x-4 transition transform hover:scale-105 focus:outline-none"
        >
          <img
            src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/iconfinder-new-google-favicon-682665.png"
            alt="Google"
            className="w-6 h-6"
          />
          <span className="font-semibold">Login with Google</span>
        </button>

      </div>
    </div>
  );
}

export default GoogleLogin;