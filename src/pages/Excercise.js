import React from 'react';
import Welcome from "../components/Welcome";
import ExcerciseList from "../components/ExcerciseList";
import AddButton from "../components/AddButton";

class Exercises extends React.Component {
  state = {
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

  render(){
    return(
      <div>
        <Welcome 
          username= 'Li'
        />
        <ExcerciseList
          excercises={this.state.data}
        />
        <AddButton />
      </div>
    );
  }
};

export default Exercises;