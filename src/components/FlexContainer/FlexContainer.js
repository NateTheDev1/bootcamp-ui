import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: ${(props) => {
    if (props.justify === 'none') {
      return props.justify
    } else {
      return props.justify
    }
  }};
  align-items: ${(props) => {
    if (props.align === 'none') {
      return props.align
    } else {
      return props.align
    }
  }};
  flex-direction: ${(props) => {
    if (props.direction === 'column') {
      return 'column'
    } else {
      return props.direction
    }
  }};
  max-width: ${(props) => {
    switch (props.size) {
      case 'xs':
        return '375px'
      case 'sm':
        return '850px'
      case 'md':
        return '1024px'
      case 'lg':
        return '1440px'
      case 'xl':
        return '1600px'
      default:
        return props.size
    }
  }};
`

/**
 *  Bootcamp-UI Flex Container
 */

const FlexContainer = ({
  align,
  justify,
  direction,
  size,
  children,
  style
}) => {
  return (
    <Div
      style={style}
      justify={justify}
      direction={direction}
      size={size}
      align={align}
    >
      {children}
    </Div>
  )
}

FlexContainer.propTypes = {
  /** CSS align-content */
  align: PropTypes.string,
  /** CSS align-content */
  justify: PropTypes.string,
  /** CSS justify-content */
  direction: PropTypes.string,
  /** Adjusts the max-width */
  size: PropTypes.string
}

FlexContainer.defaultProps = {
  align: 'none',
  justify: 'none',
  direction: 'row',
  size: 'md'
}

export default FlexContainer
