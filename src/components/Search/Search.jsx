
const styles = {
    form: {
        paddingTop: 20,
        margin: 30,
        float: "right",
        marginTop: 10,
        position: "relative",
      
    }
}

function Search ({handleInputChange}){
    console.log(handleInputChange)
// const context = useContext(DataAreaContext)


    return(
        <>
        <div style={styles.form}>
            <form className="form-inline"> 
                
                <input  
                className="form-control mr-sm-2"
                type="Search"
                placeholder="Search"
                aria-label="Search"
                // onChange={this.handleInputChange} 
                style={styles.form}
                >

                </input>
            </form>
        </div>
        </>
    )
}

export default Search;