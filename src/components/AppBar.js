import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import translator from '../util/translator';

const MAppBar = () => (
    <AppBar
        title={translator.t('hola')}
        showMenuIconButton={false}
        iconElementRight={
        <div>
                <Badge
                  badgeContent={10}
                  primary={true}
                  badgeStyle={{top: 12, right: 12}}
                  style={{paddingTop: 10}}
                >
                <IconButton><NotificationsIcon /></IconButton>
                </Badge>

          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
          </IconMenu>
      </div>
    }
    />
);

export default MAppBar;