import React from "react"
import axios from 'axios';
import Movies from "../../fragments/Movies";
import Search from "../../fragments/Search";
import Preloader from "../../fragments/Preloader";


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

    searchMovies= (str) =>{
        const OMDB = 'http://www.omdbapi.com/';
        const APIKEY = '9e289127';
        const self = this;
            axios.get(OMDB, {
                params: {
                    apikey: APIKEY,
                    s:`${str}`,
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
            <Search searchMovies={this.searchMovies} />
            {
                movies.length ? (<Movies movies={movies} />) : <Preloader />

            }
    </main >)
    }

}


export default MainContent

