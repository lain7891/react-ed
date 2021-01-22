import React, { useState } from "react";

const styles = {
    navbar: {
        background: "lightBlue",
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
        fontSize: "10%",
        color: "blue",
        position: "static"

    },
    h1:{
        textAlign: "center"
    }
  
}

const Home = () => {

    const [employee, setEmployee] = useState([]);

  return (
      <>
    <nav className="navbar" style={styles.navbar}>
      <div className="container">
        <span className="h1" style={styles.h1}>
          Employee Directory
        </span>
      </div>
    </nav>
    <div className="container">
        <div className="row">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Picture</td>
      <td>Mark Twain</td>
      <td>6/14/1987</td>
      <td>@gmail.com</td>
      <td>6787933025</td>
    </tr>
   
  </tbody>
</table>
        </div>

    </div>
    </>
  );
};

export default Home;
