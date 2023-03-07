import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercises from "../pages/Excercise";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from '../pages/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/exercise' element={<Exercises />} />
      <Route exact path='/exercise/new' element={<ExerciseNew />} />
      <Route path = '*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;