import styled from 'styled-components';

export const FlashLightWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: flex-start;
    margin-left: 50px;
    align-items: center;
    height: 175px;
`

export const FlashLightBody = styled.div`
    height: 100px;
    width: 400px;
    background-color: blue;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const FlashLightHead = styled.div`
    height: 120px;
    width: 100px;
    background-color: red;
`

export const FlashLightRay = styled.div`
    border-right: 400px solid #FFFF00;
	border-top: 25px solid transparent;
	border-bottom: 25px solid transparent;
	height: 125px;
	width: 0;
    &.off {
        display: none;
      }
    &.blink {
        animation: blink 2s linear infinite;
    }
`

@keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }