import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';


const CardItem = ({style, card, onSaveClick}) => (
    <Card style={style}>
        <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <Divider />
        <CardActions>
            <FlatButton label="Guardar" icon={<FavoriteBorderIcon />} onClick={() => onSaveClick(card)}/>
            <IconMenu
                style={{float: 'right'}}
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Send feedback"/>
                <MenuItem primaryText="Settings"/>
                <MenuItem primaryText="Help"/>
                <MenuItem primaryText="Sign out"/>
            </IconMenu>
        </CardActions>
    </Card>
);

const mapStateToProps = () => {return {}};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveClick: (card) => {
            dispatch({type: 'INC_PENDING'})
        }
    }
};

const CardItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardItem);

export default CardItemContainer;
