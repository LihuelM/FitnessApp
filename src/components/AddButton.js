import React from 'react';
import { Link } from 'react-router-dom';
import buttonImg from "../img/add.png";
import './styles/AddButton.css';

const AddButton = () => (
  <Link to='/exercise/new'>
    <img src={buttonImg} className='Fitness-Add' alt='button new exercise'/>
  </Link>
);

export default AddButton;