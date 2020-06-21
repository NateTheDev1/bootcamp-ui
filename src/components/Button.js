import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  textColor,
  children,
  style,
  onClick,
  disabled,
  width,
  height,
  theme,
  variant,
  type
}) => {
  const generateVariantDark = () => {
    switch (variant) {
      case 'outlined':
        return { border: '1px solid black' }
    }
  }

  const generateVariantLight = () => {
    switch (variant) {
      case 'outlined':
        return { border: '1px solid black' }
    }
  }

  let styles

  switch (theme) {
    case 'dark':
      styles = {
        ...generateVariantDark(),
        ...style
      }
    default:
      styles = {
        color: textColor !== undefined ? textColor : 'black',
        width: width !== undefined ? width : '300px',
        height: height !== undefined ? height : '50px',
        ...generateVariantLight(),
        ...style
      }
  }

  Button.PropTypes = {
    variant: PropTypes.bool,
    textColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    theme: PropTypes.string
  }

  return (
    <React.Fragment>
      <button style={styles} disabled={disabled} onClick={onClick} type={type}>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button
