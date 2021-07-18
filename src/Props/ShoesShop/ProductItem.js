import React, { Component } from 'react'

export default class ProductItem extends Component {



    render() {
        let {prd} =this.props;
        return (
                <div className="card">
                    <img src={prd.image} alt="..." />
                    <div className="card-body bg-dark text-white">
                        <h5 style={{height:"50px"}}>{prd.name}</h5>
                        <p>{prd.price}</p>
                        <button style={{backgroundColor:"#000",color:"#fff"}} className="btn p-2 mt-2">add to cart</button>
                    </div>

                </div>
        )
    }
}
