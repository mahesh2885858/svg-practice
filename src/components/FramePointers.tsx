import React from 'react'
import SpanElement from './SpanElement'
interface PropsType {
    changeDime: React.Dispatch<React.SetStateAction<{
        height: number;
        width: number;
    }>>
}
const FramePointers = (props: PropsType) => {
    const { changeDime } = props
    return (
        <>
            <SpanElement styles={{
                top: "-5px",
                left: "-5px",
            }} />
            <SpanElement styles={{
                top: "-5px",
                left: "50%",
                transform: "translateX(-50%)"
            }} />
            <SpanElement styles={{
                top: "-5px",
                right: "-5px",
            }} />
            <SpanElement styles={{
                right: "-5px",
                bottom: "50%",
                transform: "translateY(50%)",
                background: "red"
            }}
                changeDim={changeDime} />
            <SpanElement styles={{
                bottom: "-5px",
                right: "-5px",
            }} />
            <SpanElement styles={{
                bottom: "-5px",
                left: "-5px",
            }} />
            <SpanElement styles={{
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)"
            }} />
            <SpanElement styles={{
                left: "-5px",
                bottom: "50%",
                transform: "translateY(50%)"
            }} />
        </>
    )
}

export default FramePointers