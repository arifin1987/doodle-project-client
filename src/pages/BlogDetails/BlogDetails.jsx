import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl">Name: {details.title}</h1>
      <p>Ingredients:{details.body}</p>
    </div>
  );
};

export default BlogDetails;
