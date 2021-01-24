
const styles = {
    form: {
       paddingTop: 20,
       width: "200px",
       marginBottom: "15px",
       display: "inline-block",
       position: "relative",

       
      
    }
}

function Search (props){
    console.log(props)
// const context = useContext(DataAreaContext)

return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div style={styles.form}>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="Search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={props.onChange}
                  style={styles.form}
                ></input>
              </form>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </>
  );
}
export default Search;