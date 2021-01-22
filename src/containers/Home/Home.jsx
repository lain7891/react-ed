import React from "react";

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
  return (
    <nav className="navbar" style={styles.navbar}>
      <div className="container">
        <span className="h1" style={styles.h1}>
          Employee Directory
        </span>
      </div>
    </nav>
  );
};

export default Home;
