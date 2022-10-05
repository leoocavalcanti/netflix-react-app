import React from 'react'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import "./App.css";
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import netflixgif from "./assets/netflix-gif.gif"


const App = () => {

  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);


  React.useEffect(() =>{

    const loadAll = async () => {

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);

    }

    loadAll();

  }, []);

  React.useEffect(() =>{

    const scrollListener = () =>{

      if(window.scrollY > 10){

        setBlackHeader(true);
      }

      else{

        setBlackHeader(false);
      }

    }

    window.addEventListener("scroll", scrollListener);

    return () => {

      window.removeEventListener("scroll", scrollListener);
    }

  }, []);

  return (

    <div className="page">

      <Header black={blackHeader}/>

    {featuredData && <FeaturedMovie item={featuredData}/>}
    
    <section className="lists">

      {movieList.map((item, key) =>(

        <MovieRow key={key} title={item.title} items={item.items} />

      ))}

    </section>

    <Footer/>

    {movieList.length <= 0 && 
          <div className="loading">
          <img src={netflixgif} alt="Carregando"/>
          </div>
    }

    </div>
  )
}

export default App;