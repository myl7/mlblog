import React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'
import {GitHub as GitHubIcon, Home as HomeIcon, Mail as MailIcon, RssFeed as RssFeedIcon} from '@material-ui/icons'
import ExternalLink from './ExternalLink'
import RouterLink from './RouterLink'

export default () => {
  return (
    <AppBar position={'static'}>
      <Toolbar style={{paddingLeft: 12, paddingRight: 12}}>
        <IconButton component={RouterLink} to={'/'}>
          <HomeIcon color={'action'} />
        </IconButton>
        <Typography variant={'h6'} style={{flexGrow: 1}}>mlblog</Typography>
        <IconButton component={ExternalLink} href={'https://myl.moe/rss.xml'}>
          <RssFeedIcon color={'action'} />
        </IconButton>
        <IconButton component={ExternalLink} href={'mailto:myl.ustc@gmail.com'}>
          <MailIcon color={'action'} />
        </IconButton>
        <IconButton component={ExternalLink} href={'https://github.com/myl7'}>
          <GitHubIcon color={'action'} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}