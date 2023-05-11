import React from "react";

function Alert(props) {
  setTimeout(() => {}, 2000);
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>
          {props.alert.type.slice(0, 1).toUpperCase() +
            props.alert.type.slice(1, props.alert.type.length).toLowerCase()}
        </strong>{" "}
        :{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
