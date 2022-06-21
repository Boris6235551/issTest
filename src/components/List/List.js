import React from 'react'
import { Suspense } from 'react'
import './css/list.css'
import { ReactComponent as Arrow } from './img/XMLID_29_.svg'
import { ReactComponent as Daw } from './img/Vector.svg'
import Load from '../Load/Load'

const defaultState = {
    arrowIdRotate: null,
    arrowHeaderRotate: null,
    buttonIdcolor: null,
    buttonHeadercolor: null,
    stateSortById: true,
    stateSortByHeader: true,
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState
    }

    cardClick = (key) => {
        this.props.display([...this.props.data], key)
    };

    sortByIdClick = () => {
        this.setState({
            buttonIdcolor: { color: "rgba(82, 186, 0, 1)" },
            arrowHeaderRotate: { transform: "rotate(0deg)" },
            buttonHeadercolor: null,
            stateSortByHeader: true,
            arrowIdRotate: this.state.stateSortById ?
                { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" },
            stateSortById: this.state.stateSortById ? false : true
        })
        this.props.sortById([...this.props.data], this.state.stateSortById)
    };

    sortByHeaderClick = () => {
        this.setState({
            buttonHeadercolor: { color: "rgba(82, 186, 0, 1)" },
            arrowIdRotate: { transform: "rotate(0deg)" },
            buttonIdcolor: null,
            stateSortById: true,
            arrowHeaderRotate: this.state.stateSortByHeader ?
                { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" },
            stateSortByHeader: this.state.stateSortByHeader ? false : true
        })
        this.props.sortByHeader([...this.props.data], this.state.stateSortByHeader)
    };

    search = e => {
        const value = e.currentTarget.value
        console.log(value)
        this.props.onFind(value)
    }

    resetFilter = () => {
        this.setState(defaultState)
        this.props.sortById([...this.props.data])
    };

    render() {
        let load
        if (this.props.data.length == 0) {
            load = <Load />
        }
        const arr = this.props.data.map((element, key) => (
            <div key={element.id} className="element">
                <div className="elementHeader">
                    <div className="elementTitleIdBlock">
                        <div className="elementTitle">
                            {element.title}
                        </div>
                        <div className="elementId">
                            {element.id}
                        </div>
                    </div>
                    <div className="elementShowButton">
                        <button onClick={() => this.cardClick(key)}>
                        <Daw className="daw" style={{ transform: this.props.data[key].isClose ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </button>
                    </div>
                </div>
                <div className="elementBody" style={{ display: this.props.data[key].isClose ? "none" : null }}>
                    {element.body}
                </div>
            </div>
        ))
        return (

            <div className="box">
                <input
                    type={'text'}
                    onChange={this.search}
                    placeholder={'Поиск по теме'}
                />
                <div className="filterBlock">
                    <div className="filter">
                        <div className="arrowBlock">
                            <button className="arrowButton" style={this.state.buttonIdcolor} onClick={() => this.sortByIdClick()}>Идентификатор</button>
                            <Arrow className="arrow" style={this.state.arrowIdRotate} />
                        </div>
                        <div className="arrowBlock">
                            <button className="arrowButton" style={this.state.buttonHeadercolor} onClick={() => this.sortByHeaderClick()}>Заголовок</button>
                            <Arrow className="arrow" style={this.state.arrowHeaderRotate} />
                        </div>
                    </div>
                    <button className="filterBlockButton" onClick={() => this.resetFilter()}>Сбросить фильтры</button>
                </div>
                <div className="elementBox">
                    {/* <Suspense fallback={<Load />}> */}
                    {arr}
                    {load}
                    {/* </Suspense> */}
                </div>
            </div>
        )
    }
}

export default List
