import React from 'react'
import data from '../assets/data.json'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Work = () => {
  return (
    <div id='work'>
        <h2>Work</h2>
        <section>
            <article>
                <Carousel
                showArrows={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={false}
                infiniteLoop={true}
                
                >
                    {
                        data.projects.map(i=>(
                            <div key={i.title} className='workItem'>
                                <img src={i.imgSrc} alt="" />
                                <aside >
                                    <h3 style={{padding:'1rem'}}>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a target={"blank"} href={i.url}>view demo</a>
                                </aside>
                            </div>
                        ))
                    }

                </Carousel>
            </article>
        </section>
      
    </div>
  )
}

export default Work
