import React from 'react';
import Card from './Card';

const ExcerciseList = ({excercises}) => (
  <div>
      {  excercises.map((excercise) => {
        return(
          <Card
            key={excercise.id}
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

export default ExcerciseList;