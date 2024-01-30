import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleBlog = ({ blog, handleDelete, handleConfirm }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, body } = blog;

  return (
    <tr>
      <th></th>

      <td>{title}</td>

      <td>{body}</td>

      <th>
        <Link to={`/blogs/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
      </th>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-primary"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default SingleBlog;
