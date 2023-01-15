import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

export const FlashLightWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlashLightHead = styled.div`
  background-color: #8c8c8c;
  height: 50px;
  width: 180px;
`;

export const FlashLightNeck = styled.div`
  height: 0px;
  width: 120px;
  border-top:80px solid #595959;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
`;

export const FlashLightBody = styled.div`
  height: 310px;
  width: 120px;
  background-color: #8c8c8c;
  border-radius: 0px 0px 20px 20px;
`;

export const StateChangeButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: white;
  position: relative;
  top:80px;
  left:40px;
  border-radius: 8px;
  outline: none;
  border: none;
  box-shadow: 0px 5px #666666;
  &.on {
    top: 85px;
    box-shadow: 0px 0px #666666;
  }
  &.blink {
    top: 90px;
    box-shadow: 0px -5px #666666;
  }
`;

export const FlashLightRay = styled.div`
height: 0px;
width: 160px;
border-top:300px solid rgba(255,255,51,0.9);
border-left:70px solid transparent;
border-right:70px solid transparent;
  &.off {
    visibility: hidden;
  }
  &.blink {
    animation-name: ${blinkAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
