import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Home = () => (
  <div className="bodyp">
    <Head title="News Test Pl">
        <title>News Test Pl</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:site_name" content="webcam.platifi.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541636752-a5ace3a8a2d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3d5ec3f81c8ab31d1e7b0809ad178a6&auto=format&fit=crop&w=500&q=60" name="image" />
        <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1541636752-a5ace3a8a2d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3d5ec3f81c8ab31d1e7b0809ad178a6&auto=format&fit=crop&w=500&q=60" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="News Test Pl" />
        <meta property="og:title" content="News Test Pl" name="title" />
        <meta content="news, trending, latest news" name="keywords" />
        <meta property="og:description" content="Get the latest news and trending articles" name="description" />
        <meta content="Get the latest news and trending articles" name="description" />
        <meta property="og:url" content="https://webcam.platifi.com/home" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="../static/css/linearicons.css" />
        <link rel="stylesheet" href="../static/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../static/css/bootstrap.css" />
        <link rel="stylesheet" href="../static/css/magnific-popup.css" />
        <link rel="stylesheet" href="../static/css/nice-select.css" />
        <link rel="stylesheet" href="../static/css/animate.min.css" />
        <link rel="stylesheet" href="../static/css/owl.carousel.css" />
        <link rel="stylesheet" href="../static/css/jquery-ui.css" />
        <link rel="stylesheet" href="../static/css/main.css" />
    </Head>
    <div>
        <Nav />
        <div className="site-main-container">
            {/* Start top-post Area */}
            <section className="top-post-area pt-10">
            <div className="container no-padding">
                <div className="row">
                <div className="col-lg-12">
                    <div className="hero-nav-area">
                    <h1 className="text-white">About Us</h1>
                    <p className="text-white link-nav"><a href="index.html">Home </a>  <span className="lnr lnr-arrow-right" /><a href="about.html">About Us </a></p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* End top-post Area */}
        </div>
        {/* Start service Area */}
        <section className="service-area section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="single-service d-flex flex-row">
                    <div className="icon">
                    <span className="lnr lnr-sun" />
                    </div>
                    <div className="details">
                    <a href="#">
                        <h4>Stunning Visuals</h4>
                    </a>
                    <p>
                        Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="single-service d-flex flex-row">
                    <div className="icon">
                    <span className="lnr lnr-code" />
                    </div>
                    <div className="details">
                    <a href="#">
                        <h4>Clean Code</h4>
                    </a>
                    <p>
                        Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="single-service d-flex flex-row">
                    <div className="icon">
                    <span className="lnr lnr-clock" />
                    </div>
                    <div className="details">
                    <a href="#">
                        <h4>Punctuality</h4>
                    </a>
                    <p>
                        If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that nice big screen.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End service Area */}
        {/* Start info Area */}
        <section className="info-area section-gap relative">
            <div className="container">
            <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 no-padding info-right">
                <h1>
                    Who we are <br />
                    to Serve the nation
                </h1>
                <p>
                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                </p>
                <div className="row no-gutters">
                    <div className="single-services col">
                    <span className="lnr lnr-diamond" />
                    <a href="#">
                        <h4>Expert Services</h4>
                    </a>
                    <p>
                        Usage of the Internet is becoming more common due to rapid advancement of technology.
                    </p>
                    </div>
                    <div className="single-services col">
                    <span className="lnr lnr-phone" />
                    <a href="#">
                        <h4>Great Support</h4>
                    </a>
                    <p>
                        Usage of the Internet is becoming more common due to rapid advancement of technology.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End info Area */}
        {/* Start feedback Area */}
        <section className="feedback-area section-gap" id="feedback">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 pb-50 header-text text-center">
                <h1 className="mb-10">Goals to Achieve for the leadership</h1>
                <p>
                    Who are in extremely love with eco friendly system..
                </p>
                </div>
            </div>
            <div className="row feedback-contents justify-content-between align-items-center">
                <div className="col-lg-6 feedback-left">
                <div className="mn-accordion" id="accordion">
                    {/*Accordion item*/}
                    <div className="accordion-item">
                    <div className="accordion-heading">
                        <h3>Success</h3>
                        <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p>For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see amazing detail of the lunar surface just star gazing on in your back yard.</p>
                    </div>
                    </div>
                    {/*Accordion item*/}
                    {/*Accordion item*/}
                    <div className="accordion-item">
                    <div className="accordion-heading">
                        <h3>Info</h3>
                        <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p>For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see amazing detail of the lunar surface just star gazing on in your back yard.</p>
                    </div>
                    </div>
                    {/*Accordion item*/}
                    {/*Accordion item*/}
                    <div className="accordion-item">
                    <div className="accordion-heading">
                        <h3>danger</h3>
                        <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p>For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see amazing detail of the lunar surface just star gazing on in your back yard.</p>
                    </div>
                    </div>
                    {/*Accordion item*/}
                    {/*Accordion item*/}
                    <div className="accordion-item">
                    <div className="accordion-heading">
                        <h3>Warning</h3>
                        <div className="icon">
                        <i className="lnr lnr-chevron-right" />
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p>For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see amazing detail of the lunar surface just star gazing on in your back yard.</p>
                    </div>
                    </div>
                    {/*Accordion item*/}
                </div>
                </div>
                <div className="col-lg-5 feedback-right relative d-flex justify-content-center align-items-center">
                <div className="overlay overlay-bg" />
                <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img className="img-fluid" src="../static/img/play-btn.png" alt /></a>
                </div>
            </div>
            </div>
        </section>
        {/* End feedback Area */}
        {/* Start testimonial Area */}
        <section className="testimonial-area section-gap">
            <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                    <h1 className="mb-10">What Our Client’s Say</h1>
                    <p>Who are in extremely love with friendly system.</p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="active-testimonial">
                <div className="single-testimonial item d-flex flex-row">
                    <div className="thumb">
                    <img className="img-fluid" src="../static/img/about/user1.png" alt />
                    </div>
                    <div className="desc">
                    <p>
                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.
                    </p>
                    <h4 mt-30>Mark Alviro Wiens</h4>
                    <p>CEO at Google</p>
                    </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                    <div className="thumb">
                    <img className="img-fluid" src="../static/img/about/user2.png" alt />
                    </div>
                    <div className="desc">
                    <p>
                        Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to
                    </p>
                    <h4 mt-30>Lina Harrington</h4>
                    <p>CEO at Facebook</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End testimonial Area */}
        {/* Start brands Area */}
        <section className="brands-area pb-60 pt-60">
            <div className="container no-padding">
            <div className="brand-wrap">
                <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                <div className="col single-brand">
                    <a href="#"><img className="mx-auto" src="../static/img/l1.png" alt /></a>
                </div>
                <div className="col single-brand">
                    <a href="#"><img className="mx-auto" src="../static/img/l2.png" alt /></a>
                </div>
                <div className="col single-brand">
                    <a href="#"><img className="mx-auto" src="../static/img/l3.png" alt /></a>
                </div>
                <div className="col single-brand">
                    <a href="#"><img className="mx-auto" src="../static/img/l4.png" alt /></a>
                </div>
                <div className="col single-brand">
                    <a href="#"><img className="mx-auto" src="../static/img/l5.png" alt /></a>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End brands Area */}
        {/* start footer Area */}
        <Footer />
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
