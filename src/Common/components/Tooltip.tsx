import React, { useState } from 'react';
import styled from 'styled-components';


// Styled Components
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #bbb7b7;
  color: #1e1c1c;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;

  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
    z-index: 1000;
  }
`;;

//typescript
interface TooltipProps {
    text: string;
    children: React.ReactNode;
};


//tooltip component
const Tooltip = ({ text, children }: TooltipProps) => {

  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
