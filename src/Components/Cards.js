import React from "react";
import Card from "./Card"; // Assuming you have a Card component

const Cards = (props) => {
  let courses = props.courses;

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
  }
  return <div></div>;
};

export default Cards;
