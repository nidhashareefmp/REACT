import React from 'react';

const List = () => {
  const colors = ["pink", "yellow", "red"];

  return (
    <div>
      <h3>Color  List</h3>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;