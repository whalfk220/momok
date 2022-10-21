import styled, {
  keyframes
} from 'styled-components'
import Icon from '~/components/Common/Icon'

const shaking = keyframes`
  0% {
    transform: rotate(0) translateX(0);
  }
  5% {
    transform: rotate(10deg) translateX(-10px);
  }
  10% {
    transform: rotate(-10deg) translateX(10px);
  }
  15% {
    transform: rotate(10deg) translateX(-10px);
  }
  20% {
    transform: rotate(-10deg) translateX(10px);
  }
  25% {
    transform: rotate(10deg) translateX(-10px);
  }
  30% {
    transform: rotate(-10deg) translateX(10px);
  }
  35% {
    transform: rotate(10deg) translateX(-10px);
  }
  40% {
    transform: rotate(-10deg) translateX(10px);
  }
  45% {
    transform: rotate(10deg) translateX(-10px);
  }
  50% {
    transform: rotate(-10deg) translateX(10px);
  }
  55% {
    transform: rotate(10deg) translateX(-10px);
  }
  60% {
    transform: rotate(-10deg) translateX(10px);
  }
  65% {
    transform: rotate(10deg) translateX(-10px);
  }
  70% {
    transform: rotate(-10deg) translateX(10px);
  }
  75% {
    transform: rotate(10deg) translateX(-10px);
  }
  80% {
    transform: rotate(-10deg) translateX(10px);
  }
  85% {
    transform: rotate(10deg) translateX(-10px);
  }
  90% {
    transform: rotate(-10deg) translateX(10px);
  }
  95% {
    transform: rotate(10deg) translateX(-10px);
  }
  100% {
    transform: rotate(0) translateX(0);
  }
`

const PageWrap = styled.div`
  height: calc(100vh - 74px);
  align-items: center;
  display: flex;
`

const AddRestaurantBtn = styled.button`
  height: 30px;
  padding: 0 8px;
  border: 1px solid #FE724C;
  border-radius: 15px;
  font-weight: bold;
  font-size: 13px;
  color: #FE724C;
  transition: background-color .2s;
  position: absolute;
  top: 23px;
  right: 22px;

  &:active {
    background-color: rgba(0, 0, 0, .05);
  }
`

const ContentBox = styled.div`
  width: 100%;
  padding: 70px 20px 0;
  text-align: center;
`

const ContentClickableArea = styled.button`
  width: 100%;
  padding: 40px 0;
  border-radius: 8px;
  transition: background-color .2s;

  &:active {
    background-color: rgba(0, 0, 0, .05);
  }
`

const ContentIcon = styled(Icon)`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  font-size: 60px;
  color: #FE724C;
  transform-origin: 50% 150%;
  display: block;

  &.shaking {
    animation-name: ${shaking};
    animation-duration: 2500ms;
    animation-timing-function: linear;
  }
`
const ContentText = styled.p`
  font-weight: bold;
  font-size: 38px;
  color: #FE724C;
`

export {
  PageWrap,
  AddRestaurantBtn,
  ContentBox,
  ContentClickableArea,
  ContentIcon,
  ContentText,
}
