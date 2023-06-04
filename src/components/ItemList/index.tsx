import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Item } from "../../types";

interface ItemProps {
  item: Item;
}

import { Container, IconContainer, InfoContainer, Title, Kcal } from "./style";

const ItemList: React.FC<ItemProps> = ({ item }) => {
  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={30}
          color="#1e3ba1"
        />
      </IconContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <Kcal>{item.kcal} kcal</Kcal>
      </InfoContainer>
    </Container>
  );
};

export default ItemList;
