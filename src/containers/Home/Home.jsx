import React, { useEffect, useState } from "react";
import API from "../../utils/API"


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
  
};



const Home = () => {

    const [employee, setEmployee] = useState([{
        // image: "",
        // name: "Stef Lupo",
        // dob: "June 14, 1987",
        // email: "nialupo87@gmail.com",
        // phone: "678-793-3025"

    }]);

    useEffect(() =>{
        API.getRandomEmployee().then((results) => {
            console.log(results.data);
            setEmployee(results.data);
                   });
    }, [])

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
            {employee.map((employee)=> 
             <table class="table">
             <thead>
               <tr>
                 <th scope="col">Image</th>
                 <th scope="col">First Name</th>
                 <th scope="col">Last Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Phone</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>{employee.image}</td>
                 <td>{employee.firstName}</td>
                 <td>{employee.lastName}</td>
                 <td>{employee.email}</td>
                 <td>{employee.cell}</td>
               </tr>
              
             </tbody>
           </table>
            )}
       
        </div>

    </div>
    </>
  );
};

export default Home;
