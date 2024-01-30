import Swal from "sweetalert2";

const CreateBlogs = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const body = form.body.value;

    console.log(title, body);

    const blogsData = { title, body };
    fetch("http://localhost:5000/api/blogs/create-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Recipe Created",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    form.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Create A Blog!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blogs</span>
              </label>
              <input
                type="text"
                name="body"
                placeholder="Blogs"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
