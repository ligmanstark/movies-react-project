import req from "../../fragments/functions/axiosReq"
import React from "react"



class MainContent extends React.Component {
    state = {
        cards: [
            {Poster: req}
        ]
    }


        


    render(){
        return <main className="content container">
        <button onClick={req}>Click me</button>
    </main >
        }
}

export default MainContent