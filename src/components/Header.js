import React from "react";

const Header = (props) => {
  return (
    <>
      <div>
        <div
          className="container my-5"
          style={{ color: props.mode === "light" ? "#000" : "#fff" }}
        >
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{height: "200"}}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
