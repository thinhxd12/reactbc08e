import React, { Component } from 'react'
import style from './StyleComponent.module.css'

export default class StyleComponent extends Component {



    render() {

        let fontSize = 20;

        return (
            <div>
                <h3>Style Component</h3>
                <p style={{
                    fontSize: `${fontSize}px`,
                    padding: '10px',
                    paddingTop: '20px'
                }}
                    className={`${style.fontBold} ${style['p-green']}`}>Hello</p>
            </div>
        )
    }
}
