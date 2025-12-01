import { useState } from "react";
import Navbar from "../custom components/navbar";
import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
    });




  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={formSubmit}
        className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg sm:p-10 dark:bg-gray-800"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Create Your Account
        </h2>

        <div className="space-y-5">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name || ""}
              onChange={handleData}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email || ""}
              onChange={handleData}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password || ""}
              onChange={handleData}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Submit
        </button>

        <p className="text-center mt-4 text-gray-500 dark:text-gray-400 text-sm">
          Already have an account?{" "}
         <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
