import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
//   const cars = useSelector((state) => {
  const {cars , name} = useSelector(({form ,cars:{data,searchTerm}}) => {
    // filtering logic here 
    const filteredCars =  data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return  {
        cars : filteredCars,
        name: form.name
    }
  });
  const handleCarDelete = (car) => {
    // .... to do
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    // state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && `bold`}`}>
        <p>
          {car.name} - {car.cost} INR
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
