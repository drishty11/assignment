import React, { useState, useEffect } from 'react';
// import firstPic from '../../images/first.PNG';
import firstPic from '../../images/first-img.PNG';
// import main from '../../images/Main.png';
import ellipse53 from '../../images/Ellipse 53.png';
import ellipse55 from '../../images/Ellipse 55.png';
import ellipse57 from '../../images/Ellipse 57.png';
import polygon from '../../images/Polygon 2.png';
import polygon2 from '../../images/Polygon 2.png';
import polygon3 from '../../images/Polygon 2.png';
import polygon4 from '../../images/Polygon 2.png';
import insta from '../../images/instagram (1).png';
// import third1 from '../../images/third-1.PNG';
// import third2 from '../../images/third-2.PNG';
// import third3 from '../../images/third-3.PNG';
import vector1 from '../../images/Vector 1.png';
import vector2 from '../../images/Vector 2.png';
import sideimg from '../../images/“.png';
import background from '../../images/BG.png';
import third1 from '../../images/third-1-img.PNG';
import third2 from '../../images/third-2-img.PNG';
import third3 from '../../images/third-3-img.PNG';
import user from '../../images/Person Image.png';
import illustration from '../../images/Illustration.png';
import {SiFacebook,FcGoogle,HiOutlineArrowNarrowRight} from 'react-icons/all';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { send } from 'emailjs-com';
import Axios from 'axios';
import './Zocket.css';

export default function Zocket() {

    const [email, setEmail] = useState('');

    useEffect(() => {
        Axios.post('http://localhost:8080/api/get').then((response) => {
            console.log(response.data);
            
        })
    }, []);

    const submitEmail = () => {
        Axios.post('http://localhost:8080/api/insert', {
            email: email,
        }).then((err) => {
            // alert('successfully insert');
            console.log(err)
        })
    }


    return (
        <div className="flex flex-col">
            <Header />
            <div className="w-full flex justify-center items-end pb-32 relative first-container">
                <div className="flex justify-center items-end mx-auto" style={{width:'75%'}}>
                    <div className="flex flex-col" style={{width:'75%'}}>
                        <h1 className="text-7xl font-semibold mb-5 tracking-wider poppins">FACEBOOK ADS IN 30 SECONDS</h1>
                        <p className="text-2xl first-text mb-10" style={{width:'85%'}}>Create stunning ad copy incredibly fast and skyrocket your digital business.</p>
                        <form className="flex" method="POST">
                            {/* <h1 className="hidden" onChange={() => setId(id + 1)}>{id}</h1> */}
                            <input type="text" name="email" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} className="w-80 h-12 flex items-start justify-start input px-5 py-3 text-xs outline-none" />
                            <button type="button" className="w-44 early-access text-white px-3 py-2 text-md" onClick={submitEmail}>Get Early Access</button>
                        </form>
                    </div>
                    <div className="flex flex-2">
                        <img src={firstPic} alt="first" />
                    </div>
                    <img className="absolute ellipse53" src={ellipse53} alt="ellipse53" />
                    <img className="absolute ellipse55" src={ellipse55} alt="ellipse55" />
                    <img className="absolute ellipse57" src={ellipse57} alt="ellipse57" />
                    <img className="absolute polygon" src={polygon} alt="ellipse57" />
                    <img className="absolute polygon2" src={polygon2} alt="ellipse57" />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-20 pb-48 second-container">
                <h2 className="text-5xl font-semibold poppins mb-16">Tailor-made Services</h2>
                <div className="h-62 flex justify-center items-end mx-auto">
                    <div className="w-96 h-full flex flex-col p-8 mr-6" style={{boxShadow: '0px 10px 20px rgba(41, 41, 42, 0.07)'}}>
                        <SiFacebook size={36} className="mb-12" />
                        <h3 className="text-2xl font-black poppins mb-4">Facebook Ads</h3>
                        <p className="text-md font-normal roboto mb-8 leading-8">With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads.</p>
                        <div className="flex justify-start items-center">
                            <p className="text-sm font-extrabold mr-2 poppins" style={{color: '#0F6EFF'}}>Explore</p>
                            <HiOutlineArrowNarrowRight size={26} className="font-medium" style={{color:'#0F6EFF'}} />
                        </div>
                    </div>
                    <div className="w-96 h-full flex flex-col p-8 mr-6" style={{boxShadow: '0px 10px 20px rgba(41, 41, 42, 0.07)'}}>
                        <FcGoogle size={36} className="mb-12" />
                        <h3 className="text-2xl font-black poppins mb-4">Google Ads</h3>
                        <p className="text-md font-normal roboto mb-8 leading-8">We offer industry research paired with PPC monitoring and A/B testing to ensure you get an improved ROI.</p>
                        <div className="flex justify-start items-center">
                            <p className="text-sm font-extrabold mr-2 poppins" style={{color: '#0F6EFF'}}>Explore</p>
                            <HiOutlineArrowNarrowRight size={26} className="font-medium" style={{color:'#0F6EFF'}} />
                        </div>
                    </div>
                    <div className="w-96 h-full flex flex-col p-8" style={{boxShadow: '0px 10px 20px rgba(41, 41, 42, 0.07)'}}>
                        <img src={insta} alt="insta" width="30" className="mb-12" />
                        <h3 className="text-2xl font-black poppins mb-4">Instagram Ads</h3>
                        <p className="text-md font-normal roboto mb-8 leading-8">Right from design & content strategy to profile management and everything in between, we’ve got you covered.</p>
                        <div className="flex justify-start items-center">
                            <p className="text-sm font-extrabold mr-2 poppins" style={{color: '#0F6EFF'}}>Explore</p>
                            <HiOutlineArrowNarrowRight size={26} className="font-medium" style={{color:'#0F6EFF'}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-8 pb-44 third-container">
                <h2 className="text-5xl font-semibold poppins mb-16">Why Us</h2>
                <div className="flex justify-center items-end mb-32" style={{width:'75%'}}>
                   <img src={third1} alt="third1" width="580" className="mr-4" />
                    <div>
                        <h2 className="font-semibold poppins mb-16" style={{fontSize: '42px'}}>Localised Ad Campaigns</h2>
                        <p className="text-lg font-normal roboto mb-8 leading-8">With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, 
                            geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll 
                            leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting 
                            customer relationships locally.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-end mb-32" style={{width:'75%'}}>
                    <div>
                        <h2 className="font-semibold poppins mb-10" style={{fontSize: '40px'}}>Get More Calls and Enquiries</h2>
                        <p className="text-lg font-normal roboto mb-8 leading-8">When you use Zocket, you can expect calls pouring in with enquiries about your business. Our exceptional outreach 
                           strategies and business profile optimization techniques will catch the eye of prospects. With organic leads taken
                           care of by Zoket, all you’d have to worry about is converting your leads to customers.
                        </p>
                    </div>
                    <img src={third2} alt="third2" width="500" className="ml-10" />
                </div>
                <div className="flex justify-center items-end" style={{width:'75%'}}>
                    <img src={third3} alt="third3" width="550" className="mr-16" />
                    <div>
                        <h2 className="font-semibold poppins mb-10" style={{fontSize: '40px'}}>No Expertise Required</h2>
                        <p className="text-lg font-normal roboto mb-8 leading-8">Zocket is completely beginner friendly and doesn’t require any previous marketing expertise to use. Built with an aim 
                            to make marketing easier for small businesses, Zocket is powered by AI and will provide done-for-you content while you 
                            can take care of other important things in your business. With easy-to-follow guides, it doesn’t get better than this.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-8 pb-52 fourth-container">
                <h2 className="text-5xl font-semibold poppins mb-16">Hear It From Them</h2>
                <div className="flex">
                    <div className="h-full flex flex-col mr-6">
                        <div className="flex flex-col p-12 bubble1">
                            <h6 className="text-xl font-medium poppins mb-4">Incredibly Amazing!</h6>
                            <p className="text-sm roboto mb-6 leading-6">Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level
                                and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business,
                                Zocket is your go-to site!
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <img src={user} alt="user" className="rounded-full mr-4" />
                            <div>
                                <p className="text-xl font-bold poppins mb-1">Ella May</p>
                                <p className="text-sm font-medium poppins mb-1">Digital Marketer</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col mr-6 relative">
                        <div className="flex flex-col p-12 bubble2">
                            <h6 className="text-xl font-medium poppins mb-4">Remarkable Growth</h6>
                            <p className="text-sm roboto mb-6 leading-6">Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every 
                                feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to
                                up their game.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 sideimg">
                            <img src={sideimg} alt="sideimg" />
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <img src={user} alt="user" className="rounded-full mr-4" />
                            <div>
                                <p className="text-xl font-bold poppins mb-1">Julie Murphy</p>
                                <p className="text-sm font-medium poppins mb-1">Sales Representative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mb-36">
                <div className=" flex mx-auto justify-center items-center">
                    <img src={background} alt="background" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={vector1} alt="vector1"  />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={vector2} alt="vector2" />
                </div>
                <div className="flex justify-center items-center absolute" style={{top:'45px', left:'370px', width:'60%'}}>
                    <img src={illustration} alt="illustration" />
                    <div className="flex flex-col ml-20">
                        <h2 className="text-5xl font-semibold text-white poppins mb-10" style={{width:'90%'}}>Be one of the first to know when we launch!</h2>
                        <div className="flex">
                            <input type="text" placeholder="Your email address" className="w-72 h-12 flex items-start justify-start input px-5 py-3 text-md outline-none" />
                            <button className="w-44 early-access text-white px-3 py-2 text-md" style={{background: '#0A286B'}}>Get Early Access</button>
                        </div>
                    </div>
                </div>
                <img className="absolute fourthcontainer-ellipse53" src={ellipse53} alt="ellipse53" />
                <img className="absolute fourthcontainer-ellipse55" src={ellipse55} alt="ellipse55" />
                <img className="absolute fourthcontainer-ellipse57" src={ellipse57} alt="ellipse57" />
                <img className="absolute fourthcontainer-polygon" src={polygon} alt="ellipse57" />
                <img className="absolute fourthcontainer-polygon2" src={polygon2} alt="ellipse57" />
                <img className="absolute fourthcontainer-polygon3" src={polygon3} alt="ellipse57" />
                <img className="absolute fourthcontainer-polygon4" src={polygon4} alt="ellipse57" />

            </div>
            <hr className="line mb-10" />
            <Footer />
        </div>
    )
}
