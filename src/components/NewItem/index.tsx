import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { Container, FormContainer, ButtonContainer, ItensTitle, Divider } from "./styles";
import { useDataLocal } from "../../hooks/data";
import { FlatList } from "react-native";
import ItemList from "../ItemList";
import { Colors } from "../../helpers/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewItem = () => {
  const { addItem, currentDate, currentList } = useDataLocal();
  
  const navigation = useNavigation();

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
    <Container>
      {/* <FormContainer>
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
      </FormContainer> */}
      <ButtonContainer>
        <Button title="Adicionar registro" onPress={handleOnSave} />
      </ButtonContainer>

      <Divider />

      <ItensTitle>Itens do dia</ItensTitle>
      <FlatList
          data={currentList}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <ItemList 
              item={item} 
              options={[<MaterialCommunityIcons
                        name="pencil-outline"
                        size={30}
                        color={Colors.primary}
                      />, <MaterialCommunityIcons
                      name="pencil-outline"
                      size={30}
                      color={Colors.primary}
                    />]}
            />}
        />
    </Container>
  );
};

export default NewItem;
