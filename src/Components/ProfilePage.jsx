import React, {useState, useEffect} from 'react'
import './ProfilePage.css'
import profilePic from '../images/profile5.jpg'
import html from '../images/html5.png'
import css from '../images/css3.png'
import javascript from '../images/javascript.png'
import nodeJS from '../images/nodejs.png'
import expresJS from '../images/expressJS.png'
import react from '../images/react.png'
import materialUI from '../images/materialUI.png'
import mongoDB from '../images/mongoDB.png'
import bootstrap from '../images/bootstrap.svg'
import jquery from '../images/jquery.png'

function ProfilePage({projects, visibleProject, showHireMe}) {
    const [skillsChevron, setSkillsChevron] = useState(true)
    const [progsChevron, setProgsChevron] = useState(true)
    const [styler, setStyler] = useState({
        opacity : '0',
    })

    const styles = {
        transition : 'opacity 0.5s linear',
        opacity : styler.opacity,
        backgroundImage: `url(${profilePic})`
    }

    useEffect(()=>{
        setStyler({
        opacity : '1'
        })
    }, [])

    const skills = ['Web Development', 'Frontend Development', 'Backend Development', 'Responsive Design', 'HTML', 'CSS', 'Javascript', 'REACT', 'JQuery', 'NodeJs', 'Express', 'MongoDB', 'Material UI', 'Bootstrap']

    const frameworks = [html, css, javascript, react, jquery, nodeJS, expresJS, mongoDB, materialUI, bootstrap]

    return (
        <div className="ProfilePage">
            {
                visibleProject === 'Welcome' ?
                <div className="mainSection">
                    <div className="descriptionText">
                        <h1 className='titleText'>
                            <span style={{transition: 'opacity 0.5s linear', opacity: styler.opacity}}>H</span>
                            <span style={{transition: 'opacity 0.3s linear 0.5s', opacity: styler.opacity}}>I, </span>
                            <span className='verb' style={{
                                opacity: styler.opacity,
                                transition: 'opacity 0.5s linear 0.6s'
                            }}>I </span>
                            <span className='verb' style={{
                                opacity: styler.opacity,
                                transition: 'opacity 0.5s linear 0.9s'
                            }}>am:</span>
                        </h1>

                        <div>
                            <h2 className='titleText'>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 1.2s'
                                }}>H</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 1.5s'
                                }}>E</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 1.8s'
                                }}>N</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 2.1s'
                                }}>S</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 2.4s'
                                }}>O</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 2.7s'
                                }}>N </span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 3s'
                                }}>K</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 3.3s'
                                }}>U</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 3.6s'
                                }}>D</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 3.9s'
                                }}>I </span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 4.2s'
                                }}>A</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 4.5s'
                                }}>M</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.5s linear 4.8s'
                                }}>A</span>
                                <span className='name' style={{
                                    opacity: styler.opacity,
                                    transition: 'opacity 0.9s linear 5.1s'
                                }}>H</span>
                            </h2>
                            <h3 className='title' style={{
                                opacity: styler.opacity,
                                transition: 'opacity 0.5s linear 5.4s'
                            }}>
                            FullStack Javascript Web Developer (MERN stack)
                            </h3>
                            <h3 className='title' style={{
                                opacity: styler.opacity,
                                transition: 'opacity 0.5s linear 5.7s'
                            }}>
                                Currently taking Python and SQL courses for Web Development & Data Science
                            </h3>
                            <div className='btnContainer'>
                                <button className='btn' style={{opacity: styler.opacity}}>More About Me</button>
                            </div>
                        </div>
                    </div>

                    <div className="pictureAndButtons">
                        <div className="profilePicContainer" style={styles}></div>
                        <div className='btnContainer'>
                            <button className='btn' style={{opacity: styler.opacity}} onClick={showHireMe}>Hire me</button>
                            <button className='btn' style={{opacity: styler.opacity}} onClick={showHireMe}>Request Call</button>
                        </div>
                    </div>
                </div> :
                projects?.filter(item => item.title === visibleProject).map(item => (
                <div className="mainSection">
                    <div className="descriptionText">
                        <h1 className='titleText'>
                            {item.title}
                        </h1>

                        <div>
                            <p className='descriptionParagraph'>
                                {item.description}
                            </p>

                            <div className='btnContainer'>
                                <button className='btn'> <a href={item.link} target='_blank'>View Live Site</a> </button>
                            </div>
                        </div>
                    </div>

                    <div className="libraries">
                        <div className="librariesContainer">
                            <h3 style={{fontSize : '2rem'}}>
                                Libraries and Dependencies
                            </h3>
                            <ul className='librariesListContainer'>
                                {
                                item.libraries?.map(item => (
                                    <li className='listItem'> <i className="fas fa-check fa-small"></i> {item} </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className='btnContainer'>
                            <button className='btn' onClick={showHireMe}>Hire me</button>
                            <button className='btn' onClick={showHireMe}>Request Call</button>
                        </div>
                    </div>
                </div>
                ))
            }
            
            <div className="consoleSection">
            <div className="consoleResizer"></div>
            <div className="skillsHeading">
                <div className='skillGridItem'>
                    <h3 onClick={()=>{
                        setSkillsChevron(!skillsChevron)
                    }} className='skills'>{!skillsChevron ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>} Skills</h3>
                    <ul className='skillsList'>
                        {
                            skills.map(skill => (
                                <li className='skillItem'>
                                    <i className="fas fa-chevron-right"></i>
                                    {skill}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='skillGridItem'>
                    <h3 onClick={()=>{
                        setProgsChevron(!progsChevron)
                    }} className='skills'>{!progsChevron ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>} Language, Frameworks and Liabraries</h3>

                    <div className="libraries">
                        {
                            frameworks.map(item => (
                                <div className="frameworkImageContainer" style={{
                                    backgroundImage : `url(${item})`
                                }}>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfilePage
