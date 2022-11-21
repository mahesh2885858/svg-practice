import React, { useEffect, useState } from 'react'
import FramePointers from './FramePointers'
import natureImgae from "./sample.jpeg"
const ImageCropper = () => {
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [dimensions, setDimensions] = useState({ height: 100, width: 100 })

    return (
        <div>
            <div>
                ImageCropper
            </div>
            <div
                draggable={false}
                onClick={(e) => {
                    e.stopPropagation()
                    setIsImageSelected((prev) => !prev)
                }}
                style={{
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                    cursor: "default",
                    position: "relative"
                }}
            >
                {isImageSelected ? <FramePointers changeDime={setDimensions} /> : null}
                <img
                    onDrag={() => false}
                    draggable={false} id="image" src={natureImgae} height="100%" width={"100%"} alt="nature" />
            </div>
        </div>
    )
}

export default ImageCropper