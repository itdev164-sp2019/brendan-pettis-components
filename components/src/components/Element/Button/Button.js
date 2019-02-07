import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
  padding: 8px;
  border: solid 1px ${props => props.variant === 'primary' ? 'black': 'blue'};
`
export const Button = props => <StyledButton {...props} />

Button.propTypes = {
  variant: PropTypes.string,
}