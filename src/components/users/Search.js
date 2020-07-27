import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, searchUsers, users } = githubContext;
  const { toggleAlert } = alertContext;

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(e);
    if (text === "") {
      toggleAlert("Please input something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
