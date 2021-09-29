import React, {useState, useEffect, useRef} from 'react'
import ProfilePage from './Components/ProfilePage'
import ProjectsDisplay from './Components/ProjectsDisplay'
import HireMe from './Components/HireMe'
import {projects} from './Components/projects'
import './App.css'

function App() {
const [visibleProject, setVisibleProject] = useState('Welcome')
const [openedItems, setOpenedItems] = useState(['Welcome'])
const [hireMe, setHireMe] = useState(false)
const [viewProjects, setViewProjects] = useState(true)
const [searchProject, setSearchProject] = useState('')
const ref = useRef(null)
const [display, setDisplay] = useState(window.innerWidth <= 768 ? false : true)

const runFilter = async(item, i) =>{
  setOpenedItems(openedItems.filter(element => element !== item))
}

const handleSearchProject = (e)=>{
  setSearchProject(e.target.value)
}

useEffect(() => {
  document.addEventListener('mousedown', handle_Click_Outside);

  return ()=>{
    document.removeEventListener('mousedown', handle_Click_Outside);
  }
}, [])

  function handle_Click_Outside(e){
    if (window.innerWidth <= 768) {
      const {current : wrap} = ref;
      if(wrap && !wrap.contains(e.target)){
        setDisplay(false)
      }
    }
  }

  return (
    <div className="App" >
      <div className="one">
        <div className="mainContainer">
          <div className="topSection">
            <i className="fas fa-copy fa-2x link" onClick={()=>{
              setViewProjects(true)
              if(window.innerWidth <= 768){
                setDisplay(true)
              }
            }}></i>

            <i className="fas fa-search fa-2x link" onClick={()=>{
              setViewProjects(false)
              if(window.innerWidth <= 768){
                setDisplay(true)
              }
            }}></i>

            <a href="https://github.com/Henson-Kudi" target="_blank" className="link">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="bottomSection">
            <a href="https://www.facebook.com/profile.php?id=100008638898637" target="_blank" className="link">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com/HensonAmah" target="_blank" className="link">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/amahhenson/?hl=en" target="_blank" className="link">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/amah-henson-kudi-64736b190/" target="_blank" className="link">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="two" ref={ref} style={{
        display: display ? 'block' : 'none'
      }}>
        {
          viewProjects ?
          <ProjectsDisplay
            projects={projects}
            runFilter={runFilter}
            element={visibleProject}
            openedProjects={openedItems}
            setOpenedProjects={setOpenedItems}
            setVisibleProjects = {setVisibleProject}
          /> :
          <div className='findProject'>
            <input type="text" className="searchProject" name="searchProject" placeholder='Search Project' value={searchProject} onChange={handleSearchProject} />

            <div className="matchedProjects">
              {
                projects.filter(item => {
                  if(!searchProject){
                    return false
                  }
                  if(item.title.toLowerCase().includes(searchProject.toLowerCase())){
                    return true
                  }
                }).map(item => (
                  <p className='matchedProject' onClick={()=>{
                                            if(openedItems.includes(item.title)){ setVisibleProject(item.title)
                                            }else{
                                                if(openedItems.length === 8){
                                                    const filtered = openedItems.pop()
                                                    setOpenedItems([
                                                        ...openedItems,
                                                        item.title
                                                    ])
                                                    setVisibleProject(item.title)
                                                }else{
                                                    setOpenedItems([...openedItems, item.title])
                                                setVisibleProject(item.title)
                                                }
                                            }
                                        }}>{item.title}</p>
                ))
              }
            </div>
          </div>
        }
      </div>

      <div className="three">
      <div style={{
        width : '100%',
        overflowX : 'auto',
        backgroundColor : 'rgba(0, 0, 0, 0.75)',
        position: 'sticky', top: '0', left: '0',
        textAlign: 'left',
        display : 'flex',
        cursor : 'grab'
        }}>
        {
          openedItems.map((item, i) => (
            <span style={{
              padding: '1rem',
              backgroundColor : visibleProject === item ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.0)',
              width : 'max-content',
              fontStyle : item === 'Welcome' ? 'italic' : 'initial',
              fontWeight : 'lighter',
              cursor : 'pointer'
              }}
            >
              <span onClick={()=>{
                setVisibleProject(item)
              }}>
                {item}
              </span>
              <i className="fas fa-times fa-sm" onClick={()=>{
                runFilter(item)
              }}></i>
            </span>
          ))
        }
      </div>

        <ProfilePage
          projects={projects}
          visibleProject={visibleProject}
          showHireMe={()=>{setHireMe(true)}}
        />
      </div>
      {
        hireMe && 
        <HireMe
          cancle={()=>{setHireMe(false)}}
        />
      }
    </div>
  );
}

export default App;
