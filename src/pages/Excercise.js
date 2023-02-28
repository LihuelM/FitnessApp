import React from 'react';
import Card from '../components/Card'
import Welcome from "../components/Welcome";

class Exercises extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [{
        "id": 1,
        "title": "Technique Guides",
        "description": "Learn amazing street workout and calisthenics",
        "img": "calisthenics.png",
        "leftColor": "#A74CF2",
        "rightColor": "#617BFB"
      },
      {
        "id": 2,
        "title": "Skills Training",
        "description": "Learn the secrets of bodyweight techniques",
        "img": "skillsTraining.png",
        "leftColor": "#17EAD9",
        "rightColor": "#6078EA"
      },
      {
        "id": 3,
        "title": "Strength Training",
        "description": "Train anytime, everywere and become a superhero!",
        "img": "strengthTraining.png",
        "leftColor": "#FAD961",
        "rightColor": "#F76B1C"
      }]
    }
  }
  render(){
    return(
      <div>
        <Welcome 
          username= 'Li'
        />

        { this.state.data.map((excercise) => {
          return(
            <Card
              title={excercise.title}
              description={excercise.description}
              img={excercise.img}
              leftColor={excercise.leftColor}
              rightColor={excercise.rightColor}
            />
          );
        })}
        
      </div>
    );
  }
};

export default Exercises;