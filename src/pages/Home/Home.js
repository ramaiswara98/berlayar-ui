import React from 'react'
import { Button } from 'bootstrap'

import NavBar from '../../component/NavBar/NavBar'
import './Home.css'
import Woman from '../../assets/images/women.png'
import Man from '../../assets/images/man.png'
import Megaphone from '../../assets/images/megaphone.png'
import Database from '../../assets/images/database.png'
import Chat from '../../assets/images/chat.png'
import Arthur from '../../assets/images/arthur.png'
import Bertrand from '../../assets/images/bertrand.png'
import Kay from '../../assets/images/kay.png'
import ChingShi from '../../assets/images/chingshi.png'
import Footer from '../../component/Footer/Footer'


function Home() {
  return (
    <div >
        <div className='container-global'>
            <div className='hero-container'>
                <h1 className='hero-text'>Create and Publish Hyperlocal Social Media Campaigns in <span className='red-text'>Seconds</span>, Not Months.</h1>
            </div>
            <div className='second-section'>
                <div className='col-start'>
                    <img src={Woman}/>
                </div>
                <div className='col-middle'>
                    <div className='subtitle-container'>
                        <p className='subtitle'>A full-suite of automated marketing agents at your disposal.</p><br/>
                        <p className='subtitle'>Find your nische and build an audience lean into topics that your audience care about.</p><br/>
                        <p className='subtitle'>Be the first to try Berlayar when we roll out.</p><br/>
                    </div>
                    <div className='hero-email-container'>
                        <input type='email' placeholder='Enter Your Email Address' className='hero-input'/>
                        <div className='hero-button'>SignUp</div>
                    </div>
                </div>
                <div className='col-end'>
                    <img src={Man}/>
                </div>
            </div>
        </div>
        <div className='video-section'>
        <iframe width="100%" height="760px" src="https://www.youtube.com/embed/uMzUB89uSxU?si=laQmA77iI2ZKpmzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='container-global'>
            <div className='third-section'>
                <h2 className='third-section-title'>What Berlayar.AI Can Do for You</h2>
            <div className='row'>
                <div className='col'>
                    <div>
                        <img src={Megaphone}/>
                        <p><b>Listen</b> to what people are saying online and discover new audiences or emerging trens</p>
                    </div>  
                </div>
                <div className='col'>
                    <div>
                        <img src={Database}/>
                        <p><b>Create</b> platform-friendly content complete with copy, and images generated from your dataset</p>
                    </div>  
                </div>
                <div className='col'>
                    <div>
                        <img src={Chat}/>
                        <p><b>Capture</b> mindshare and zeitgeist to accelerate bussiness growth</p>
                    </div>  
                </div>
            </div>
            </div>
        </div>
        <div className='container-global'>
            <div className='fourth-section'>
                <h1 className='hero-text'>It's like having a multinational team of experts that can work for you 24/7</h1>
                <p className='third-section-title' style={{marginTop:"180px"}}>Meet Your Round-the-Clock Team</p>
            
                <div className='row'>
                    <div className='col'>
                        <div>
                            <img src={Arthur}/>
                            <div className='text-card'>
                                <p className='text-card-title'>Arthur</p>
                                <p className='text-card-subtitle'>Build Up Knowledge and Market Intelligence for Easy Retrieval</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img src={Bertrand}/>
                            <div className='text-card'>
                                <p className='text-card-title'>Bertrand</p>
                                <p className='text-card-subtitle'>Go from Prompt-to-Publish</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img src={Kay}/>
                            <div className='text-card'>
                                <p className='text-card-title'>Kay</p>
                                <p className='text-card-subtitle'>Prompt-to-Feature</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img src={ChingShi}/>
                            <div className='text-card'>
                                <p className='text-card-title'><b>Ching Shi</b></p>
                                <p className='text-card-subtitle'>Router and Orchestrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
    
  )
}

export default Home