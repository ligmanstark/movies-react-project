
function Movie(props) {
  const {Title, Year,imdbID,Type, Poster} = props;
    return  <div id={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          Poster ==='N/A' ? <img src={`https://placehold.co/300x150?text=${Title}`} alt="" /> :<img className="activator" src={Poster} alt=""/>
        }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
        <p>{Year}<span className="right">{Type}</span></p>
    </div>
  </div>
            
}

export default Movie