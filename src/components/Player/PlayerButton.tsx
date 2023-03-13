import styled from "styled-components";

const PlayerButton = styled.button<{size : number, image: string, hover: boolean}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  :hover {
    transform: ${props => props.hover && 'scale(1.1)'};
`
export default function Button(props: any): JSX.Element {
  return (
    <PlayerButton {...props}></PlayerButton>
  )
}