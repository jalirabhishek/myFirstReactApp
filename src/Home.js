import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  const{data, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return ( 
       <div className="home">
         {error && <div>{error} </div>}
         {isLoading && <div>LOADING.....PLEASE WAIT </div> }
         {data && <Bloglist data={data}/> }  
       </div>
    )
}
 
export default Home;