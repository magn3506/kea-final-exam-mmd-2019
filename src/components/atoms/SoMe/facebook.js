import React from "react"
import styled from "styled-components"
const Facebook = () => {
  const IconWrapper = styled.div`
    margin: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `

  return (
    <a href="https://www.facebook.com/hatsbootsbourbon/" target="_blank">
      <IconWrapper>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M12.7492 0.00353713L10.5447 0C8.06799 0 6.46746 1.64211 6.46746 4.18372V6.1127H4.25093C4.0594 6.1127 3.9043 6.26798 3.9043 6.45951V9.25438C3.9043 9.44592 4.05958 9.60102 4.25093 9.60102H6.46746V16.6534C6.46746 16.8449 6.62256 17 6.81409 17H9.70602C9.89756 17 10.0527 16.8447 10.0527 16.6534V9.60102H12.6443C12.8358 9.60102 12.9909 9.44592 12.9909 9.25438L12.992 6.45951C12.992 6.36755 12.9554 6.27948 12.8905 6.21439C12.8256 6.14931 12.7371 6.1127 12.6452 6.1127H10.0527V4.47748C10.0527 3.69153 10.2399 3.29254 11.2638 3.29254L12.7488 3.29201C12.9402 3.29201 13.0953 3.13673 13.0953 2.94537V0.350176C13.0953 0.158994 12.9403 0.00389085 12.7492 0.00353713Z"
            fill="#8A6551"
          />
        </svg>
      </IconWrapper>
    </a>
  )
}

export default Facebook
