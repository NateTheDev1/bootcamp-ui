import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Item = styled.div`
  flex-grow: ${(props) => (props.grow === 'unset' ? 'unset' : props.grow)};
  flex-shrink: ${(props) =>
    props.shrink === 'unset' ? 'unset' : props.shrink};
`

const FlexItem = (
  { grow, shrink, basis, flex, order, align, justify, children, style },
  { ...rest }
) => {
  return (
    <Item
      {...rest}
      flex={flex}
      grow={grow}
      shrink={shrink}
      basis={basis}
      order={order}
      align={align}
      justify={justify}
      style={style}
    >
      {children}
    </Item>
  )
}

FlexItem.propTypes = {
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  flex: PropTypes.string,
  order: PropTypes.number,
  align: PropTypes.string,
  justify: PropTypes.string
}

FlexItem.defaultProps = {
  grow: 'unset',
  shrink: 'unset'
  //   basis: PropTypes.string,
  //   flex: PropTypes.string,
  //   order: PropTypes.number,
  //   align: PropTypes.string,
  //   justify: PropTypes.string
}

export default FlexItem
