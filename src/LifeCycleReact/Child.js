import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('contructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return null;
    }

    // shouldComponentUpdate(newProp, currentState) {
    //     console.log('shouldComponentUpdate child')
    //     return true
    // }
    timeout = {};

    render() {
        console.log('render child')
        return (
            <div>
                <div className="card mt-5 ml-5">
                    <h4 >id: {this.props.product.id}</h4>
                    <h4>name: {this.props.product.name}</h4>
                </div>
                <footer className="p-5 bg-dark text-white text-center">
                    Footer
                </footer>
            </div>
        )
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            console.log('1')
        }, 1000);
        console.log('componentDidMount child')
    }
    componentDidUpdate(prevProps, prevState) {
        //Hạn chế setState (xem xét kỹ việc setState) trong hàm này
        // => Dùng if để kiểm tra
        console.log('componentDidUpdate child')
    }


    componentWillUnmount() {
        //chạy trước khi component huỷ đi (mất khỏi giao diện)
        // => Dùng để huỷ các biến chạy ngầm hoặc xử lý chuyển trang
        clearInterval(this.timeout);
        console.log('componentWillUnmount')
    }
}
