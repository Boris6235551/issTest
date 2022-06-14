import React, { Component } from "react"
import './css/header.css'
import Vector from './img/Vector.png'
import XMLID_792_ from './img/XMLID_792_.png'
import XMLID_795_ from './img/XMLID_795_.png'

class Header extends Component {
    render() {
        return (
            <div className="blockStyle">
             
                    <img src={Vector} />
            
                <div className="userStyle">
                    <div className="manStyle">
                        <img src={XMLID_792_} />
                        <img src={XMLID_795_} />
                    </div>
                    <div className="nameStyle">{this.props.name}</div>
                </div>
            </div>
        )
    }
};

export default Header;