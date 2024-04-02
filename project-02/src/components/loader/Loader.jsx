import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-main">
      <h1 className="text-center">loading</h1>
      <img
        height={"100px"}
        width={"100px"}
        src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif"
        alt="loading"
      />
      {/* <img width={"300px"} src="https://cdn.dribbble.com/users/1948198/screenshots/4377223/dribble.gif" alt="" /> */}
    </div>
  );
}
