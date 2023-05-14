import axios from 'axios';
const OMDB = 'http://www.omdbapi.com/';
const APIKEY = '9e289127';

const self = this;
    axios.get(OMDB, {
        params: {
            apikey: APIKEY,
            s: 'matrix',
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
// export default req