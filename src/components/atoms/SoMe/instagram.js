import React from "react"
import styled from "styled-components"
const Instagram = () => {
  const IconWrapper = styled.div`
    margin: 10px 0px 10px 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `

  return (
    <a href="https://www.instagram.com/hatsbootsbourbon" target="_blank">
      <IconWrapper>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M5.625 0H12.375C15.4811 0 18 2.51888 18 5.625V12.375C18 15.4811 15.4811 18 12.375 18H5.625C2.51888 18 0 15.4811 0 12.375V5.625C0 2.51888 2.51888 0 5.625 0ZM1.6875 12.375C1.6875 14.5463 3.45375 16.3125 5.625 16.3125H12.375C14.5462 16.3125 16.3125 14.5463 16.3125 12.375V5.625C16.3125 3.45375 14.5462 1.6875 12.375 1.6875H5.625C3.45375 1.6875 1.6875 3.45375 1.6875 5.625V12.375Z"
            fill="#8A6551"
          />
          <path
            d="M9 4.5C11.4851 4.5 13.5 6.51487 13.5 9C13.5 11.4851 11.4851 13.5 9 13.5C6.51487 13.5 4.5 11.4851 4.5 9C4.5 6.51487 6.51487 4.5 9 4.5ZM9 11.8125C10.5503 11.8125 11.8125 10.5503 11.8125 9C11.8125 7.44863 10.5503 6.1875 9 6.1875C7.44975 6.1875 6.1875 7.44863 6.1875 9C6.1875 10.5503 7.44975 11.8125 9 11.8125Z"
            fill="#8A6551"
          />
          <path
            d="M4.16258 4.76211C3.83142 4.76211 3.56296 4.49365 3.56296 4.16249C3.56296 3.83133 3.83142 3.56287 4.16258 3.56287C4.49375 3.56287 4.76221 3.83133 4.76221 4.16249C4.76221 4.49365 4.49375 4.76211 4.16258 4.76211Z"
            fill="#8A6551"
          />
        </svg>
      </IconWrapper>
    </a>
  )
}

export default Instagram
