import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGym, updateGym } from "../redux/gym/gymSlice";
import { addHotel, updateHotel } from "../redux/hotel/hotelSlice";
import {
  addRestaurant,
  updateRestaurant,
} from "../redux/restaurant/restaurantSlice";

const RestaurantModal = ({ setShow, methode, element, type }) => {
  const [newRestaurant, setNewRestaurant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    switch (type) {
      case "restaurant":
        dispatch(
          addRestaurant({
            ...newRestaurant,
            id: Math.floor(Math.random() * 1000000),
          })
        );
        break;
      case "hotel":
        dispatch(
          addHotel({
            ...newRestaurant,
            id: Math.floor(Math.random() * 1000000),
          })
        );
        break;
      case "gym":
        dispatch(
          addGym({ ...newRestaurant, id: Math.floor(Math.random() * 1000000) })
        );
        break;
      default:
        break;
    }
    setShow(false);
  };

  const handleUpdate = () => {
    switch (type) {
      case "restaurant":
        dispatch(updateRestaurant({ ...newRestaurant, id: element.id }));
        setShow(false);
        navigate("/restaurant");
        break;
      case "hotel":
        dispatch(updateHotel({ ...newRestaurant, id: element.id }));
        setShow(false);
        navigate("/hotel");
        break;
      case "gym":
        dispatch(updateGym({ ...newRestaurant, id: element.id }));
        setShow(false);
        navigate("/gym");
        break;

      default:
        break;
    }
    // dispatch(updateRestaurant({ ...newRestaurant, id: element.id }))
  };

  return methode === "update" ? (
    <div className="modal-container">
      <span onClick={() => setShow(false)} id="close-modal">
        x
      </span>
      <input
        defaultValue={element.name}
        onChange={(e) => handleChange(e)}
        type="text"
        name="name"
        placeholder="Restaurant Name"
      />
      <input
        defaultValue={element.ville}
        onChange={(e) => handleChange(e)}
        type="text"
        name="ville"
        placeholder="City"
      />
      <input
        defaultValue={element.address}
        onChange={(e) => handleChange(e)}
        type="text"
        name="address"
        placeholder="Full Adresse"
      />
      <input
        defaultValue={element.images}
        onChange={(e) => handleChange(e)}
        type="text"
        name="images"
        placeholder="Image URL"
      />
      <input
        defaultValue={parseInt(element.phone.split(" ").join(""))}
        onChange={(e) => handleChange(e)}
        type="number"
        name="phone"
        placeholder="Phone Number"
      />
      <button onClick={() => handleUpdate()}>update</button>
    </div>
  ) : (
    <div className="modal-container">
      <span onClick={() => setShow(false)} id="close-modal">
        x
      </span>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="name"
        placeholder="Restaurant Name"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="ville"
        placeholder="City"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="address"
        placeholder="Full Adresse"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="images"
        placeholder="Image URL"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="number"
        name="phone"
        placeholder="Phone Number"
      />
      <button onClick={() => handleSubmit()}>Add New Plan</button>
    </div>
  );
};

export default RestaurantModal;
