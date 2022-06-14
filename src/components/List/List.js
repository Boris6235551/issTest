import React from 'react'
import './css/list.css'
import XMLID_29_ from './img/XMLID_29_.svg'

let green;

class List extends React.Component {

    state = { stateSortById: true, stateSortByHeader: true }

    cardClick = (key) => {
        this.props.display([...this.props.data], key)
    };

    sortByIdClick = () => {
        green = { color: 'rgba(82, 186, 0, 1)' }
        this.props.sortById([...this.props.data], this.state.stateSortById)
        this.state.stateSortById = this.state.stateSortById ? false : true
    };

    sortByHeaderClick = () => {
        green = { color: 'rgba(82, 186, 0, 1)' }
        this.props.sortByHeader([...this.props.data], this.state.stateSortByHeader)
        this.state.stateSortByHeader = this.state.stateSortByHeader ? false : true
    };

    render() {
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
                            <svg style={this.props.data[key].isClose ? { transform: 'rotate(90deg)' } : { transform: 'rotate(270deg)' }}
                                className="switch" viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="elementBody" style={this.props.data[key].isClose ? { display: 'none' } : null}>
                    {element.body}
                </div>
            </div>
        ))
        return (
            <div className="box">
                <input
                    placeholder={'Поиск по теме'}
                />
                <div className="filterBlock">
                    <div className="filter">
                        <button style={green} onClick={() => this.sortByIdClick()}>Идентификатор</button>
                        <object className="string" type="image/svg+xml" data={XMLID_29_} width="20" height="20" >
                        </object>
                        <button style={green} onClick={() => this.sortByHeaderClick()}>Заголовок</button>
                        <div>&#8595;</div>
                    </div>
                    <button className="filterBlockButton">Сбросить фильтры</button>
                </div>
                <div className="elementBox">
                    {arr}
                </div>
            </div>
        )
    }
}

export default List
