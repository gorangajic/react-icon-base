import { default as React, PropTypes } from 'react'
const defaultSize = '1em'

const IconBase = ({ children, size, style, ...props }, { reactIconBase }) => {
    const computedSize = size ? size : (reactIconBase && reactIconBase.size || defaultSize)
    const computedStyle = {
        verticalAlign: "middle",
        ...(reactIconBase && reactIconBase.style || {}),
        ...style
    }
    return (
        <svg
            fill="currentColor"
            fit
            height={computedSize}
            width={computedSize}
            {...props}
            {...reactIconBase}
            preserveAspectRatio="xMidYMid meet"
            style={computedStyle}
        >
            {children}
        </svg>
    )
}

IconBase.contextTypes = {
    reactIconBase: PropTypes.object
}

IconBase.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object
}

export default IconBase
