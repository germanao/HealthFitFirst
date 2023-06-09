import styled from 'styled-components/native';
import { Colors } from '../../helpers/constants';

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.primary};
    padding-top: 32px;

    position: relative;
`

export const HeaderContainer = styled.View`
    flex: 1;
    max-height: 240px;
    background-color: ${Colors.primary};
    align-content: center;
`

export const HeaderTitle = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 20px;
`

export const HeaderContainerHighlight = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`
export const HeaderTextCounterHighlight = styled.Text`
    font-size: 68px;
    line-height: 80px;
    color: #FFFFFF;
`

export const HeaderTextHighlight = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

export const BodyContainer = styled.View`
    flex: 2;
    background-color: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px 20px;    
`
