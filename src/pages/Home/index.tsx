import React, { useCallback } from 'react'

import CalendarStrip from 'react-native-calendar-strip'
import {
  Container,
  HeaderContainer,
  HeaderContainerHighlight,
  HeaderTextCounterHighlight,
  HeaderTitle,
  HeaderTextHighlight,
  BodyContainer,
} from './styles'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { FlatList } from 'react-native'
import ItemList from '../../components/ItemList'
import { FAB } from 'react-native-elements'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useDataLocal } from '../../hooks/data'
import { Colors } from '../../helpers/constants'

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const { currentKcal, handleChangeData, currentList, currentDate } = useDataLocal()

  const handleNewItem = useCallback(() => {
    navigation.navigate('NewItem')
  }, [navigation])

  return (
    <Container>
      <HeaderContainer>
        <CalendarStrip
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{ color: 'white', marginBottom: 15 }}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          scrollable
          highlightDateNumberStyle={{ color: 'yellow' }}
          highlightDateNameStyle={{ color: 'yellow' }}
          disabledDateNameStyle={{ color: 'grey' }}
          disabledDateNumberStyle={{ color: 'grey' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={handleChangeData}
          startingDate={moment(currentDate).subtract(3, 'days')}
          selectedDate={moment(currentDate)}
          scrollerPaging
          iconLeft={require('../../assets/img/arrow-left.png')}
          iconRight={require('../../assets/img/arrow-right.png')}
        />
        <HeaderTitle>Consumido no dia</HeaderTitle>
        <HeaderContainerHighlight>
          <HeaderTextCounterHighlight>{currentKcal}</HeaderTextCounterHighlight>
          <HeaderTextHighlight>/kcal</HeaderTextHighlight>
        </HeaderContainerHighlight>
      </HeaderContainer>
      <BodyContainer>
        <FlatList
          data={currentList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemList item={item} />}
        />
        <FAB
          icon={<Feather name="plus" size={24} color="white" />}
          visible
          placement="right"
          color={Colors.primary}
          style={{ marginRight: 16, right: 20, bottom: 20 }}
          onPress={handleNewItem}
        />
      </BodyContainer>
    </Container>
  )
}

export default Home
