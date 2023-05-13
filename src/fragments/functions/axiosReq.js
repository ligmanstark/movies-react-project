import axios, {isCancel, AxiosError} from 'axios';

const OMDB = 'http://www.omdbapi.com/';
const APIKEY = '9e289127';
let data=[];
let film;
function req() {
    axios.get(OMDB, {
        params: {
            apikey: APIKEY,
            s: 'batman',
        }
    })
        .then(function (response) {
            console.log(response);
            data = response.data.Search;
            for (let i = 0; i < data.length; i++) {
                 film = data[i];
                console.log(film);
            }
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
        });
}

export default req