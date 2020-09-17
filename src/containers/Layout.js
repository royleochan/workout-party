import React from 'react';
import Dashboard from './Dashboard/Dashboard'
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class CustomLayout extends React.Component {
    render() {
        console.log(!window.location.pathname === "/")
    return (
        <div>
        { window.location.pathname !== "/" 
                ?
        <Dashboard child={this.props.children}/>
            :
            this.props.children
        }
        </div>
    )
    }
}

export default CustomLayout;