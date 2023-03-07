import React from 'react';
import circleImg from '../img/circles.png';
import './styles/Cards.css';

class Card extends React.Component {

  render () {
    const { title, description, img, leftColor, rightColor} = this.props;
    return (
      <div className='card mx-auto Fitness-Card'
        style={{
          backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
        }}
      >
        <div className='card-body'>
          <div className='row center'> 
            <div className='col-6'> 
              <img src={require('../img/' + img)} className='float-right' alt='Excercise'/>
            </div>
            <div className='col-6 Fitness-Card-Info'> 
              <h1>{title}</h1>
              <p> {description} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;