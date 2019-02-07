import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

/* 
  Destructering Props, pulling out children and flex, then stuffing the rest in props.
  This is useful because we can now wrap the children in the Flex or Box components, and still 
  pass down the rest of the props.
*/
export const BaseContainer = ({ children, flex, ...props }) => {
  if(flex){
    return (
    <Flex {...props} className={props.className}>
      { children }
      </Flex>
      )
  }
  else {
    return (
    <Box {...props} className={props.className}>
      { children }
      </Box>
      )
  }
}

BaseContainer.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired,
}