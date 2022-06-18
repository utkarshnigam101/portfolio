import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img11.png'
import IMG2 from '../../assets/img22.webp'
import IMG3 from '../../assets/img33.webp'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
         <article className='portfolio__item'>
          
                <div className='portfolio__item-image'>
                <img src={IMG1} alt=''/>
                </div>
                  <h3>This is portfolio tittle</h3>
                  <div className='portfolio__item-cta'>
                  <a href='https://github.com' className='btn'>Github</a>
                  <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

                  </div>
         

               
         </article>
         {/* END */}
         <article className='portfolio__item'>
          
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=''/>
          </div>
            <h3>This is portfolio tittle</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

            </div>
   

         
   </article>
   <article className='portfolio__item'>
          
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=''/>
          </div>
            <h3>This is portfolio tittle</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

            </div>
   

         
   </article>
   <article className='portfolio__item'>
          
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=''/>
          </div>
            <h3>This is portfolio tittle</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

            </div>
   

         
   </article>
   <article className='portfolio__item'>
          
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=''/>
          </div>
            <h3>This is portfolio tittle</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

            </div>
   

         
   </article>
   <article className='portfolio__item'>
          
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=''/>
          </div>
            <h3>This is portfolio tittle</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary ' target='_blank'>Live Demo</a>

            </div>
   

         
   </article>

      
         </div>
    </section>
  )
}

export default Portfolio