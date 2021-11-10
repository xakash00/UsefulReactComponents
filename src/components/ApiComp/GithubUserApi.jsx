import React, { useState, useEffect } from "react";
import axios from "axios";

const GithubUserApi = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://api.github.com/users");
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {user.map((item) => (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 order-last mx-auto">
                <div className="card p-2 align-items-md-center">
                  <img
                    src={item.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.login}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div><br/>
        </div>
      ))}
    </>
  );
};

export default GithubUserApi;
