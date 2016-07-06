import { default as React, PropTypes } from 'react'
const defaultColor = '#444'
const defaultSize = '1em'

const IconBase = ({ children, color, size, style, ...props }, { reactIconBase }) => {
    const computedSize = size ? size : (reactIconBase && reactIconBase.size || defaultSize)
    const computedColor = color ? color : (reactIconBase && reactIconBase.color || defaultColor)
    const computedStyle = {
        verticalAlign: 'middle',
        color: computedColor,
        ...(reactIconBase && reactIconBase.style || {}),
        ...style
    }
    return (
        <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height={computedSize}
            width={computedSize}
            {...reactIconBase}
            {...props}
            style={computedStyle}
        >
            {children}
        </svg>
    )
}

IconBase.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object
}

IconBase.contextTypes = {
    reactIconBase: PropTypes.shape(IconBase.propTypes)
}

export default IconBase
