import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { Container, FormContainer, ButtonContainer, ItensTitle, Divider } from "./styles";
import { useDataLocal } from "../../hooks/data";
import { FlatList, TouchableOpacity, Text, View, ScrollView } from "react-native";
import ItemList from "../ItemList";
import { Colors } from "../../helpers/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Modalize } from 'react-native-modalize';
import CalorieItemForm from "../Form/CalorieItem";
import { CalorieItemData } from "../Form/CalorieItem/type";

const ItemMaintenance = () => {
  const { addItem, removeItem, updateItem, currentDate, currentList } = useDataLocal();
  
  const navigation = useNavigation();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const handleOnSave = async (data: CalorieItemData) => {

    addItem({
      id: generateUniqueId(),
      name: data.description,
      kcal: Number(data.amount),
      date: currentDate
    })

    onClose();
  };

  return (
    <>
      <Modalize
        ref={modalizeRef}
        disableScrollIfPossible={false}
        adjustToContentHeight={true} //Issue https://github.com/jeremybarbet/react-native-modalize/issues/455
        scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
      >
        <FormContainer>
          <CalorieItemForm onSubmit={handleOnSave}/>

          <ButtonContainer>
            <Button title="Adicionar registro" onPress={() => null} />
          </ButtonContainer>
        </FormContainer>
      </Modalize>

      <Container>
        <ItensTitle>Itens do dia</ItensTitle>
        <FlatList
            data={currentList}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <ItemList 
            item={item} 
            options={[
            <TouchableOpacity onPress={() => removeItem(item.id)}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={30}
              color={Colors.red}
              />
            </TouchableOpacity>, 
            
            <TouchableOpacity onPress={() => console.log("delete")}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={30}
              color={Colors.primary}
              />
            </TouchableOpacity>
              ]}
              />}
              />
        <Divider />

        
        <ButtonContainer>
          <Button title="Adicionar registro" onPress={onOpen} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ItemMaintenance;
