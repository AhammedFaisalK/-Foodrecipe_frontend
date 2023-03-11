import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function SingleFood() {
  const [des, setDes] = useState({});
  const { id } = useParams();

  const getSingleFood = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/api/v1/foods/view/${id}`
    );
    console.log(result.data.data);
    setDes(result.data.data);
  };
  const renderFoods = () => {
    return (
      <MainContainer>
        <DesHead>{des.name}</DesHead>
        <CategoryContainer>
          <Category>{des.category}</Category>

          <LocationName>{des.location}</LocationName>
        </CategoryContainer>
        <PlaceCard>
          <LeftContainer>
            <ImageContainer>
              <Image src={des.featured_image} />
            </ImageContainer>
          </LeftContainer>
          <RightContainer></RightContainer>
        </PlaceCard>
        <Content>
          <Top>Food Ingredients</Top>
          <Cont>{des.ingredients}</Cont>
          <Top>Preparation Method</Top>
          <Cont>{des.description}</Cont>
        </Content>
      </MainContainer>
    );
  };
  useEffect(() => {
    getSingleFood();
  }, []);
  return <>{renderFoods()}</>;
}

export default SingleFood;
const MainContainer = styled.div`
  width: 77%;
  margin: 0 auto;
  padding-top: 65px;
`;
const DesHead = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
`;
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  /* width: 25%; */
  margin-bottom: 20px;
`;
const Category = styled.span`
  display: inline-block;
  color: #b4b4b4;
  border: 2px solid #b4b4b4;
  border-radius: 30px;
  padding: 4px 8px;
`;
const LocationIcon = styled.img`
  display: block;
  margin-left: 10px;
  margin-right: 5px;
`;
const LocationName = styled.h6`
  font-size: 16px;
  color: #a2a2a2;
`;
const PlaceCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const LeftContainer = styled.div`
  width: 50%;
`;
const ImageContainer = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 48%;
`;
const ImageSlide = styled.div`
  width: 48%;
  &:nth-child(2) {
    border-top-right-radius: 10px;
    overflow: hidden;
  }
  &:nth-child(4) {
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }
  margin-bottom: 20px;
`;
const Content = styled.div``;
const Top = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
`;
const Cont = styled.p`
  color: #545454;
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 400;
`;
