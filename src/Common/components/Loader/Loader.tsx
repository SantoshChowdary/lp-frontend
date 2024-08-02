import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid #998888;
    border-color: #f80303 transparent;
    animation: ${spin} 0.1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const Loader = () => {
  return <LoaderWrapper />;
};

export default Loader;
