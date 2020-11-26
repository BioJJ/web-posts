import React, { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import animationData from './animation.json';

const ButtonWrapper = styled.button`
  --size: 80px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 33px;
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  color: brown;
  

  .animation {
    pointer-events: none;
   
   
  }

`;


export const LikeButton = () => {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (
    <>
      <ButtonWrapper onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
      }}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={400}
            height={400}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            onChange={e => this.setState({posts:e.target.value})}
            />
            
        </div>

        <span>
        {isLiked ? 1 : 0}
      </span>
      </ButtonWrapper>
      
    </>
  );
}

export default LikeButton;

