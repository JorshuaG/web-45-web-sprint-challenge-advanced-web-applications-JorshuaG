import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from "../services/fetchColorService";

const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const getColor = async () => {
      const newColors = await fetchColorService();
      console.log(newColors);
      setColors(newColors);
    };
    getColor();
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    console.log(editColor);
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/:id`, editColor)
      .then((res) => {
        setColors([
          ...colors.filter((color) => color.id !== res.data.id),
          res.data,
        ]);
      })
      .catch((err) => {
        console.log("axios edit put catch", err);
      });
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete("http://localhost:5000/api/colors/:id", colorToDelete)
      .then((res) => {
        console.log(res);
        setColors(colors.filter((color) => color.id !== res.config.id));
        console.log("successful delete", res.data);
      })
      .catch((err) => {
        console.log("axios color delete catch", err);
      });
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
