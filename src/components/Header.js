import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">
                <Link to="/"><h3>Recipe App</h3></Link>
            </div>
        );
    }
}

export default Header;