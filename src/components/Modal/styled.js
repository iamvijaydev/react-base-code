import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.showModal ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)')};
`;

const Modal = styled.div`
  max-height: 80%;
  max-width: 80%;
  width: 600px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray400};
  border-radius: 4px;
  padding: 3rem 1rem;
  position: relative;
  box-shadow: 0 40px 77px rgba(0, 0, 0, 0.22), 0 27px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: ${props => (props.showModal ? 1 : 0)};
  transform: ${props => (props.showModal ? 'scale(1) translateY(0)' : 'scale(0.1) translateY(250px)')};
  overflow-y: auto;
`;

const Close = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;
const Content = styled.div`
  text-align: center;
`;

Styled.Modal = Modal;
Styled.Close = Close;
Styled.Content = Content;

export { Styled as default };
