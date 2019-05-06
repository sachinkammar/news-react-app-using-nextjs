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
                    <h1 className="text-white">Posts Category</h1>
                    <p className="text-white link-nav"><a href="index.html">Home </a>  <span className="lnr lnr-arrow-right" /><a href="category.html">Posts Category</a></p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="news-tracker-wrap">
                    <h6><span>Breaking News:</span>   <a href="#">Astronomy Binoculars A Great Alternative</a></h6>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* End top-post Area */}
            {/* Start latest-post Area */}
            <section className="latest-post-area pb-120">
            <div className="container no-padding">
                <div className="row">
                <div className="col-lg-8 post-list">
                    {/* Start latest-post Area */}
                    <div className="latest-post-wrap">
                    <h4 className="cat-title">Latest News</h4>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/l1.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Lifestyle</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/l2.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Science</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/l3.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Travel</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/l4.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Fashion</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r1.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Science</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r2.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Travel</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                        <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r3.jpg" alt />
                        </div>
                        <ul className="tags">
                            <li><a href="#">Fashion</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        </div>
                    </div>
                    <div className="load-more">
                        <a href="#" className="primary-btn">Load More Posts</a>
                    </div>
                    </div>
                    {/* End latest-post Area */}
                </div>
                <div className="col-lg-4">
                    <div className="sidebars-area">
                    <div className="single-sidebar-widget editors-pick-widget">
                        <h6 className="title">Editor’s Pick</h6>
                        <div className="editors-pick-post">
                        <div className="feature-img-wrap relative">
                            <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/e1.jpg" alt />
                            </div>
                            <ul className="tags">
                            <li><a href="#">Travel</a></li>
                            </ul>
                        </div>
                        <div className="details">
                            <a href="image-post.html">
                            <h4 className="mt-20">A Discount Toner Cartridge Is
                                Better Than Ever.</h4>
                            </a>
                            <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06 </a></li>
                            </ul>
                            <p className="excert">
                            Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.
                            </p>
                        </div>
                        <div className="post-lists">
                            <div className="single-post d-flex flex-row">
                            <div className="thumb">
                                <img src="../static/img/e2.jpg" alt />
                            </div>
                            <div className="detail">
                                <a href="image-post.html"><h6>Help Finding Information
                                    Online is so easy</h6></a>
                                <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="single-post d-flex flex-row">
                            <div className="thumb">
                                <img src="../static/img/e3.jpg" alt />
                            </div>
                            <div className="detail">
                                <a href="image-post.html"><h6>Compatible Inkjet Cartr
                                    world famous</h6></a>
                                <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="single-post d-flex flex-row">
                            <div className="thumb">
                                <img src="../static/img/e4.jpg" alt />
                            </div>
                            <div className="detail">
                                <a href="image-post.html"><h6>5 Tips For Offshore Soft
                                    Development </h6></a>
                                <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="single-sidebar-widget ads-widget">
                        <img className="img-fluid" src="../static/img/sidebar-ads.jpg" alt />
                    </div>
                    <div className="single-sidebar-widget newsletter-widget">
                        <h6 className="title">Newsletter</h6>
                        <p>
                        Here, I focus on a range of items
                        andfeatures that we use in life without
                        giving them a second thought.
                        </p>
                        <div className="form-group d-flex flex-row">
                        <div className="col-autos">
                            <div className="input-group">
                            <input className="form-control" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" type="text" />
                            </div>
                        </div>
                        <a href="#" className="bbtns">Subcribe</a>
                        </div>
                        <p>
                        You can unsubscribe us at any time
                        </p>
                    </div>
                    <div className="single-sidebar-widget most-popular-widget">
                        <h6 className="title">Most Popular</h6>
                        <div className="single-list flex-row d-flex">
                        <div className="thumb">
                            <img src="../static/img/m1.jpg" alt />
                        </div>
                        <div className="details">
                            <a href="image-post.html">
                            <h6>Help Finding Information
                                Online is so easy</h6>
                            </a>
                            <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="single-list flex-row d-flex">
                        <div className="thumb">
                            <img src="../static/img/m2.jpg" alt />
                        </div>
                        <div className="details">
                            <a href="image-post.html">
                            <h6>Compatible Inkjet Cartr
                                world famous</h6>
                            </a>
                            <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="single-list flex-row d-flex">
                        <div className="thumb">
                            <img src="../static/img/m3.jpg" alt />
                        </div>
                        <div className="details">
                            <a href="image-post.html">
                            <h6>5 Tips For Offshore Soft
                                Development </h6>
                            </a>
                            <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="single-list flex-row d-flex">
                        <div className="thumb">
                            <img src="../static/img/m4.jpg" alt />
                        </div>
                        <div className="details">
                            <a href="image-post.html">
                            <h6>5 Tips For Offshore Soft
                                Development </h6>
                            </a>
                            <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble" />06</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="single-sidebar-widget social-network-widget">
                        <h6 className="title">Social Networks</h6>
                        <ul className="social-list">
                        <li className="d-flex justify-content-between align-items-center fb">
                            <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-facebook" aria-hidden="true" />
                            <p>983 Likes</p>
                            </div>
                            <a href="#">Like our page</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center tw">
                            <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-twitter" aria-hidden="true" />
                            <p>983 Followers</p>
                            </div>
                            <a href="#">Follow Us</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center yt">
                            <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-youtube-play" aria-hidden="true" />
                            <p>983 Subscriber</p>
                            </div>
                            <a href="#">Subscribe</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center rs">
                            <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-rss" aria-hidden="true" />
                            <p>983 Subscribe</p>
                            </div>
                            <a href="#">Subscribe</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* End latest-post Area */}
        </div>
        {/* start footer Area */}
        <Footer />
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
