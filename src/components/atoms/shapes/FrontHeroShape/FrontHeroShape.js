import React from "react"

const FrontHeroShape = props => {
  return (
    <>
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 314 311"
      fill="#42621"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
         <path
          d="M314 302.771V0H0V300.372C42.6008 260.309 99.0022 238.203 157.481 238.649C215.959 239.096 272.016 262.061 314 302.771V302.771Z"
          stroke="#42262D" fill="1A1A1A"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-4"
          y="0"
          preserveAspectRatio="none"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </>
  )
}

export default FrontHeroShape
