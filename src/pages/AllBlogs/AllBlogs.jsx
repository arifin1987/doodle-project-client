import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./SingleBlog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfuly");
            const remaining = blogs.filter((blog) => blog._id !== id);
            setBlogs(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    const proceed = confirm("Are you sure you want to confirm?");
    if (proceed) {
      fetch(`http://localhost:5000/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("updated successfuly");
            const remaining = blogs.filter((blog) => blog._id !== id);
            const updated = blogs.find((blog) => blog._id === id);
            updated.status = "confirm";
            const newBlogs = [updated, ...remaining];
            setBlogs(newBlogs);
          }
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>

              <th>Title</th>
              <th>Blogs</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <SingleBlog
                key={blog.id}
                blog={blog}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></SingleBlog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlogs;
