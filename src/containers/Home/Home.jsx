import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Search from "../../components/Search/Search";
import Navbar from "../../components/Navbar/Navbar"


const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  useEffect(() => {
    API.getRandomEmployee().then((results) => {
      console.log("results.data:", results.data);
      setEmployee(results.data.results);
      setFilteredEmployee(results.data.results)
    });
  }, []);

  const handleSortName = (event) => {
    const sortEmployee = [...employee];
    const sortedEmployees = sortEmployee.sort((a,b) => (a.name.first > b.name.first ? 1 : -1))
    setEmployee(sortedEmployees);
  };

  const handleFilterName = (event) => {
      const value = event.target.value;
      console.log(event.target.value);
      
      if(value === "") {
    setFilteredEmployee(employee);
          return;
      };
      const filterName = [...filteredEmployee].filter((employee)=> {
        return(
            employee.name.first.toLowerCase().includes(value.toLowerCase())
        );
      });

      setEmployee(filterName)
    //   const filterName = event.target.value;
    //   const listOfItems = this.state.employees.filter((response) => {
    // let values = Object.values(response)
    // .join("")
    // .toLowerCase();
    // return values.indexOf(
    //    filterName.toLowerCase()
    // )!== -1;
    //   });
    //   setFilteredEmployee(filteredEmployee)
      //changes begin to be changed

  }
 

  return (
    <>
      {/* <nav className="navbar"> */}
        {/* <div className="container">
          <span className="h1">Employee Directory</span>
        </div>
      </nav> */}
      <Navbar/>
      <div className="container">
          <div className="row">
          <Search onChange={handleFilterName}/> 
          </div>
     
        {/* <div className="row"> */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col"><button onClick={handleSortName}>First Name</button></th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Cell</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.cell}>
                <td>
                  <img src={employee.picture.thumbnail} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </>
  );
};
export default Home;
