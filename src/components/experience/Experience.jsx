import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h2>Frontend Development</h2>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              
              <div>
              <h4>TailWind</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
              
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h2>Backend Development</h2>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
             
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              <small className='text-light'>Beginner</small>
              </div>
         
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
             
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience