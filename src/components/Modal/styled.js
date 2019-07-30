import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    background-color: rgba(0,0,0,0);
  }

  to {
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
  }
`;

const appear1 = keyframes`
  from {
    z-index: -1;
    background-color: rgba(0,0,0,0);
  }

  to {
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
  }
`;

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
  transition: background-color 0.3s ease, opacity 0.3s ease;
  background-color: ${props => (props.showModal ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)')};
  opacity: ${props => (props.showModal ? 1 : 0)};
  z-index: ${props => (props.showModal ? 100 : -100)};
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
