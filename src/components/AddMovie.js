import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [titleInput, setTitleInput] = useState("");
  const [openingTextInput, setOpeningTextInput] = useState("");
  const [releaseInput, setReleaseInput] = useState("");
  const titleRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    if (
      titleInput.trim().length === 0 ||
      openingTextInput.trim().length === 0 ||
      releaseInput.trim().length === 0
    ) 
    {
      console.log('invalid input!');
      return;
    }
    const movie = {
      title: titleInput,
      openingText: openingTextInput,
      releaseDate: releaseInput,
    };

    props.onAddMovie(movie);
    setTitleInput("");
    setOpeningTextInput("");
    setReleaseInput("");
    titleRef.current.focus();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          value={titleInput}
          type="text"
          id="title"
          ref={titleRef}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          value={openingTextInput}
          rows="5"
          id="opening-text"
          onChange={(e) => setOpeningTextInput(e.target.value)}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          value={releaseInput}
          type="text"
          id="date"
          onChange={(e) => setReleaseInput(e.target.value)}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
