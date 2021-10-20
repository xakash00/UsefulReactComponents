import React from "react";

const AlertComp = (props) => {
  return (
    props.alert && (
      <>
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
           {props.alert.type} <strong>{props.alert.message}</strong>
          </div>
        </div>
      </>
    )
  );
};

export default AlertComp;
