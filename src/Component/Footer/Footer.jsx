import React from 'react';
import zocket from '../../images/zl.PNG';
import send  from '../../images/Vector.png';
import {FaInstagram,AiOutlineTwitter,AiFillYoutube} from 'react-icons/all';
import './Footer.css';

export default function Footer() {
    return (
        <div className="w-full flex jusify-between items-center mx-auto mb-6">
            <div className="flex jusify-between items-start mx-auto" style={{width:'75%'}}>
                <div className="w-full flex flex-col justify-start items-start">
                    <img src={zocket} alt="zocket-logo" width="180" className="mb-10" />
                    <div>
                        <p className="mb-3 font-medium" style={{color: '#606062'}}>Copyright © 2021 Zocket.</p>
                        <p className="mb-8 font-medium" style={{color: '#606062'}}>All rights reserved</p>
                    </div>
                    <div className="flex">
                        <div className="relative">
                            <label className="flex justify-center items-center w-10 h-10 rounded-full mr-4" style={{background: '#0F6EFF', opacity: '0.1'}}></label>
                            <FaInstagram size={22} fill="#0F6EFF" className="absolute" style={{top:'9px', left:'9px'}} />
                        </div>
                        <div className="relative">
                            <label className="flex justify-center items-center w-10 h-10 rounded-full mr-4" style={{background: '#0F6EFF', opacity: '0.1'}}></label>
                            <AiOutlineTwitter size={22} fill="#0F6EFF" className="absolute" style={{top:'9px', left:'9px'}} />
                        </div>
                        <div className="relative">
                            <label className="flex justify-center items-center w-10 h-10 rounded-full mr-4" style={{background: '#0F6EFF', opacity: '0.1'}}></label>
                            <AiFillYoutube size={22} fill="#0F6EFF" className="absolute" style={{top:'9px', left:'9px'}} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-start">
                    <div className="flex flex-col mr-20">
                        <h6 className="text-xl font-medium poppins mb-6">Company</h6>
                        <ul>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>About us</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Blog</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Contact us</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Pricing</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Testimonial</li>
                        </ul>
                    </div>
                    <div className="flex flex-col mr-14">
                        <h6 className="text-xl font-medium poppins mb-6">Support</h6>
                        <ul className="">
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Help center</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Terms of service</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Legal</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Privacy policy</li>
                            <li className="mb-3 roboto" style={{color: '#606062'}}>Status</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl font-bold mb-8" style={{color:'#0F6EFF'}}>Get Early Access</h6>
                        <div className="relative flex justify-center items-center">
                            <input type="text" placeholder="Your email address" className="w-58 h-9 px-4 py-3 rounded-xl footer-input outline-none text-sm" />
                            <button><img src={send} alt="send" className="absolute cursor-pointer" style={{top:'9px',right:'16px'}} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
