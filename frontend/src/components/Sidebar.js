import React from 'react';
import './Sidebar.css';
import { GiFlamingClaw } from 'react-icons/gi';
import {AiOutlineSearch,AiFillPlusCircle,AiFillHome,AiFillStar,AiFillDelete,AiFillContainer} from 'react-icons/ai';

function Sidebar(){
    return(
        <>
            <div className='container'>
                <div className='logo'>
                    <a href='#'><GiFlamingClaw className='logo-item'/></a>
                </div>
                <div className='section'></div>
                <div className='content-wrapper'>
                    <div className='item'>
                        <a href='#'><AiOutlineSearch className='itemIco'/></a>
                    </div>
                    <div className='item'>
                        <a href='#'><AiFillPlusCircle className='itemIco' style={{color:'#B0EB9D'}}/></a>
                    </div>
                    <div className='section'></div>
                    <div className='item'>
                        <a href='#'><AiFillHome className='itemIco'/></a>
                    </div>
                    <div className='item'>
                        <a href='#'><AiFillStar className='itemIco'/></a>
                    </div>
                    <div className='item'>
                        <a href='#'><AiFillContainer className='itemIco'/></a>
                    </div>
                    <div className='section'></div>
                    <div className='item'>
                        <a href='#'><AiFillDelete className='itemIco' style={{color:'red'}}/></a>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Sidebar;