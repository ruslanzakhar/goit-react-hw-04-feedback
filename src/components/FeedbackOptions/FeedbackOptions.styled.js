import styled from '@emotion/styled';

export const Button = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  
  position: relative;
  display: inline-block;
  
  outline: none;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;

  &:after {
    position: absolute;
    content: ' ';
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0c5dad;
    
    
  }
  &:hover {
    background: transparent;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #fff;
    transition: all 0.3s ease;
  }
  
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`