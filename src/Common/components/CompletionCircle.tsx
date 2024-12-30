// Component INFO - This is CompletionCircle Component, for showing Resource completion circle with progress.
// Requires two mandatory props - percentage, size (SMALL, NORMAL, EXTRA_SMALL).
// It'll show two different components based on percentage - FullCompleteCircle, PendingCircle.


import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

interface CompletionCircleProps {
  percentage : number,
  size? : string
};

const SVGComponent = styled.svg`
  display: inline;
  max-width: 100%;
  max-height: 100%;
  transform: rotate(-90deg);
`

const FullCompleteCircle = (props : CompletionCircleProps) => {
  return (
    <div>
      <svg width="40" height="30" xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx="10"
          cy="10"
          r="10"
          fill="#00c853"
        />
        <polyline points="18 3 10 14 6 12" fill="white"></polyline>
        <polyline points="3 7 10 12 6 12" fill="white"></polyline>
      </svg>
    </div>
  )
};

const PendingCircle = ({percentage, size} : CompletionCircleProps) => {

  const eleRef = useRef(null);

  useEffect(()=>{

    const circleRef: any = eleRef.current;
    if (circleRef) {
      let radius = circleRef.r.baseVal.value;
      let circ = 2 * 3.14 * radius; 
      // 2 PI r
      circleRef.style.strokeDasharray = circ;
      circleRef.style.strokeDashoffset = circ - (percentage / 100) * circ;
    }
    

  }, [percentage]);



  return (
    <div>
      <SVGComponent width="40" height="40" xmlns='http://www.w3.org/2000/svg'>

        {/* Background circle */}
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke='#e2e6ed'
          strokeWidth={4.5}
        />

        {/* Main circle */}
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#1831bd"
          strokeWidth={4.5}
          strokeLinecap='round'
          strokeDasharray={100}
          strokeDashoffset={100}
          id="circle-progress"
          ref={eleRef}
        />

      </SVGComponent>
    </div>
  )
}

function CompletionCircle (props : CompletionCircleProps) {

    const {percentage=0, size="SMALL"} = props;

    if (percentage === 100) {
      return <FullCompleteCircle percentage={percentage} size={size} />
    } else {
      return <PendingCircle percentage={percentage} size={size} />
    }
    
};

CompletionCircle.defaultProps = {
  percentage: 0,
  size : "SMALL"
}

export default CompletionCircle;