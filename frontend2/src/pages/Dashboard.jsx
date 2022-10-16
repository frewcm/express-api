import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getGoals, postGoal, deleteGoal } from "../api/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Dashboard() {
  //set goal
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    mutate({ text });
  };

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["goal"],
    getGoals
  );

  const { mutate } = useMutation(postGoal, {
    onSuccess: (data) => {
      refetch();
    },
  });

  const { mutate: toMutate } = useMutation(deleteGoal, {
    onSuccess: (data) => {
      refetch();
    },
  });

  if (isLoading) {
    return (
      <div className="cliploader">
        <ClipLoader size={100} />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleDelete = () => {
    toMutate(data._id);
  };

  return (
    <div className="dashboard">
      <form className="form" onSubmit={handleClick}>
        <input type="text" placeholder="set goal" onChange={handleChange} />
        <button type="submit">Set</button>
      </form>
      {data.map((goal) => {
        return (
          <div className="goal-list" key={goal._id}>
            <Link className="goal-link" to={`/${goal._id}`}>{goal.text} </Link>
            <button
              className="delete-button"
              type="submit"
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
