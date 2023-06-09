import styled from 'styled-components/native';
import { Colors } from '../../helpers/constants'

export const Container = styled.View`
    flex: 1; 
    padding: 20px;
    justify-content: space-between;
`

export const FormContainer = styled.View`
    margin-top: 60px;
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