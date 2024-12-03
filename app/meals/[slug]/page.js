import React from 'react';

const MealPage = ({params}) => {
  return (
    <div>
      <h1>Welcome to the Meal</h1>
      <p>This is a Meal {params.slug}</p>
    </div>
  );
};

export default MealPage;