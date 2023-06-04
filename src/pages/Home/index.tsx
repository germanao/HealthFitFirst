import React from 'react';

import CalendarStrip from 'react-native-calendar-strip';
import { Container , 
         HeaderContainer, 
         HeaderContainerHighlight, 
         HeaderTextCounterHighlight,
         HeaderTitle,
         HeaderTextHighlight,
         BodyContainer
        
        } from './styles';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import { FlatList, Text } from 'react-native';
import ItemList from '../../components/ItemList';
import { FAB } from 'react-native-elements';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useDataLocal } from '../../hooks/data';

const Home: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { currentKcal, handleChangeData, currentList } = useDataLocal()

  const handleNewItem = () => {
    navigation.navigate("NewItem")
  }

  return (
    <Container>
      <HeaderContainer>
      <CalendarStrip
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          scrollable
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={handleChangeData}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging
          iconLeft={require("../../assets/img/arrow-left.png")}
          iconRight={require("../../assets/img/arrow-right.png")}
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
          renderItem={({item}) => <ItemList item={item}/>}
        />
        <FAB
          icon={<Feather name="plus" size={24} color="white" />}
          visible
          placement="right"
          color='#1E3BA1'
          style={{marginRight: 16, right: 20, bottom: 20}}
          onPress={handleNewItem}
        />
        
      </BodyContainer>
    </Container>); 
}

export default Home;