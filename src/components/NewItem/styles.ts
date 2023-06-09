import styled from 'styled-components/native';
import { Colors } from '../../helpers/constants'
import { Dimensions } from 'react-native'

export const Container = styled.View`
    flex: 1; 
    padding: 20px;
    justify-content: space-between;
`

export const FormContainer = styled.View`
    margin-top: 60px;
    min-height: ${Dimensions.get('window').height * 0.5}px; //Issue https://github.com/jeremybarbet/react-native-modalize/issues/455
`

export const ButtonContainer = styled.View`
    width: 100%;
    margin-bottom: 20px;
`

export const ItensTitle = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Divider = styled.View`
    width: 80%;
    margin: 20px auto;
    height: 1.5px;
    background-color: ${Colors.primary};
`