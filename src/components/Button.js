import React from 'react'
import '../styles.module.css'
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
  type,
  semantic
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

  if (!semantic) {
    switch (theme) {
      case 'dark':
        styles = {
          ...generateVariantDark(),
          ...style
        }
      default:
        styles = {
          border: 'none',
          color: textColor !== undefined ? textColor : 'white',
          width: width !== undefined ? width : '300px',
          height: height !== undefined ? height : '50px',
          background: 'black',
          transition: '1s',
          ...generateVariantLight(),
          ...style,
          '&:hover': {
            background: 'white',
            cursor: 'pointer',
            boxShadow: '0px 10px 13px -7px #000000'
          }
        }
    }
  }

  if (semantic) {
    switch (semantic) {
      case 'danger':
        styles = {
          ...generateVariantDark(),
          ...style
        }
      default:
        styles = {
          ...generateVariantDark(),
          ...style
        }
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
    <button
      style={styles}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className='button'
    >
      {children}
    </button>
  )
}

export default Button
