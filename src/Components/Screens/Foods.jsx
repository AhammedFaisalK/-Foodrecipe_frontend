import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Foods() {
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/foods/");
    console.log(response.data.data);
    setFoods(response.data.data);
  };
  const getFoodRecipes = () => {
    return foods.map((item) => {
      return (
        <FoodItem key={item.id}>
          <Link to={`/description/${item.id}`}>
            <FoodImageContainer>
              <FoodImage src={item.featured_image} />
            </FoodImageContainer>
            <FoodName>{item.name}</FoodName>
            <PublisherName>{item.publisher_name}</PublisherName>
          </Link>

          {/* <PlaceLocation>
                <LocationIcon>
                  <Icon src="" />
                </LocationIcon>
               
              </PlaceLocation> */}
        </FoodItem>
      );
    });
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <>
      <Helmet>
        <title>Food | You must checkout </title>
      </Helmet>
      <BodyContainer>
        <InnerContainer>
          <Heading>Welcome User</Heading>
          <SubHeading>Explore Food Recipies </SubHeading>
          <FoodsList>{getFoodRecipes()}</FoodsList>
        </InnerContainer>
      </BodyContainer>
    </>
  );
}

export default Foods;
const BodyContainer = styled.div`
  padding-top: 35px;
`;
const InnerContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: left;
`;
const SubHeading = styled.h5`
  font-size: 18px;
  color: rgb(229, 229, 49);
  margin-bottom: 50px;
  text-align: left;
`;
const FoodsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FoodItem = styled.li`
  width: 23%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.3);
  }
`;
const FoodImageContainer = styled.div``;
const FoodImage = styled.img`
  display: block;
  width: 100%;
`;
const FoodName = styled.h4`
  width: 92%;
  margin: 5px auto 0px;
`;
const PlaceLocation = styled.div`
  display: flex;
  width: 93%;
  margin: 0 auto;
`;
const LocationIcon = styled.div``;
const PublisherName = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 15px;
`;
const Icon = styled.img``;
