import React from 'react';
import AppBar from './AppBar';
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                cards: this.props.cards
            })
        );
        return (
            <div>
                <AppBar pendingNotifications={this.props.pendingNotifications}/>
                {childrenWithProps}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pendingNotifications: state.pendingNotifications,
        cards: state.cards
    }
};

export default connect(mapStateToProps)(App);
