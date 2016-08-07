import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import translator from '../util/translator';
import {Link} from 'react-router'

const MAppBar = ({pendingNotifications}) => (
    <AppBar
        title={translator.t('hola')}
        showMenuIconButton={false}
        iconElementRight={
            <div>
                <Badge
                    badgeContent={pendingNotifications}
                    primary={true}
                    badgeStyle={{top: 12, right: 12}}
                    style={{paddingTop: 10, marginTop: -30}}
                >
                    <IconButton containerElement={<Link to="/push"/>}><NotificationsIcon /></IconButton>
                </Badge>


                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Preferencias" containerElement={<Link to="/prefs"/>}/>
                    <MenuItem primaryText="Inicio" containerElement={<Link to="/"/>}/>
                </IconMenu>
            </div>
        }
    />
);

export default MAppBar;