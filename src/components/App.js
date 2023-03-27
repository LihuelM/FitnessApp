import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Exercises from "../pages/Excercise";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route exact path='/exercise' element={<Exercises />} />
      <Route exact path='/exercise/new' element={<ExerciseNew />} />
      <Route path = '*' element={<NotFound/>}/>
    </Routes>
  </Router>
);

export default App;