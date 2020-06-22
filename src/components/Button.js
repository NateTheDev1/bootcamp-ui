import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Btn = styled.button`
  border: 'none';
  color: ${(props) => (props.textColor !== undefined ? textColor : 'red')};
  width: ${(props) => (props.width !== undefined ? width : '300px')};
  height: ${(props) => (props.height !== undefined ? height : '50px')};
  background: black;
  transition: 1s;
  ${(props) => props.generateVariantLight()};

  :hover {
    background: white;
    cursor: 'pointer';
    box-shadow: '0px 10px 13px -7px #000000';
  }
`

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
  // const generateVariantDark = () => {
  //   switch (variant) {
  //     case 'outlined':
  //       return { border: '1px solid black' }
  //   }
  // }

  const generateVariantLight = () => {
    switch (variant) {
      case 'outlined':
        return { border: '1px solid black' }
    }
  }

  // let styles

  /* 
  // if (!semantic) {
  //   switch (theme) {
  //     case 'dark':
  //       styles = {
  //         ...generateVariantDark(),
  //         ...style
  //       }
  //     default:
  // styles = {
  //   border: 'none',
  //   color: textColor !== undefined ? textColor : 'white',
  //   width: width !== undefined ? width : '300px',
  //   height: height !== undefined ? height : '50px',
  //   background: 'black',
  //   transition: '1s',
  //   ...generateVariantLight(),
  //   ...style,
  //   '&:hover': {
  //     background: 'white',
  //     cursor: 'pointer',
  //     boxShadow: '0px 10px 13px -7px #000000'
  //   }
  //       }
  //   }
  // } */

  /* // if (semantic) {
  //   switch (semantic) {
  //     case 'danger':
  //       styles = {
  //         ...generateVariantDark(),
  //         ...style
  //       }
  //     default:
  //       styles = {
  //         ...generateVariantDark(),
  //         ...style
  //       }
  //   }
  // } */

  return (
    <Btn
      className='btn1'
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
      textColor={textColor}
      width={width}
      height={height}
      generateVariantLight={generateVariantLight}
    >
      {children}
    </Btn>
  )
}

Button.propTypes = {
  variant: PropTypes.bool,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  theme: PropTypes.string
}

export default Button
