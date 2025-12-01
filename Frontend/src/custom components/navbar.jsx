import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Dashboard
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <Link to="/createBlog" className="hover:text-blue-600 transition">
            Create-Blog
          </Link>
          <Link to="/updateBlog" className="hover:text-blue-600 transition">
            Update-Blog
          </Link>

          <Link to="getAll-Blogs">All-Blogs</Link>
          <Link to="/deleteBlog" className="hover:text-blue-600 transition">
            Delete-Blog
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-800 font-medium">
          {/* Left-side Dashboard */}
          <a
            href="/"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Dashboard
          </a>

          {/* Other links */}
          <a href="/createBlog" className="hover:text-blue-600 transition">
            Create Blog
          </a>
          <a href="/getAll-Blogs" className="hover:text-blue-600 transition">
            All Blogs
          </a>
          <a href="/updateBlog" className="hover:text-blue-600 transition">
            Update Blog
          </a>
          <a href="/deleteBlog" className="hover:text-blue-600 transition">
            Delete Blog
          </a>

          {/* Auth buttons */}
          <div className="pt-2 flex gap-3">
            <a
              href="/register"
              className="px-4 py-2 rounded-xl border w-fit border-blue-500 text-blue-600 hover:bg-blue-50 transition"
            >
              Register
            </a>
            <a
              href="/login"
              className="px-4 py-2 rounded-xl bg-blue-600 w-fit text-white hover:bg-blue-700 transition"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
