import { Component } from "react"
import React from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch
} from './style'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载</NavItem>
                        <NavItem className='right'>登陆</NavItem>
                        <NavItem className='right'>Aa</NavItem>
                        <NavSearch></NavSearch>
                    </Nav>
                </HeaderWrapper>
            </div>
        )
    }
}
export default Header