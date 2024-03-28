import React from "react";

function Services() {
  return (
    <div>
      <h1 style={{ color: "orange", textAlign: "center" }}>Services Page</h1>
      <p style={{ textAlign: "center" }}>
        This is the website of Guitar services sdn bhd located in Malaysia, and
        we offer affordable service. we also offer guitar lessons and open
        jamming services{" "}
      </p>
      <img
        src="pict5.jpg"
        style={{
          width: "70%",
          margin: "10px auto",
          height: "700px",
          display: "flex",
        }}
      />
      <p style={{ color: "blue", textAlign: "center" }}>
        Guitar Services - repair and service
      </p>
      <p style={{ color: "blue", textAlign: "center" }}>Class Room - Package</p>
      <p style={{ color: "blue", textAlign: "center" }}>Jamming Session </p>
      <br></br>
      <br></br>
      <h1 style={{ color: "orange", textAlign: "center" }}>
        Music studio Class Room
      </h1>
      <img
        src="pict7.jpeg"
        style={{
          width: "70%",
          margin: "10px auto",
          height: "700px",
          display: "flex",
        }}
      />
    </div>
  );
}

export default Services;
