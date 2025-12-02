import { useState } from "react";
import Navbar from "../custom components/navbar";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.msg);
        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setMessage(data.msg);
      }
    } catch (error) {
      console.log(error);
      setMessage("something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={formSubmit}
        className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg sm:p-10 dark:bg-gray-800"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Login Your Account
        </h2>

        <div className="space-y-5">
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
          You dint't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </form>

      {message && (
        <div
          className={`mt-4 text-center text-sm p-3  w-[300px] bg-blue-400 rounded-md`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
