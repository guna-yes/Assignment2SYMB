import React from "react";

export default function Baground(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{}}>
          <h4 style={{ fontSize: "1.5em" }}>
           {props.text}
          </h4>
        </div>
        <div></div>
      </div>
    </div>
  );
}
