import React from 'react'
import PropTypes from 'prop-types'

const IconBase = ({ children, color, size, style = {}, width, height, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1em'

  const baseStyle = reactIconBase.style || {}
  const styleProp = {
    verticalAlign: 'middle',
    ...baseStyle,
    ...style
  }

  const computedColor = color || style.color || reactIconBase.color || baseStyle.color
  if (computedColor) {
    styleProp.color = computedColor
  }

  return (
    <svg
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={height || computedSize}
      width={width || computedSize}
      {...reactIconBase}
      {...props}
      style={styleProp}
    />
  )
}

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  style: PropTypes.object
}

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
}

export default IconBase
