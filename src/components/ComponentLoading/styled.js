import styled from 'styled-components';

const Styled = styled.div`
  min-height: 100%;
  background: ${props => props.theme.backgroudColor};
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    max-width: 544px;
  }
`;

export { Styled as default };
