import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import { TwitterShareButton, FacebookShareButton, MoreShareButton } from './index'

export const ShareButtonList = props => (
  <Flex flexDirection='column'>
    <FacebookShareButton {...props} />
    <TwitterShareButton {...props} />
    <MoreShareButton {...props} />
  </Flex>
)

ShareButtonList.propTypes = {
  addThisPubId: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  contentImage: PropTypes.string.isRequired,
  contentDescription: PropTypes.string.isRequired,
}
