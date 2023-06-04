import moment from "moment";
import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { Container, FormContainer, ButtonContainer } from "./styles";

const NewItem = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");

  const handleOnSave = () => {
    console.log(name, kcal)
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
