import React, { useEffect, useState } from "react";
import Imdb from "../api/Imdb";
import MovieList from "./MovieList";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [movies,setMovies]=useState([]);
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const search = async () => {
      const {data} = await Imdb.get("/search/movie",{
        params:{
            query:term,
            api_key:"f043bee2139f9146ffcb2df03e08e19c"
          }
      });
      
      setMovies(data.results); 
     
    }
    
    
      const timeOutId=setTimeout(() => {
        if (term){
          search()
        }
      }, 1000);

      return()=>{

        clearTimeout(timeOutId)

      }
    
   
  },[term]);


  return (
    
     <div className="container">
      <form onSubmit={onFormSubmit} >
          <label className="input-label form-label mt-2" >Search for a movie</label>
          <input
            className="form-control"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
         />
         </form>
         <MovieList movies={movies} />
        </div>
      
   
  );
};

export default SearchBar;
