import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    flex-direction: row;
`

export const IconContainer = styled.View`
    width: 60px;
    height: 60px;
    border: 2px solid #1E3BA1;
    border-radius: 30px;
    margin-right: 24px;

    justify-content: center;
    align-items:center;
`

export const InfoContainer = styled.View`
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 18px;
    line-height: 21px;
`

export const Kcal = styled.Text`
    font-size: 12px;
    line-height: 21px;
    color: rgba(0,0,0, 0.5)
`