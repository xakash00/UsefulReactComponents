import React, { useState, useEffect } from "react";
import axios from "axios";

const MapJason = (props) => {
  const [data, setData] = useState([]);

  const GetUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <>
      <div className="container">
        {data.map((item) => (
          <div>
            <div className="card container" style={{backgroun:"none"}}>
              <div className="card-body">
                <h5 className="card-title  placeholder-glow">{item.id}</h5>
                <h6 className={`${item.title==="null"?  <span class="card-text text-muted placeholder-glow"></span>:<span class="card-text text-muted placeholder-glow">{item.title}</span>}`}></h6>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
};

export default MapJason;
