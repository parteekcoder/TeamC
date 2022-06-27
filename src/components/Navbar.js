import React, { useEffect, useRef, useState } from 'react'
import logo from './Img/logo.png'
import comp from './Vedio/comp.mp4'
import Hambur from './Img/menu.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Clock from './Clock'
function Navbar() {
    const [open, setOpen] = useState(false);
    const [openabout, setOpenabout] = useState(false)
    const [openreasearch, setOpenreasearch] = useState(false)
    const [openpupil, setOpenpupil] = useState(false);
    const [openacad, setOpenacad] = useState(false);
    const [opencheck, setOpencheck] = useState(false)
    const [width, setWidth] = useState(getWindowSize());
    const [offtop, setOfftop] = useState(false)
    const myref = useRef();
    const getListsize = () => {
        setWidth(getWindowSize);
    }
    const Handlescroll = () => {
        let offtop1 = myref.current.getBoundingClientRect().top;
        // console.log(offtop1)
        if(offtop1 <= -94){
            if(!offtop)
            setOfftop(true);
        }else{
            setOfftop(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', Handlescroll);
        window.addEventListener('resize', getListsize);
        return () => {
            window.removeEventListener('resize', getListsize);
        };
    }, []);
    return (
        <>
            <div className='flex flex-col h-auto w-full' ref={myref}>
                <div className='h-24 p-2 py-4 flex bg-gray-900 text-white w-full items-center justify-between navsize bg-opacity-90'>
                    <div className='flex items-center my-2  logocon'>
                        <div className='block xsw-full'>
                            <img src={logo} className='h-20 float-left' alt='' />
                        </div>
                        <div className='mx-2'>
                            <div className='font-semibold'>
                                Department of Computer Science and Engineering
                            </div>
                            <div>Dr. B.R. Ambedkar</div>
                            <div>National Institute of Technology Jalandhar</div>
                        </div>
                    </div>
                    <Tippy content={<span className=' '>Background image scroller(automatic)</span>} placement='bottom'>
                        <div className='md:flex hidden justify-center items-center p-1 w-6 h-6 bg-blue-600 rounded-full display'>
                            <input type='checkbox' id='time' onClick={() => { setOpencheck(!opencheck) }} className='h-6 w-6 rounded-full' />
                        </div>
                    </Tippy>
                    <div className='hidden md:block'><Clock /></div>
                </div>
                <div className='flex justify-between items-center bg-gray-900 bg-opacity-90'>
                    <button className='p-3  flex items-center md:hidden' onClick={() => { setOpen(!open) }} >
                        <img src={Hambur} alt="..." className='h-8 w-8 m-1 mx-2 p-1 rounded-lg hover:border' />
                    </button>
                    <Tippy content={<span className=' '>Background image scroller(automatic)</span>} placement='bottom'>
                        <div className='flex md:hidden justify-center items-center p-1 w-6 h-6 bg-blue-600 rounded-full display'>
                            <input type='checkbox' id='time' onClick={() => { setOpencheck(!opencheck) }} className='h-6 w-6 rounded-full' />
                        </div>
                    </Tippy>
                    <div className='block md:hidden m-2'><Clock /></div>
                </div>
                <div className='flex-col bg-gray-900 text-white bg-opacity-95 md:flex w-full justify-center md:items-center md:flex-row md:h-16' style={open ? {display:"flex"} : (width < 768 ? { display: "none" } : ( offtop ? { dispay: "flex", position: "fixed", height:"4rem", opacity: "1" } : { display: "flex" }))}>
                    <div className='group   shadow-sm p-2 m-0 md:border-none'><a href='/' className='my-2 mx-4 font-medium hover:text-blue-600'>Home</a></div>
                    <div className='group   shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer' onClick={() => { setOpenabout(!openabout) }}>About us</span>
                        <div className='absolute right-1/4 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900   float-right md:group-hover:block' style={width < 768 ? openabout ? { display: "block" } : { dispay: "none" } : null}>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Vision and Missions</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Infrastructure: At a glance</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>HODs Message</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Achievements</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Contact us</a></div>
                        </div>
                    </div>
                    <div className='group   shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer' onClick={() => { setOpenacad(!openacad) }}>Academics</span>
                        <div className='absolute right-[15%] md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900   md:group-hover:block' style={width < 768 ? openacad ? { display: "block" } : { dispay: "none" } : null}>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Programmes</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Academic Coordinates</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Syllabus</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Time-Tables</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Department Activities Calendar</a></div>
                        </div>
                    </div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer' onClick={() => setOpenpupil(!openpupil)}>People</span>
                        <div className='absolute right-1/2 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900   md:group-hover:block' style={width < 768 ? openpupil ? { display: "block" } : { dispay: "none" } : null}>
                            <div><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Faculty</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>PhD Scholars</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-fullfont-medium hover:bg-neutral-600'>Students</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>Alumni*</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>Staff</a></div>
                        </div>
                    </div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer' onClick={() => setOpenreasearch(!openreasearch)}>Research and Labs</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-500   md:group-hover:grid grid-cols-3  md:group-hover:grid-cols-2 lg:group-hover:grid-cols-3' style={width < 768 ? openreasearch ? { display: "grid" } : { dispay: "none" } : null}>
                            <div className='block w-auto flex-initial m-2 rounded hover:text-blue-700'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center '>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Research Areas</span>
                                            <video src={comp} autoPlay loop muted className='vedio rounded-md' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center items-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Department Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title flex-col rounded-md'><div>Publications</div><div>(Year-wise)</div></span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Projects</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Consultancy</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Research Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <Imagesroll opencheck={opencheck} /> */}
            </div>
        </>
    )
}

export default Navbar

function getWindowSize() {
    const innerwidth = window.innerWidth;
    return innerwidth;
}