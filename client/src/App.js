import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import { Route} from "react-router-dom";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
      {/* <Route exact path ="/">
        <MovieList />
      </Route>
      
      <Route path ="/movie/:id">
        <Movies />
      </Route> */}

        <Route path ="/" exact component={MovieList}/>
        <Route path ="/movies/:id" component = {Movie}/>
        <Route path ="/saved/id" component = {SavedList}/>
      
    </div>
  );
};

export default App;
