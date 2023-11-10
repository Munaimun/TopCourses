import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
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
