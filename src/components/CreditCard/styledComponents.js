// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100vh;
`
export const Card = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.bgImg})`};
  background-size: ${props => props.bgSize};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => props.brRadius};
  padding-top: ${props => props.paddingTop};
  box-shadow: ${props => props.boxShadow};
`
export const Heading = styled.h1`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin-top: ${props => props.marginTop};
  margin: ${props => props.margin};
`
export const Hr = styled.hr`
  color: ${props => props.color};
  width: ${props => props.width};
  height: 2px;
`
export const Para = styled.p`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
`

export const CustomInput = styled.input`
  height: 50px;
  outline: none;
  width: 500px;
  margin-top: ${props => props.marginTop};
`
