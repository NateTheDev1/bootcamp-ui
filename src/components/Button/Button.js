import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Btn = styled.button`
  border: ${(props) => {
    switch (props.semantic) {
      case 'danger':
        if (props.variant === 'dark') {
          return '3px solid #BB121A'
        } else {
          return '1px solid #BB121A'
        }
      case 'success':
        if (props.variant === 'dark') {
          return '3px solid #38BF2F'
        } else {
          return '1px solid #38BF2F'
        }
      default:
        if (props.variant === 'dark') {
          return '3px solid #0566F8'
        } else {
          return '1px solid #0566F8'
        }
    }
  }};
  border-radius: 5px;
  color: ${(props) => {
    switch (props.variant) {
      case 'dark':
        return 'white'
      default:
        switch (props.semantic) {
          case 'danger':
            return '#BB121A'
          case 'success':
            return '#38BF2F'
          default:
            return '#0566F8'
        }
    }
  }};
  width: ${(props) => (props.width !== undefined ? props.width : '200px')};
  height: ${(props) => (props.height !== undefined ? props.height : '50px')};
  background: ${(props) => {
    switch (props.variant) {
      case 'dark':
        return '#212121'
      default:
        return 'white'
    }
  }};
  transition: all ease-in-out 0.3s;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1rem;

  :hover {
    background: ${(props) => {
      switch (props.variant) {
        case 'dark':
          return 'rgba(33, 33, 33, 0.8)'
        default:
          switch (props.semantic) {
            case 'danger':
              return '#BB121A'
            case 'success':
              return '#38BF2F'
            default:
              return '#0566F8'
          }
      }
    }};
    color: white;
    border: ${(props) => {
      switch (props.semantic) {
        case 'danger':
          if (props.variant === 'dark') {
            return '3px solid #BB121A'
          } else {
            return '1px solid #BB121A'
          }
        case 'success':
          if (props.variant === 'dark') {
            return '3px solid #38BF2F'
          } else {
            return '1px solid #38BF2F'
          }
        default:
          if (props.variant === 'dark') {
            return '3px solid #0566F8'
          } else {
            return '1px solid #0566F8'
          }
      }
    }};
    cursor: pointer;
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -4px) scale(0.98);
  }
`

/**
 *  Bootcamp-UI Basic Button
 *
 * @version 0.09
 */

const Button = ({
  children,
  style,
  onClick,
  disabled,
  width,
  height,
  variant,
  type,
  semantic
}) => {
  return (
    <Btn
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
      width={width}
      height={height}
      semantic={semantic}
      variant={variant}
    >
      {children}
    </Btn>
  )
}

Button.propTypes = {
  /** Changes the theme of the entire component. */
  variant: PropTypes.string,
  /** Width of the component. */
  width: PropTypes.string,
  /** Height of the component. */
  height: PropTypes.string,
  /** The semantic colors of the component */
  semantic: PropTypes.string
}

Button.defaultProps = {
  variant: 'light',
  width: '200px',
  height: '50px',
  semantic: 'default'
}

export default Button
