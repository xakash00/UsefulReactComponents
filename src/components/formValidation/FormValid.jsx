import React, { useState } from "react";
import { validEmail, validPassword } from "./Regex";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    if (!validEmail.test(data.email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(data.password)) {
      setPwdError(true);
    } else {
      window.alert("fill");
    }
  };

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({...data,[name]:value});
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            {emailErr && <p style={{ color: "red" }}>Your email is invalid</p>}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            {pwdError && (
              <p style={{ color: "red" }}>Your password is invalid</p>
            )}
          </div>

          <div>
            <button onClick={validate}>Validate</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
