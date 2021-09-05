import React from 'react';
// import zocket from '../../images/Zocket-logo 1.png';
import zocket from '../../images/zocket-logo.PNG';
import './Header.css';

export default function Header() {
    return (
        <div>
            <nav className="h-20 flex justify-around items-center">
                <div>
                    <img src={zocket} alt="zocket-logo" width="200" />
                </div>
                <div>
                    <ul className="flex justify-end items-center text-black list">
                        <li className="text-sm font-medium mx-6">Services</li>
                        <li className="text-sm font-medium mx-6">Why Us</li>
                        <li className="text-sm font-medium mx-6">About</li>
                        <li className="text-sm font-medium mx-6">Pricing</li>
                        <li className="text-sm font-medium mx-6">Contest</li>
                        <button className="w-36 h-10 flex justify-center items-center rounded-lg access-btn text-white text-sm">Get Early Access</button>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}
