import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycleReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            product: {
                id: 1,
                name: 'iphone'
            }
        }
        console.log('contructor')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(newProp, currentState) {
        console.log('shouldComponentUpdate')
        return true
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>LifeCycleReact</h3>
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-outline-success" onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <h3>Product name parent: {this.state.product.name}</h3>
                <button className="btn btn-outline-primary ml-3" onClick={() => {
                    let product = this.state.product;
                    product.name = 'Samsung galaxy note 20';
                    this.setState({
                        product: product
                    })
                }}>Change Product</button>
                {this.state.number > 2 ? '' : <Child product={this.state.product} />}

            </div>
        )
    }

    componentDidMount() {
        //Nghiệp vụ api 
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
}
