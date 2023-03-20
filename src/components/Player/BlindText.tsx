import styled from 'styled-components';

const BlindText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export default function Text(props: any): JSX.Element {
  return <BlindText {...props}>{props.text}</BlindText>;
}
