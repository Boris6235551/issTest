import React, { Component } from "react"
import './css/load.css'

class Load extends Component {
    render() {
        return (
            <div className="skeleton">
                <div className="s-img"></div>
                <div className="s-line first"></div>
                <div className="s-line second"></div>
                <div className="s-line third"></div>
            </div>
        )
    }
};

export default Load;