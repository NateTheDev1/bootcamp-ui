import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: ${(props) => props.weight};
  color: ${(props) => {
    if (props.color.length < 1) {
      return 'black'
    } else {
      return props.color
    }
  }};
  font-size: ${(props) => {
    if (props.variant.length > 1) {
      switch (props.variant) {
        case 'sm':
          return '1rem'
        case 'md':
          return '1.5rem'
        case 'lg':
          return '2rem'
        case 'xl':
          return '2.5rem'
        default:
          return '1rem'
      }
    } else {
      if (props.fSize.length === '1rem') {
        return props.fSize
      } else {
        return props.fSize
      }
    }
  }};
`

const Typography = (
  { variant, color, size, fSize, children, weight },
  { ...rest }
) => {
  return (
    <Text
      variant={variant}
      color={color}
      size={size}
      fSize={fSize}
      weight={weight}
      {...rest}
    >
      {children}
    </Text>
  )
}

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fSize: PropTypes.string,
  weight: PropTypes.number
}

Typography.defaultProps = {
  variant: '',
  color: '',
  size: '',
  fSize: '1rem',
  weight: 500
}

export default Typography
