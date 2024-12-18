import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(AuthContext);

  // Password Validation Function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("name");
    const email = formData.get("email");
    const photoURL = formData.get('photoURL')
    const password = formData.get("password");
    const data = Object.fromEntries(formData.entries());

    if (!validatePassword(data.password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must have at least 6 characters, including one uppercase and one lowercase letter.",
        confirmButtonColor: "#6330F6",
      });
      return;
    }

    addUser(displayName, email, photoURL, password)
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered.",
          confirmButtonColor: "#6330F6",
        }).then(() => {
          console.log("Form Data:", res); // Send this data to the server
          navigate("/login");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Invalid Credential",
          text: err,
          confirmButtonColor: "#6330F6",
        });
      });
  };

  return (
    <div className="h-[48rem]  flex justify-center py-14 px-2">
      <div className="md:w-4/12 w-full bg-base-100 border border-base-300 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-[#6330F6] text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold  mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold  mb-2"
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
              htmlFor="photoURL"
              className="block text-sm font-bold  mb-2"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6330F6]"
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold  mb-2"
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
              Register
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={'/login'}
              className="text-[#6330F6] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
