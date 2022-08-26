import React from "react";

import "./style.css";

function Avatar({ fecture }) {
  return (
    <>
        <img src={fecture.image_url} alt="image" />
        <div style={{marginBottom:"20px" , fontSize:"13px" , color:"gray.500"}} >{fecture.name}</div>
    </>
  );
}

export default Avatar;
