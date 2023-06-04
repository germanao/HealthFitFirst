import moment from "moment";
import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { Container, FormContainer, ButtonContainer } from "./styles";
import { useDataLocal } from "../../hooks/data";

const NewItem = () => {
  const { addItem, currentDate } = useDataLocal();
  
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [kcal, setKcal] = useState<string>();

  const handleOnSave = () => {
    if(!name || !kcal) return

    addItem({
      id: generateUniqueId(),
      name: name,
      kcal: Number(kcal),
      date: currentDate
    })

    navigation.goBack()
  };

  return (
    <Container>
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
      <ButtonContainer>
        <Button title="Salvar" onPress={handleOnSave} />
      </ButtonContainer>
    </Container>
  );
};

export default NewItem;
