import React, { useState } from 'react'
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

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = defaultState
//     }

//     cardClick = (key) => {
//         this.props.display([...this.props.data], key)
//     };

//     sortByIdClick = () => {
//         this.setState({
//             buttonIdcolor: { color: "rgba(82, 186, 0, 1)" },
//             arrowHeaderRotate: { transform: "rotate(0deg)" },
//             buttonHeadercolor: null,
//             stateSortByHeader: true,
//             arrowIdRotate: this.state.stateSortById ?
//                 { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" },
//             stateSortById: this.state.stateSortById ? false : true
//         })
//         this.props.sortById([...this.props.data], this.state.stateSortById)
//     };

//     sortByHeaderClick = () => {
//         this.setState({
//             buttonHeadercolor: { color: "rgba(82, 186, 0, 1)" },
//             arrowIdRotate: { transform: "rotate(0deg)" },
//             buttonIdcolor: null,
//             stateSortById: true,
//             arrowHeaderRotate: this.state.stateSortByHeader ?
//                 { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" },
//             stateSortByHeader: this.state.stateSortByHeader ? false : true
//         })
//         this.props.sortByHeader([...this.props.data], this.state.stateSortByHeader)
//     };

//     search = e => {
//         const value = e.currentTarget.value
//         console.log(value)
//         this.props.onFind(value)
//     }

//     resetFilter = () => {
//         this.setState(defaultState)
//         this.props.sortById([...this.props.data])
//     };

//     render() {
//         let load
//         if (this.props.data.length == 0) {
//             load = <Load />
//         }
//         const arr = this.props.data.map((element, key) => (
//             <div key={element.id} className="element">
//                 <div className="elementHeader">
//                     <div className="elementTitleIdBlock">
//                         <div className="elementTitle">
//                             {element.title}
//                         </div>
//                         <div className="elementId">
//                             {element.id}
//                         </div>
//                     </div>
//                     <div className="elementShowButton">
//                         <button onClick={() => this.cardClick(key)}>
//                         <Daw className="daw" style={{ transform: this.props.data[key].isClose ? "rotate(180deg)" : "rotate(0deg)" }} />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="elementBody" style={{ display: this.props.data[key].isClose ? "none" : null }}>
//                     {element.body}
//                 </div>
//             </div>
//         ))
//         return (

//             <div className="box">
//                 <input
//                     type={'text'}
//                     onChange={this.search}
//                     placeholder={'Поиск по теме'}
//                 />
//                 <div className="filterBlock">
//                     <div className="filter">
//                         <div className="arrowBlock">
//                             <button className="arrowButton" style={this.state.buttonIdcolor} onClick={() => this.sortByIdClick()}>Идентификатор</button>
//                             <Arrow className="arrow" style={this.state.arrowIdRotate} />
//                         </div>
//                         <div className="arrowBlock">
//                             <button className="arrowButton" style={this.state.buttonHeadercolor} onClick={() => this.sortByHeaderClick()}>Заголовок</button>
//                             <Arrow className="arrow" style={this.state.arrowHeaderRotate} />
//                         </div>
//                     </div>
//                     <button className="filterBlockButton" onClick={() => this.resetFilter()}>Сбросить фильтры</button>
//                 </div>
//                 <div className="elementBox">
//                     {/* <Suspense fallback={<Load />}> */}
//                     {arr}
//                     {load}
//                     {/* </Suspense> */}
//                 </div>
//             </div>
//         )
//     }
// }

// export default List


export default function List(props) {

    const [arrowIdRotate, setArrowIdRotate] = React.useState(null)
    const [arrowHeaderRotate, setArrowHeaderRotate] = React.useState(null)
    const [buttonIdcolor, setButtonIdcolor] = React.useState(null)
    const [buttonHeadercolor, setButtonHeadercolor] = React.useState(null)
    const [stateSortById, setStateSortById] = React.useState(true);
    const [stateSortByHeader, setStateSortByHeader] = React.useState(true);

    const cardClick = (key) => {
        props.display([...props.data], key)
    };

    const sortByIdClick = () => {
        setButtonIdcolor({ color: "rgba(82, 186, 0, 1)" })
        setArrowHeaderRotate({ transform: "rotate(0deg)" })
        setButtonHeadercolor(null)
        setStateSortByHeader(true)
        setArrowIdRotate(stateSortById ?
            { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" })
        setStateSortById(stateSortById ? false : true)
        props.sortById([...props.data], stateSortById)
    };

    const sortByHeaderClick = () => {
        setButtonHeadercolor({ color: "rgba(82, 186, 0, 1)" })
        setArrowIdRotate({ transform: "rotate(0deg)" })
        setButtonIdcolor(null)
        setStateSortById(true)
        setArrowHeaderRotate(stateSortByHeader ?
            { transform: "rotate(180deg)", fill: "rgba(82, 186, 0, 1)" } : { transform: "rotate(0deg)", fill: "rgba(82, 186, 0, 1)" })
        setStateSortByHeader(stateSortByHeader ? false : true)
        props.sortByHeader([...props.data], stateSortByHeader)
    };

    const search = e => {
        props.onFind(e.currentTarget.value)
    }

    const resetFilter = () => {
        setButtonIdcolor(null)
        setArrowHeaderRotate(null)
        setButtonHeadercolor(null)
        setStateSortByHeader(true)
        setArrowIdRotate(null)
        setStateSortById(true)
        props.sortById([...props.data])
    };

    const arr = props.data.map((element, key) => (
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
                    <button onClick={() => cardClick(key)}>
                        <Daw className="daw" style={{ transform: props.data[key].isClose ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </button>
                </div>
            </div>
            <div className="elementBody" style={{ display: props.data[key].isClose ? "none" : null }}>
                {element.body}
            </div>
        </div>
    ))
    return (
        <div className="box">
            <input
                type={'text'}
                onChange={search}
                placeholder={'Поиск по теме'}
            />
            <div className="filterBlock">
                <div className="filter">
                    <div className="arrowBlock">
                        <button className="arrowButton" style={buttonIdcolor} onClick={() => sortByIdClick()}>Идентификатор</button>
                        <Arrow className="arrow" style={arrowIdRotate} />
                    </div>
                    <div className="arrowBlock">
                        <button className="arrowButton" style={buttonHeadercolor} onClick={() => sortByHeaderClick()}>Заголовок</button>
                        <Arrow className="arrow" style={arrowHeaderRotate} />
                    </div>
                </div>
                <button className="filterBlockButton" onClick={() => resetFilter()}>Сбросить фильтры</button>
            </div>
            <div className="elementBox">
                {/* <Suspense fallback={<Load />}> */}
                {props.data.length == 0 ? <Load /> : arr}
                {/* </Suspense> */}
            </div>
        </div>
    )

}
