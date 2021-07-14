import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('alert');
    }

    showMessage = (mess) => {
        alert(`hello ${mess}`)
    }



    render() {

        let name = 'Thịnh';


        return (
            <div>
                <div className="container">
                    <h3>handle event</h3>

                    <button id="btn" onClick={this.handleClick}>Click me</button>
                    <button id="btn" onClick={(event) => {
                        // event.target.style.backgroundColor = 'red';
                        // alert(`${name} đẹp trai`)}
                        this.showMessage('Thinh');
                    }}>
                    Click me</button>
                </div>
            </div>
        )
    }
}
