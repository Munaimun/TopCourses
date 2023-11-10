import React from "react";

const Filter = ({ filterData }) => {
  return (
    <div>
      {/* creating button for every filter */}
      {filterData.map((data) => (
        <button key={data.id}>{data.title}</button>
      ))}
    </div>
  );
};

export default Filter;
