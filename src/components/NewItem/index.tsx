import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { Container, FormContainer, ButtonContainer, ItensTitle, Divider } from "./styles";
import { useDataLocal } from "../../hooks/data";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import ItemList from "../ItemList";
import { Colors } from "../../helpers/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Modalize } from 'react-native-modalize';

const NewItem = () => {
  const { addItem, currentDate, currentList } = useDataLocal();
  
  const navigation = useNavigation();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const [name, setName] = useState<string>();
  const [kcal, setKcal] = useState<string>();

  const handleOnSave = async () => {
    if(!name || !kcal) return

    await addItem({
      id: generateUniqueId(),
      name: name,
      kcal: Number(kcal),
      date: currentDate
    })

    // navigation.goBack()
  };


  return (
    <>
      {/* <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity> */}

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
      >
        <FormContainer>
          <Input
          label="Nome"
          value={name}
          onChangeText={setName}
          placeholder="Descrição"
          />
          <Input
          label="kcal"
          value={kcal}
          onChangeText={setKcal}
          placeholder="somente números"
          />
        </FormContainer>
        <Button title="Adicionar registro" onPress={handleOnSave} />
      </Modalize>

      <Container>
        <ItensTitle>Itens do dia</ItensTitle>
        <FlatList
            data={currentList}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <ItemList 
            item={item} 
            options={[<MaterialCommunityIcons
              name="delete-outline"
              size={30}
              color={Colors.red}
              />, <MaterialCommunityIcons
              name="pencil-outline"
              size={30}
              color={Colors.primary}
              />]}
              />}
              />
        <Divider />

        
        <ButtonContainer>
          {/* <Button title="Adicionar registro" onPress={handleOnSave} /> */}
          <Button title="Adicionar registro" onPress={onOpen} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default NewItem;
