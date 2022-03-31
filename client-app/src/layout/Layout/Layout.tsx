import React from 'react';
import './Layout.css';

interface Props{
    children: React.ReactNode
}

export default function Layout({ children }: Props){
    return(
        <div className='Container'>
            { children }
        </div>
    )
}