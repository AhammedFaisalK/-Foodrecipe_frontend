import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function AddRecipie() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setcategory] = useState("");
  const [foods, setFoods] = useState([]);
  const { userData } = useContext(UserContext);
  let newVal = foods.map((item) => {
    return item.category.name;
  });
  newVal = [...new Set(newVal)];
  console.log("new", newVal);
  const navigate = useNavigate();
  const getFoods = async () => {
    const response = await axios
      .get("http://127.0.0.1:8000/api/v1/foods/", {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((response) => {
        console.log("res", response.data.data);
        setFoods(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status && error.response.status === 401) {
          navigate("/auth/login");
        }
      });
  };

  const addRecipieInfo = async () => {
    let formField = new FormData();

    formField.append("name", foodName);
    formField.append("publisher_name", name);
    formField.append("description", description);
    formField.append("ingredients", ingredients);
    formField.append("category.id", category);
    if (image !== null) {
      formField.append("featured_image", image);
    }
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/foods/create/",
      data: formField,
    }).then((response) => {
      console.log(response);
      navigate("/home");
    });
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <MainContainer>
      <Heading>Add Your Recipie Here</Heading>
      <FormConatiner>
        <InputContainer>
          <Label for="id_name">Name</Label>
          <TextInput
            type="text"
            placeholder="Enter Your Name"
            id="id_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label for="id_food_name">Food Name</Label>
          <TextInput
            type="text"
            placeholder="Enter Food Name"
            id="id_food_name"
            name="name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label for="id_featured_image">Featured Image</Label>
          <TextInput
            type="file"
            accept="image/*"
            id="id_featured_image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </InputContainer>
        <InputContainer>
          <Label for="id_category">Category</Label>
          <Select id="id_category">
            <Id id="">{newVal}</Id>
          </Select>
        </InputContainer>
        <InputContainer>
          <Label for="id_ingredients">Ingredients</Label>
          <TextArea
            id="id_ingredients"
            rows="4"
            cols="50"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></TextArea>
        </InputContainer>
        <InputContainer>
          <Label for="id_description">Description</Label>
          <TextArea
            id="id_description"
            rows="4"
            cols="50"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>
        </InputContainer>
        <ButtonContainer>
          <SubmitButton onClick={addRecipieInfo}>Add Recipie</SubmitButton>
        </ButtonContainer>
      </FormConatiner>
    </MainContainer>
  );
}

export default AddRecipie;

const MainContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Heading = styled.h1`
  text-align: center;
`;
const FormConatiner = styled.form`
  width: 90%;

  margin: 36px auto 0px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;
const TextInput = styled.input`
  display: block;
  width: 50%;
`;
const TextArea = styled.textarea`
`;
const ButtonContainer = styled.div``;
const SubmitButton = styled.button``;
const Select = styled.select``;
const Id = styled.option``;
