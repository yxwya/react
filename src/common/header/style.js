import styled from 'styled-components'
import logoPic from '../../static/images/logo.png';
export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href:'/'
})`
    height:56px;
    position:absolute;
    top:0;
    left:0;
    width:100px;
    display:block;
    background:url(${logoPic});
    background-size: contain;

`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`
export const NavItem = styled.div`
    line-height:56px; 
    padding:0 15px;
    font-size:17px;
    cursor: pointer;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    padding: 0 20px;
    width:160px;
    height:35px;
    border:none;
    margin-top:10px;
    margin-left:20px;
    box-sizing:border-box;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    font-size:14px;
    &::placeholder{
        color:#969696;
    }
`