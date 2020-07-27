import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const userStyles = {
  display: "flex",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

export default Users;
