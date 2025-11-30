import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./custom components/createBlog";
import GetAllBlogs from "./custom components/getAllBlog";
import UpdateBlog from "./custom components/updateBlog";
import DeleteBlog from "./custom components/deleteBlog";
import Register from "./pages/registerForm";
import Login from "./pages/loginForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/getAll-Blogs" element={<GetAllBlogs />} />
        <Route path="/updateBlog" element={<UpdateBlog />} />
        <Route path="/deleteBlog" element={<DeleteBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
