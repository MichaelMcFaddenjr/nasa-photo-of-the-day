import React from "react"

function Image({ nasaData }) {
    return (
        <div>
            <img src={nasaData.hdurl} alt="NASA Astrology photo of the day"/>
        </div>
    )
}
export default Image