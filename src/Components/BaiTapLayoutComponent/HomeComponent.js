import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className="bg-primary text-center text-white py-3"><HeaderComponent /></div>
                <div className="row">
                    <div className="col-4 px-0">
                        <NavigationComponent />
                    </div>
                    <div className="col-8 px-0">
                        <ContentComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
