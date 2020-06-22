import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  transition: all ease-in-out 0.3s;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 1rem;
  background: ${(props) => {
    if (props.variant === 'dark') {
      return 'rgba(33, 33, 33, 0.8)'
    }
  }};
  box-sizing: border-box;
  border: ${(props) => {
    if (props.validated === false) {
      if (props.variant === 'dark') {
        return '3px solid #BB121A'
      } else {
        return '1px solid #BB121A'
      }
    } else if (props.variant === 'dark') {
      return '3px solid #0566f8'
    } else {
      return '1px solid #0566f8'
    }
  }};
  color: ${(props) => {
    if (props.validated === false) {
      return '#BB121A'
    } else {
      if (props.variant === 'dark') {
        return '#0566F8'
      } else {
        return 'black'
      }
    }
  }};
  padding: 2%;
  border-radius: 5px;
  max-width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '200px'
      case 'md':
        return '350px'
      case 'lg':
        return '500px'
    }
  }};

  :focus {
    outline: none;
    background: rgba(33, 33, 33, 0.05);
    box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.2);
  }

  :hover {
    background: rgba(33, 33, 33, 0.05);
  }
`

/**
 *  Bootcamp-UI TextInput
 */

const TextInput = ({ placeholder, size, variant, validated }, { ...rest }) => {
  return (
    <Input
      type='text'
      {...rest}
      placeholder={placeholder}
      size={size}
      variant={variant}
      validated={validated}
    />
  )
}

TextInput.propTypes = {
  /** Changes the theme of the entire component. */
  variant: PropTypes.string,
  /** Overrides the width to fill the 100% of the row they are placed in. */
  fullWidth: PropTypes.bool,
  /** Sets the preset size */
  size: PropTypes.string,
  /** The semantic colors of the component */
  validated: PropTypes.bool
}

TextInput.defaultProps = {
  fullWidth: false,
  size: 'lg',
  variant: 'light',
  validated: true
}

export default TextInput
