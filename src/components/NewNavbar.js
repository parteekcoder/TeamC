import React from 'react'
import './Newnavbar.css'
import './NewNav.js'
import logo from './Img/logo.png'
import Rect from './Img/rect.png'
function NewNavbar() {
    const handle=()=>{
        console.log("Hello World");
    }
  return (
    <>
    <header className="sticky top-0">
        {/* <!-- TOP NAV BAR --> */}
        <div id="top_bar" className="flex flex-row py-0.5 bg-color-1 text-white font-bold px-12 text-xs h-7">
            <div className="basis-1/2">
                <div className="flex flex-row justify-center">
                    <div className="items-center flex pr-8" href="">
                        <span className="material-symbols-outlined"> engineering </span>
                        <a href="" className="pl-1.5 text-sm">Jobs</a>
                    </div>
                    <div className="items-center flex pr-8" href="">
                        <span className="material-symbols-outlined"> add_business </span>
                        <a href="" className="pl-1.5 text-sm">Tenders</a>
                    </div>
                    <div className="items-center flex pr-8" href="">
                        <span className="material-symbols-outlined"> badge </span>
                        <a href="" className="pl-1.5 text-sm">Placements</a>
                    </div>
                    <div className="items-center flex pr-8" href="">
                        <span className="material-symbols-outlined"> event_note </span>
                        <a href="" className="pl-1.5 text-sm">Resources</a>
                    </div>
                    <div className="items-center flex" href="">
                        <span className="material-symbols-outlined"> psychology_alt </span>
                        <a href="" className="pl-1.5 text-sm">Help</a>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 pl-8">
                <div className="flex flex-row justify-center">
                    <div className="basis-1/3 items-center">
                        <span className="material-symbols-outlined"> public </span>
                        <span className="material-symbols-outlined"> public </span>
                        <span className="material-symbols-outlined"> public </span>
                    </div>
                    <div className="basis-1/3 flex items-center">
                        <span className="material-symbols-outlined"> g_translate </span>
                        <a href="" className="pl-1">हिन्दी / <span className="text-lg">A</span>+A-</a>
                    </div>
                    <div className="basis-1/3 flex items-center">
                        <span className="material-symbols-outlined"> contacts </span>
                        <a href="" className="pl-1.5 text-sm">ERP</a>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- INSTITUTE LOGO & NAME --> */}
        <div className="block">
            <div className="flex flex-row bg-color justify-between align-center py-2.5 px-16">
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-lg text-center max-w-lg">
                    <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                </div>
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-xl text-center max-w-lg px-16">
                    <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                </div>
            </div>
        </div>
        <div className="mySlides">
            <div className="flex flex-row bg-color justify-between align-center py-2.5 px-16">
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-xl text-center max-w-lg px-16">
                    <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                </div>
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-xl text-center max-w-lg px-8">
                    <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                </div>
            </div>
        </div>
        <div className="mySlides">
            <div className="flex flex-row bg-color justify-between align-center py-2.5 px-16">
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-xl text-center max-w-lg px-8">
                    <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                </div>
                <div
                    className="institute_name basis-1/2 flex justify-center uppercase font-bold text-lg text-center max-w-lg">
                    <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                </div>
            </div>
        </div>
        {/* <!-- IMAGE CONTAINER --> */}
        <div className="mx-auto absolute -translate-x-1/2 z-10 left-1/2" style={{width: "230px"}}>
            <img src={Rect} alt="" />
        </div>
        <div id="logo_250" className="absolute -translate-x-1/2 z-10 left-1/2 top-8" style={{width: "120px", height: "120px"}}>
            <img src={logo} alt="" />
        </div>

        {/* <!-- NAV BAR --> */}
        <div
            className="flex flex-row max-w-full bg-color-1 z-20 text-white font-bold text-xl justify-between h-10 drop-shadow-lg">
            <div className="basis-2/5">
                <div className="flex flex-row justify-between w-full px-10">
                    <div className="group cursor-default">
                        <div className="main-nav-hover p-1">Administration</div>
                        <div id="drop-down"
                            className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm">
                            <div id="col"
                                className="flex flex-col gap-5 hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        ABOUT US
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Vision, Mission & Quality Policy
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Virtual tour
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Institute History
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Explore NITJ
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            NITJ Rankings & Awards
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Institute Prospectus Location
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        LEADERSHIP
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Organisational Chart
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Chariperson
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Director
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Registrar
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Academic administration
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Student Welfare
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Faculty Welfare
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Planning and Development
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Research and Consultancy
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            International Affairs
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Hostel administration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        GOVERNING BODIES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            NIT council
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Board of Governors
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Senate
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Standing committee of the senate
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Finance committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Building and works committee
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        CELLS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            E-Cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Equal opportunities and
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            SC/ST/OBC/PWD cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Rajbhasha cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            RTI Cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Student grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Faculty grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Staff grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Public grievences
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Women cell
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        COMMITTEES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Institute Development Committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Internal complaint committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Print, Digital Media and Newsletter
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Social Media
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Website Development and Management
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group cursor-default relative">
                        <div className="main-nav-hover p-1">Academics</div>
                        <div id="drop-down"
                            className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm left-1/2 -translate-x-1/4">
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        DEPARTMENTS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Biotechnology
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Chemistry
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Chemical Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Civil Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Computer Science and Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Electronics and Communication Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Electrical Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Humanities and Management
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Industrial and Production Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Information Technology
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Instrumentation and Control Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Mathematics
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Mechanical Engineering
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Physics
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Textile Technology
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        CENTERS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Center for Energy and Environment
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Center for Artificial Intelligence
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Center for Continuing Education
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        ACADEMIC SYSTEM
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Academic circulars & Notices
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Academic calender
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Academic regulations
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Curriculum
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Fee structure
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            System of Evaluation and Grant of divsion
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Standard Operationg Procedures (SOP)
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            UMC rules
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            General FAQs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        ACADEMIC SERVICES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Student Portal LOGIN
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Grade sheets
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Timetable
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Upcoming examination schedules
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Results
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Online application for Transcripts and certificates
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Online application for Verification of Degree
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            CGPA Criteria and Medium of Education
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Other Proformas
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Contact details
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        ACADEMIC FACILITIES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Central Library
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Computer Center
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Central Workshop
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Institute Instrumentation center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        PROGRAMMERS OF STUDY
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Bachelor of Technology
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Master of Technology
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Master of Business Administration
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Master of Science
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Post Graduate Diploma
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Doctor of Philosophy
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        CONVOCATION
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Convocation 2022
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Past convocations
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        OTHER LINKS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            UGC Act- Rules and Regulations
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            NIT Act and Statutes
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Ministry of Education Notifications
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            National Education Policy 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group cursor-default relative">
                        <div className="main-nav-hover p-1">Life at NITJ</div>
                        <div id="drop-down"
                            className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm left-1/2 -translate-x-1/3">
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        CLUB & SOCITITES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Vision, Mission & Quality Policy
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Heartfulness Mediation club
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Prayaas - A campaign for smile
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            R-Tist Robotics Club
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            SPIC MACAY
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            “We Can” Club
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Yoga club
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold flex justify-between">
                                            Zeal Society
                                            <div>View all</div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        SCHOLARSHIPS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Dr. Pratap Singh Memorial Scholarhsip
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            MCM Scholarship
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Post Matric Scholarship
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Siemens India Scholarship
                                        </li>
                                        <br />
                                        <li className="hover:text-orange-500 hover:font-bold font-semibold">
                                            View all
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        LEADERSHIP
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Organisational Chart
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Chariperson
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Director
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Registrar
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Academic administration
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Student Welfare
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Faculty Welfare
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Planning and Development
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Research and Consultancy
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            International Affairs
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Hostel administration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        GOVERNING BODIES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            NIT council
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Board of Governors
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Senate
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Standing committee of the senate
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Finance committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Building and works committee
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="col"
                                className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        CELLS
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            E-Cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Equal opportunities and
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            SC/ST/OBC/PWD cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Rajbhasha cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            RTI Cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Student grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Faculty grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Staff grievences cell
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Public grievences
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Women cell
                                        </li>
                                    </ul>
                                </div>
                                <div id="block">
                                    <div id="head"
                                        className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                        COMMITTEES
                                    </div>
                                    <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Institute Development Committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Internal complaint committee
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Print, Digital Media and Newsletter
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Social Media
                                        </li>
                                        <li className="hover:text-orange-500 hover:font-semibold">
                                            Website Development and Management
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/5">
                <div className="flex flex-row justify-between w-full">
                    <div className="basis-4/5">
                        <div className="flex flex-row justify-between">
                            <div className="group cursor-default relative">
                                <div className="main-nav-hover p-1">Research</div>
                                <div id="drop-down"
                                    className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm left-1/2 -translate-x-1/2">
                                    <div id="col"
                                        className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                RESEARCH @ NITJ
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    VIDWAN (IRINS Instance)
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Research Publications
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Research Jobs
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Internships
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Sponsored Research Projects
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                INCUBATION @ NITJ
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    STI Hub
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    E-Cell
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Innovation club
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Institute Innovation council
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Technology Business Incubator
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                CONSULTANCY @ NITJ
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Consultancy works
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    MoUs
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    IPRs
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Find an expert
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Central Research facilities
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                UPCOMING EVENTS
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Conferences
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Seminars
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    STC/ FDP
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Workshops
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group cursor-default relative">
                                <div className="main-nav-hover p-1">Alumni</div>
                                <div id="drop-down"
                                    className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm left-1/2 -translate-x-1/2">
                                    <div id="col"
                                        className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                        <div id="block">
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2 py-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Alumni portal
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Alumni Registration
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Chapters
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Donation statistics and reports
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    GIve back
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Impact
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <ul className="font-normal flex gap-1 flex-col md:font-bold text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Alumni affairs contact details
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group cursor-default relative">
                                <div className="main-nav-hover p-1">Admissions</div>
                                <div id="drop-down"
                                    className="absolute gap-5 bg-white hidden mt-0.5 p-5 shadow-sm group-hover:flex text-sm right-0">
                                    <div id="col"
                                        className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                PROSPECTIVE STUDENTS
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Why NITJ?
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Explore NITJ
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Discover Student Life
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Courses Offered
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    How to Apply
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Admissions Process
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Virtual tour
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    International Students
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <ul className="font-normal flex gap-1 flex-col md:font-bold text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Contact details for admission
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                ANTI RAGGING
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Anti ragging act
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Anti ragging affadvit
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Institute Anti-ragging rules
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex flex-col gap-5 min-w-max hover:border-orange-500 hover:border-2 hover:rounded-b-xl">
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                JOIN NITJ
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    B.Tech Admission
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    M.Tech Admission
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Msc Admission
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    MBA Admission
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Ph.D Admission
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head"
                                                className="bg-color-1 hover:bg-orange-500 py-2 mb-3 capitalize text-center">
                                                &ThinSpace; INSTITUTE PROSPECTUS &ThinSpace;
                                            </div>
                                            <ul className="font-normal flex gap-1 flex-col text-black px-2">
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    B.Tech
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    M.Tech
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Msc
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    MBA
                                                </li>
                                                <li className="hover:text-orange-500 hover:font-semibold">
                                                    Ph.D
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 flex flex-row justify-center">
                        <button type="button"
                            className="material-symbols-outlined hover:rounded-full hover:w-10 hover:h-10 hover:box-border hover:border-2 hover:border-white cursor-pointer text-center transition duration-50 ease-in-out"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search"
                            onClick={handle}>
                            search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default NewNavbar