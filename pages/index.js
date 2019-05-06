import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav';
const Home = () => (
  <div className="bodyp">
    <Head title="News Test Pl">
      <title>News Test Pl</title>
      <link href="./static/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
      <link href="./static/bootstrap.min.css" rel="stylesheet" />
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
        <header>
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-left no-padding">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-right no-padding">
                  <ul>
                    <li><a href="tel:+440 012 3654 896"><span className="lnr lnr-phone-handset" /><span>+440 012 3654 896</span></a></li>
                    <li><a href="mailto:support@colorlib.com"><span className="lnr lnr-envelope" /><span>support@colorlib.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-wrap">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-12 logo-left no-padding">
                  <a href="index.html">
                    <img className="img-fluid" src="../static/img/logo.png" alt />
                  </a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 logo-right no-padding ads-banner">
                  <img className="img-fluid" src="../static/img/banner-ad.jpg" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="container main-menu" id="main-menu">
            <div className="row align-items-center justify-content-between">
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li className="menu-active"><a href="index.html">Home</a></li>
                  <li><a href="archive.html">Archive</a></li>
                  <li><a href="category.html">Category</a></li>
                  <li className="menu-has-children"><a href>Post Types</a>
                    <ul>
                      <li><a href="standard-post.html">Standard Post</a></li>
                      <li><a href="image-post.html">Image Post</a></li>
                      <li><a href="gallery-post.html">Gallery Post</a></li>
                      <li><a href="video-post.html">Video Post</a></li>
                      <li><a href="audio-post.html">Audio Post</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>{/* #nav-menu-container */}
              <div className="navbar-right">
                <form className="Search">
                  <input type="text" className="form-control Search-box" name="Search-box" id="Search-box" placeholder="Search" />
                  <label htmlFor="Search-box" className="Search-box-label">
                    <span className="lnr lnr-magnifier" />
                  </label>
                  <span className="Search-close">
                    <span className="lnr lnr-cross" />
                  </span>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div className="site-main-container">
          {/* Start top-post Area */}
          <section className="top-post-area pt-10">
            <div className="container no-padding">
              <div className="row small-gutters">
                <div className="col-lg-8 top-post-left">
                  <div className="feature-image-thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src="../static/img/top-post1.jpg" alt />
                  </div>
                  <div className="top-post-details">
                    <ul className="tags">
                      <li><a href="#">Food Habit</a></li>
                    </ul>
                    <a href="image-post.html">
                      <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                    </a>
                    <ul className="meta">
                      <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                      <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                      <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 top-post-right">
                  <div className="single-top-post">
                    <div className="feature-image-thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="../static/img/top-post2.jpg" alt />
                    </div>
                    <div className="top-post-details">
                      <ul className="tags">
                        <li><a href="#">Food Habit</a></li>
                      </ul>
                      <a href="image-post.html">
                        <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
                      </a>
                      <ul className="meta">
                        <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                        <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                        <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-top-post mt-10">
                    <div className="feature-image-thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="../static/img/top-post3.jpg" alt />
                    </div>
                    <div className="top-post-details">
                      <ul className="tags">
                        <li><a href="#">Food Habit</a></li>
                      </ul>
                      <a href="image-post.html">
                        <h4>A Discount Toner Cartridge Is Better</h4>
                      </a>
                      <ul className="meta">
                        <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                        <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                        <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                      </ul>
                    </div>
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
                  </div>
                  {/* End latest-post Area */}
                  {/* Start banner-ads Area */}
                  <div className="col-lg-12 ad-widget-wrap mt-30 mb-30">
                    <img className="img-fluid" src="../static/img/banner-ad.jpg" alt />
                  </div>
                  {/* End banner-ads Area */}
                  {/* Start popular-post Area */}
                  <div className="popular-post-wrap">
                    <h4 className="title">Popular Posts</h4>
                    <div className="feature-post relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img className="img-fluid" src="../static/img/f1.jpg" alt />
                      </div>
                      <div className="details">
                        <ul className="tags">
                          <li><a href="#">Food Habit</a></li>
                        </ul>
                        <a href="image-post.html">
                          <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble" />06 Comments</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-20 medium-gutters">
                      <div className="col-lg-6 single-popular-post">
                        <div className="feature-img-wrap relative">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/f2.jpg" alt />
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
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
                      </div>
                      <div className="col-lg-6 single-popular-post">
                        <div className="feature-img-wrap relative">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/f3.jpg" alt />
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
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
                      </div>
                    </div>
                  </div>
                  {/* End popular-post Area */}
                  {/* Start relavent-story-post Area */}
                  <div className="relavent-story-post-wrap mt-30">
                    <h4 className="title">Relavent Stories</h4>
                    <div className="relavent-story-list-wrap">
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r1.jpg" alt />
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
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r2.jpg" alt />
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
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg" />
                            <img className="img-fluid" src="../static/img/r3.jpg" alt />
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
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End relavent-story-post Area */}
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
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 single-footer-widget">
                <h4>Top Products</h4>
                <ul>
                  <li><a href="#">Managed Website</a></li>
                  <li><a href="#">Manage Reputation</a></li>
                  <li><a href="#">Power Tools</a></li>
                  <li><a href="#">Marketing Service</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Brand Assets</a></li>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Features</h4>
                <ul>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Brand Assets</a></li>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Research</a></li>
                  <li><a href="#">Experts</a></li>
                  <li><a href="#">Agencies</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 single-footer-widget">
                <h4>Instragram Feed</h4>
                <ul className="instafeed d-flex flex-wrap">
                  <li><img src="../static/img/i1.jpg" alt /></li>
                  <li><img src="../static/img/i2.jpg" alt /></li>
                  <li><img src="../static/img/i3.jpg" alt /></li>
                  <li><img src="../static/img/i4.jpg" alt /></li>
                  <li><img src="../static/img/i5.jpg" alt /></li>
                  <li><img src="../static/img/i6.jpg" alt /></li>
                  <li><img src="../static/img/i7.jpg" alt /></li>
                  <li><img src="../static/img/i8.jpg" alt /></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom row align-items-center">
              <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              <div className="col-lg-4 col-md-12 footer-social">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-dribbble" /></a>
                <a href="#"><i className="fa fa-behance" /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>


    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Open+Sans:600,700");
      
     
    `}</style>
  </div>
)

export default Home
