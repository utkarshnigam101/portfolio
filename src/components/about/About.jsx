import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt='me'/>
        </div>
        <div className='about__content'>
              <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 1+  years working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> 5+ worldwide clients</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 2 Major Projects</small>
          </article>
         
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iure eius maiores laboriosam fugit est eveniet ad harum recusandae voluptates perspiciatis aut ullam, quidem accusantium? Qui hic sed quisquam soluta.
          Obcaecati ex voluptatum corrupti blanditiis provident accusamus, pariatur quos voluptas nesciunt dolorem suscipit excepturi ratione iste beatae voluptatibus eum illum nihil fugiat voluptate iusto quaerat placeat. Obcaecati placeat consequuntur rem.</p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About