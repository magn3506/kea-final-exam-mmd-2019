import React from "react"
import styled, { css } from "styled-components"
const Diamond = props => {
  const IconWrapper = styled.div`
    width: 100%;
    svg {
      fill: ${props.color ? props.color : "black"};
      width: 100%;
    }
  `

  return (
    <IconWrapper>
      <svg
        id='diamond'
        data-name='diamond'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 687.18 1000'
      >
        <path
          d='M672,249.92,500.23-.08l-171.8,250-171.79,250,171.79,250,171.8,250,171.8-250,171.79-250Zm-23.8,130.42-30.51,5.91V613.78l30.51,5.15v26.13H526.93V618.93l30.52-5.34V511.94H443.59V613.59l32.61,5.34v26.13h-124V618.93l31.09-5.34V386.25l-30.52-5.91V354.78H476.2v25.56l-32.61,5.91V481.8H557.45V386.25l-30.9-5.91V354.78H648.23Z'
          transform='translate(-156.64 0.08)'
        />
      </svg>
    </IconWrapper>
  )
}

export default Diamond
