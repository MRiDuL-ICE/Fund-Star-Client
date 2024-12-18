import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("name");
    const email = formData.get("email");
    const photoURL = formData.get('photoURL')
    const password = formData.get("password");
    const data = Object.fromEntries(formData.entries());

   userLogin(email,password)
   .then(res => {
        setUser(res.user)
        navigate(from, { replace: true });
        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have successfully logged in.",
            confirmButtonColor: "#6330F6",
          })
          .then(() => {
            console.log("Form Data:", res); 
          });
   })
   .catch(err => {
    console.log(err)
    Swal.fire({
        icon: "error",
        title: "Invalid Credential",
        text: err,
        confirmButtonColor: "#6330F6",
      });
   })
  };

  const googleSignIn = () => {
    googleLogin()
   .then(res => {
        setUser(res.user)
        console.log(res.user?.photoURL)
        navigate(from, { replace: true });
        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have successfully logged in.",
            confirmButtonColor: "#6330F6",
          })
          .then(() => {
            console.log("Form Data:", res); 
          });
   })
   .catch(err => {
    console.log(err)
    Swal.fire({
        icon: "error",
        title: "Invalid Credential",
        text: err,
        confirmButtonColor: "#6330F6",
      });
   })
  }

  return (
    <div className="h-full  flex justify-center py-14 px-2">
      <div className="w-full max-w-md bg-base-100 border  border-base-300 shadow-xl rounded-lg p-10 h-[38rem]">
        <h2 className="text-3xl font-extrabold text-[#6330F6] text-center mb-6">
          Login
        </h2>
        <div className="flex gap-4 items-center justify-center">
                <button onClick={googleSignIn} className='btn bg-white rounded-md border-blue-400 w-1/2 flex gap-2'><FcGoogle className='text-xl' />Login with Google</button>
                <button className='btn bg-white rounded-md border-black w-1/2 flex gap-2'><FaGithub className='text-xl' />Login with Github</button>
            </div>
            <p className="font-bold my-4 text-center justify-center items-center">Or</p>
        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter your email"
              required
            />
          </div>


          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#6330F6] text-white px-8 py-3 rounded-md shadow-lg hover:bg-[#FFDE59] hover:text-black transition-all text-lg font-semibold"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have any account?{" "}
            <Link to={'/register'}
              className="text-[#6330F6] font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
