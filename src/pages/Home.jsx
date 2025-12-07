import MovieCard from '../components/movieCard.jsx';
import "../css/Home.css";
import {getPopularMovies, searchMovies} from '../services/api.js';
import { useState ,useEffect} from 'react';
function Home(){
    const[searchQuerry,setSearchQuerry]=useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError('Failed to fetch popular movies.');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

    const handlleSearch = async(e)=>{
        e.preventDefault();
        if(!searchQuerry.trim()) return
        if(loading) return 
        setLoading(true)
        try {
          const searchResults = await searchMovies(searchQuerry)
          setMovies(searchResults);
          setError(null)
        }catch(err){
          console.log(err)
          setError("Failed to search movies...")
        }finally{
          setLoading(false)
        }
    };
    return(
        
        <div className="home">
            <form onSubmit={handlleSearch} className='search-form'>
                <input type="text" placeholder='Search for movies... '
                    className='search-input'
                    value={searchQuerry}
                    onChange={(e)=>setSearchQuerry(e.target.value)}
                />
                <button type='submit' className='search-button'>Search</button>
            </form> 

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>):
                      
                (<div className="movies-grid">
                    {movies.map((movie) => (
                     <MovieCard movie={movie} key={movie.id} />
                ))}
        </div>
      )}
        </div>
    )
}
export default Home