
import './App.css';
import Header from './Header';
import Movie from './Movie';
import movies from './movie.json'

function App() {
  let login=true;
 //you can use if else here also

  return (
    <div className="App">
      { //if you want to use if else under return() use like this
        (()=>{
          if(login){
            return <h1 style={{color:"black"}}>Dekh le</h1>
          }
          else{
            return <h1 style={{color:"black"}}>dekh mat liyo</h1>
          }
          
        })()
        //you can also use terniary operator
      }
     
     <Header/>
     <div className='main'>
      {movies.map((element,index)=>{
        return(
        <Movie 
        key={index}
        title={element.Title}
        year={element.Year}
        img={element.Poster}
        imdb={element.imdbID}/>)
      })
      

      }
      
       </div>
    </div>
  );
}

export default App;
