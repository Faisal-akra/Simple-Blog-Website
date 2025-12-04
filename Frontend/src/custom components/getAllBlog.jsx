import { useEffect } from "react";
import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import {fetchBlogs} from "../slices/blogs.js";

function GetAllBlogs() {
  const { blogs, isLoading, message } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (message) {
    return <p>Error: {message}</p>;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1>All-Blogs</h1>

      {blogs.map((blog) => {
        return(
        <div key={blog._id}>
          <h1>{blog.content}</h1>
          <h1>{blog.title}</h1>
          <img src={`http://localhost:9000/uploads/${blog.image}`} alt="" />
        </div>
        )
      })}
    </div>
  );
}

export default GetAllBlogs;
