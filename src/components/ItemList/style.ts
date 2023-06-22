import styled from 'styled-components/native'
import { Colors } from '../../helpers/constants'

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
`
export const OptionIcon = styled.View`
  max-width: 60px;
`
export const ContainerOptions = styled.View`
  flex-direction: row;
  flex: 1;
  column-gap: 10px;
  justify-content: flex-end;
  align-items: center;
`

export const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  border: 2px solid ${Colors.primary};
  border-radius: 30px;
  margin-right: 24px;

  justify-content: center;
  align-items: center;
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
  color: rgba(0, 0, 0, 0.5);
`
