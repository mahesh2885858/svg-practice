import React, { useEffect, useState } from 'react'
interface PropsType {
    styles: React.CSSProperties,
    changeDim?: React.Dispatch<React.SetStateAction<{
        height: number;
        width: number;
    }>>
}
const SpanElement = (props: PropsType) => {
    const { changeDim, styles } = props
    const [isMouseDown, setIsMouseDown] = useState(false)

    return (
        <span style={{

            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "black",
            position: "absolute",
            cursor: "crosshair",
            zIndex: 100,
            ...styles


        }}
            onMouseDown={(e) => {
                e.stopPropagation()
                setIsMouseDown(true)
            }}
            onMouseUp={(e) => {
                e.stopPropagation()
                setIsMouseDown(false)

            }}

            onMouseMove={(e) => {
                e.stopPropagation()
                if (isMouseDown) {
                    const img = document.getElementById("image")
                    const rect = img?.getBoundingClientRect()
                    changeDim!((prev) => {
                        return { ...prev, width: rect!.width + (e.clientX - (rect!.left + rect!.width)) }
                    })
                }
            }}
        ></span>
    )
}

export default SpanElement