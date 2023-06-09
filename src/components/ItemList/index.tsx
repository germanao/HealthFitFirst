import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Item } from "../../types";

interface ItemProps {
  item: Item;
  options?: React.ReactNode[];
}

import { Container, IconContainer, InfoContainer, Title, Kcal, OptionIcon, ContainerOptions } from "./style";
import { Colors } from "../../helpers/constants";
import { View } from "react-native";

const ItemList: React.FC<ItemProps> = ({ item, options }) => {
  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={30}
          color={Colors.primary}
        />
      </IconContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <Kcal>{item.kcal} kcal</Kcal>
      </InfoContainer>
      {options && 
        <ContainerOptions>
          {options.map((option, index) => (
            <OptionIcon key={index}>
              {option}
            </OptionIcon>
          ))}
        </ContainerOptions>
      }
    </Container>
  );
};

export default ItemList;
