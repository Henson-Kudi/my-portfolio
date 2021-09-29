import React, {useState} from 'react'
import './ProjectsDisplay.css'

function ProjectsDisplay({openedProjects, projects, setVisibleProjects, runFilter, setOpenedProjects, element}) {

    const [openProjects, setOpenProjects] = useState(true)
    const [openStyles, setOpenStyles] = useState({
        height: 'max-content',
    })

    const [backendProjects, setBackendProjects] = useState(true)
    const [fullStack, setFullStack] = useState(true)
    const [allProjects, setAllProjects] = useState(true)
    const [frontendProjects, setFrontendProjects] = useState(true)

    const openProjectStyles = {
        height : openStyles.height,
        overflow : 'hidden',
        transition: 'height 2s ease',
        maxHeight : '10rem' 
    }


    return (
        <div className='Projects'>
            <div className="openProjects" style={{cursor : 'default'}}>
                <p className='openedProject' onClick={()=>{
                    setOpenProjects(!openProjects);
                    setOpenStyles({
                    height : openProjects ? '0px' : 'max-content'
                    })
                }}>
                    {
                        openProjects ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
                    }
                    <span className="folder">
                        OPENED PROJECTS
                    </span>
                </p>
                <div className="projects" style={openProjectStyles}>
                    {
                        openedProjects.map(item => (
                            <p className="project" style={{
                                            backgroundColor : item === element ? 'rgba(66, 135, 245, 0.8)' : null,
                                            display : 'grid',
                                            alignItems : 'center'
                                        }}>
                                <i className="fas fa-times fa-sm"
                                    onClick={()=>{
                                        runFilter(item)
                                    }}
                                ></i>
                                <span 
                                    onClick={()=>{
                                        setVisibleProjects(item)
                                    }}
                                >
                                            {item}
                                </span>
                            </p>
                        ))
                    }
                </div>

            </div>

            <div className="projectsFolder">
                <p onClick={()=> {setAllProjects(!allProjects)}}>
                    {
                        allProjects ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
                    }
                    <span className="folder">
                        PROJECTS
                    </span>
                </p>

                <div className="allProjects" style={{
                    height : allProjects ? 'max-content' : '0px'
                    }}
                >
                    <div className="frontendProjects">
                        <div className="html-css">
                            <p onClick={()=> {setFrontendProjects(!frontendProjects)}}>
                                {
                                    frontendProjects ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
                                }
                                <span className="folder">
                                    FRONTEND PROJECTS
                                </span>
                            </p>
                            <div className="projectsList" style={{
                                height : frontendProjects ? 'max-content' : '0px',
                            }}>
                                {
                                    projects.filter(item => item.category === 'frontend').map(item =>(
                                        <p onClick={()=>{
                                            if(openedProjects.includes(item.title)){ setVisibleProjects(item.title)
                                            }else{
                                                if(openedProjects.length === 8){
                                                    const filtered = openedProjects.pop()
                                                    setOpenedProjects([
                                                        ...openedProjects,
                                                        item.title
                                                    ])
                                                    setVisibleProjects(item.title)
                                                }else{
                                                    setOpenedProjects([...openedProjects, item.title])
                                                setVisibleProjects(item.title)
                                                }
                                            }
                                        }} style={{
                                            backgroundColor : item.title === element ? 'rgba(66, 135, 245, 0.8)' : null,
                                            maxWidth : '90%',
                                            overflow : 'hidden'
                                        }}>{item.title}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="backendProjects">
                        <div className="html-css-js">
                            <p onClick={()=> {setBackendProjects(!backendProjects)}}>
                                {
                                    backendProjects ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
                                }
                                <span className="folder">
                                    BACKEND PROJECTS
                                </span>
                            </p>
                            <div className="projectsList" style={{
                                height : backendProjects ? 'max-content' : '0px',
                                overflow : 'hidden'
                            }}>
                                {
                                    projects.filter(item => item.category === 'backend').map(item =>(
                                        <p onClick={()=>{
                                            if(openedProjects.includes(item.title)){
                                                setVisibleProjects(item.title)
                                            }else{
                                                if(openedProjects.length === 8){
                                                    const filtered = openedProjects.pop()
                                                    setOpenedProjects([
                                                        ...openedProjects,
                                                        item.title
                                                    ])
                                                    setVisibleProjects(item.title)
                                                }else{
                                                    setOpenedProjects([...openedProjects, item.title])
                                                setVisibleProjects(item.title)
                                                }
                                            }
                                        }} style={{
                                            backgroundColor : item.title === element ? 'rgba(66, 135, 245, 0.8)' : null
                                        }}>{item.title}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="fullStackProjects">
                        <div className="html-css-js">
                            <p onClick={()=> {setFullStack(!fullStack)}}>
                                {
                                    fullStack ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
                                }
                                <span className="folder">
                                    FULL STACK (MERN)
                                </span>
                            </p>
                            <div className="projectsList" style={{
                                height : fullStack ? 'max-content' : '0px',
                                overflow : 'hidden'
                            }}>
                                {
                                    projects.filter(item => item.category === 'full-stack').map(item =>(
                                        <p onClick={()=>{
                                            if(openedProjects.includes(item.title)){
                                                setVisibleProjects(item.title)
                                            }else{
                                                if(openedProjects.length === 8){
                                                    const filtered = openedProjects.pop()
                                                    setOpenedProjects([
                                                        ...openedProjects,
                                                        item.title
                                                    ])
                                                    setVisibleProjects(item.title)
                                                }else{
                                                    setOpenedProjects([...openedProjects, item.title])
                                                setVisibleProjects(item.title)
                                                }
                                            }
                                        }} style={{
                                            backgroundColor : item.title === element ? 'rgba(66, 135, 245, 0.8)' : null
                                        }}>{item.title}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default ProjectsDisplay
