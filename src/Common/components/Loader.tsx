// INFO - Loader Component
// Will be shown during loading of components, data, fallback.

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  /* display: inline-block; */
  width: 100%;
  height: 100%;

  &:after {
    content: " ";
    width: 10px;
    height: 10px;
    /* margin: 8px; */
    border-radius: 50%;
    border: 3px solid #998888;
    border-color: #b0ccb0 transparent;
    animation: ${spin} 0.5s linear infinite;
    position: absolute;
    /* left: 50%; */
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper />
  );
};

export default Loader;
