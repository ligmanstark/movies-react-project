import React from "react"
import axios from 'axios';
import Movies from "../../fragments/Movies";


class MainContent extends React.Component {
    
        state = {
            movies:[],
        }


    componentDidMount() {
        const OMDB = 'http://www.omdbapi.com/';
        const APIKEY = '9e289127';

        const self = this;
            axios.get(OMDB, {
                params: {
                    apikey: APIKEY,
                    s: 'Marvel',
                }
            })
                .then( (response)=> {
                    console.log(response.data)
                    self.setState({movies:response.data.Search})
                })
                .catch(function (error) {
                    console.log(error)
                })
                .finally(function () {
                });
        
}
    
    render() {
        const { movies } = this.state;

        return (<main className="content container">
            {
                movies.length ? (<Movies movies={movies} />) : <h3> Loading...</h3>

            }
    </main >)
    }

}


export default MainContent


// axios.get("/yourURL").then(function(response) {
//     this.setState({ events: response.data });
//   }.bind(this));