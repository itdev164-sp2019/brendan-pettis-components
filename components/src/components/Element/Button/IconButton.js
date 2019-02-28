import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
${props => props.theme.variants.iconButton[props.variant || 'primary']};
`
export const IconButton = styled(({ icon, ...props }) => {
  let clone = React.cloneElement(icon, ...props);
  return <StyledButton as={clone.type} {...props} className={props.className} />
})`

`

IconButton.defaultProps = {
  size: 24
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.string
}