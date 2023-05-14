import React from "react";



class Search extends React.Component{
    
    state = {
        search:''
    }

    
    
    handleKey=(event)=> {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }
    
    render() {
       return <div className="row">
       <div className="col s12">
         <div className="input-field col s12">
                   <input
                       placeholder="Search movies"
                       type="search"
                       className="validate"
                       value={this.state.search}
                       onChange={(event) => this.setState({ search: event.target.value })}
                       onKeyDown={this.handleKey}
                   />
         </div>
       </div>
     </div>
    }
}

export default Search