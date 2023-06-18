import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import img from './img/hero-img.png';
import handImg from './img/easy-buy-hand-img.png';
import missionImg from './img/mission-main.png'

const Home = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div>
                                    <a href="">
                                        <h1>Heme <span class="pull-right">hi</span></h1>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <h1>Heme <span class="pull-right">hi</span></h1>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <h1>Heme <span class="pull-right">hi</span></h1>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <h1>Heme <span class="pull-right">hi</span></h1>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <h1>Heme <span class="pull-right">hi</span></h1>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={img} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi doloremque, eum similique ullam perspiciatis reprehenderit dolorum? Iste porro totam delectus, molestias unde doloremque animi qui officiis nisi ab quae.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center">
                                <h1 class="about-head">EASILY <span class="strokeme">BUY <br /> and SELL</span> CRYPTO & <br /> STABLECOINS</h1>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={handImg} class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div className="feature-list">
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={missionImg} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h1 className='about-head'>OUR <span className='strokeme'>MISSION</span></h1>
                                    <p className='mt-3 mission-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate cum qui explicabo tempora quam corporis saepe! Eum numquam adipisci eius suscipit atque impedit voluptatum nam quos laboriosam. Asperiores, repellat.</p>
                                    <button class="btn btn-primary mission-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">I WANT TO <span className='strokeme'>BUY</span></h1>
                        <div class="row">
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div className='buy-item'>
                                    <div class = "d-flex h-100">
                                        <div style = {{ "flex": 1}} className='d-flex align-items-center justify-content-center'>
                                            <h1 class = "text-center">USDC</h1>
                                        </div>
                                        <div class = "d-flex align-items-center justify-content-center p-2">
                                            <img src={img}   style = {{ "height": "60px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center about-head">Why <span class = "strokeme">STABLY?</span></h1>
                        <div class="row mt-5">
                        <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className='feature-list'>
                                    <h1 class="text-center">Superior Rates</h1>
                                    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nobis impedit, nam aliquid id blanditiis ea beatae explicabo repellat est quo eveniet. Delectus impedit autem quibusdam velit saepe voluptatibus veniam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1 class="text-center">JOIN OUR COMMUNITY</h1>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem voluptas, iure, quod ipsam error doloribus laborum dolor reprehenderit architecto accusantium facere itaque, eum nihil temporibus. Aperiam laboriosam ipsa at.</p>
                    </div>
                </section>
                <footer>
                    <h5 class="text-center">&copy; 2024 Company Name</h5>
                </footer>
            </main>
        </>
    )
}

export default Home
