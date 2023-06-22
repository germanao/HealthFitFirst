import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Input } from 'react-native-elements'
import { generateUniqueId } from '../../helpers'
import { useNavigation } from '@react-navigation/native'

import { Container, FormContainer, ButtonContainer, ItensTitle, Divider } from './styles'
import { useDataLocal } from '../../hooks/data'
import { FlatList, TouchableOpacity, Text, View, ScrollView } from 'react-native'
import ItemList from '../ItemList'
import { Colors } from '../../helpers/constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Modalize } from 'react-native-modalize'
import CalorieItemForm from '../Form/CalorieItem'
import { CalorieItemData } from '../Form/CalorieItem/type'
import { Item } from '../../types'

const ItemMaintenance = () => {
  const { addItem, removeItem, updateItem, currentDate, currentList } = useDataLocal()

  const [itemToUpdate, setItemToUpdate] = useState<Item>({} as Item)

  const modalizeRef = useRef<Modalize>(null)

  const onOpen = () => {
    setItemToUpdate({} as Item)
    modalizeRef.current?.open()
  }

  const onClose = () => {
    modalizeRef.current?.close()
  }

  const handleOnSave = (data: CalorieItemData) => {
    if (data.id) {
      updateItem({
        id: data.id,
        name: data.description,
        kcal: Number(data.amount),
        date: data.date,
      })
    } else {
      addItem({
        name: data.description,
        kcal: Number(data.amount),
      })
    }

    onClose()
  }

  const handleUpdateItem = (item: Item) => {
    onOpen()
    setItemToUpdate(item ?? ({} as Item))
  }

  return (
    <>
      <Modalize
        ref={modalizeRef}
        disableScrollIfPossible={false}
        adjustToContentHeight={true} //Issue https://github.com/jeremybarbet/react-native-modalize/issues/455
        scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
      >
        <FormContainer>
          <CalorieItemForm onSubmit={handleOnSave} defaultValues={itemToUpdate} />
        </FormContainer>
      </Modalize>

      <Container>
        <ItensTitle>Itens do dia</ItensTitle>
        <FlatList
          data={currentList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ItemList
              item={item}
              options={[
                <TouchableOpacity key={item.id} onPress={() => removeItem(item.id)}>
                  <MaterialCommunityIcons name="delete-outline" size={30} color={Colors.red} />
                </TouchableOpacity>,

                <TouchableOpacity key={item.id} onPress={() => handleUpdateItem(item)}>
                  <MaterialCommunityIcons name="pencil-outline" size={30} color={Colors.primary} />
                </TouchableOpacity>,
              ]}
            />
          )}
        />
        <Divider />

        <ButtonContainer>
          <Button title="Adicionar calorias ingeridas" onPress={onOpen} />
        </ButtonContainer>
      </Container>
    </>
  )
}

export default ItemMaintenance
