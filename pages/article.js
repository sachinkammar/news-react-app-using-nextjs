import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Article = () => (
  <div>
    <Head>
        <title>The Lorem and Ipsum of Styling Pancakes</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:site_name" content="webcam.platifi.com" />
        <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8533/pancakes.jpg" name="image" />
        <meta property="og:image:secure_url" content="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8533/pancakes.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="News Test Pl" />
        <meta property="og:title" content="The Lorem and Ipsum of Styling Pancakes" name="title" />
        <meta content="news, trending, latest news" name="keywords" />
        <meta property="og:description" content="A pancake is a flat cake, often thin, and round, prepared from a starch-based batter that may also contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often with oil or butter. In Britain, pancakes are often unleavened,
            and resemble a crêpe. In North America, a raising agent is used (typically baking powder). The North American pancake is similar to a Scotch pancake or drop scone. " name="description" />
        <meta content="A pancake is a flat cake, often thin, and round, prepared from a starch-based batter that may also contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often with oil or butter. In Britain, pancakes are often unleavened,
            and resemble a crêpe. In North America, a raising agent is used (typically baking powder). The North American pancake is similar to a Scotch pancake or drop scone. " name="description" />
        <meta property="og:url" content="https://webcam.platifi.com/article" />
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
                  <h1 className="text-white">Image Post</h1>
                  <p className="text-white link-nav"><a href="index.html">Home </a>  <span className="lnr lnr-arrow-right" /><a href="#">Post Types </a><span className="lnr lnr-arrow-right" /><a href="image-post.html">Image Post </a></p>
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
                {/* Start single-post Area */}
                <div className="single-post-wrap">
                  <div className="feature-img-thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src="../static/img/f1.jpg" alt />
                  </div>
                  <div className="content-wrap">
                    <ul className="tags mt-10">
                      <li><a href="#">Food Habit</a></li>
                    </ul>
                    <a href="#">
                      <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                    </a>
                    <ul className="meta pb-20">
                      <li><a href="#"><span className="lnr lnr-user" />Mark wiens</a></li>
                      <li><a href="#"><span className="lnr lnr-calendar-full" />03 April, 2018</a></li>
                      <li><a href="#"><span className="lnr lnr-bubble" />06 </a></li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.
                    </p>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote>
                    <div className="navigation-wrap justify-content-between d-flex">
                      <a className="prev" href="#"><span className="lnr lnr-arrow-left" />Prev Post</a>
                      <a className="next" href="#">Next Post<span className="lnr lnr-arrow-right" /></a>
                    </div>
                    <div className="comment-sec-area">
                      <div className="container">
                        <div className="row flex-column">
                          <h6>05 Comments</h6>
                          <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                  <img src="../static/img/blog/c1.jpg" alt />
                                </div>
                                <div className="desc">
                                  <h5><a href="#">Emilly Blunt</a></h5>
                                  <p className="date">December 4, 2017 at 3:12 pm </p>
                                  <p className="comment">
                                    Never say goodbye till the end comes!
                                  </p>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <a href className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                          <div className="comment-list left-padding">
                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                  <img src="../static/img/blog/c2.jpg" alt />
                                </div>
                                <div className="desc">
                                  <h5><a href="#">Emilly Blunt</a></h5>
                                  <p className="date">December 4, 2017 at 3:12 pm </p>
                                  <p className="comment">
                                    Never say goodbye till the end comes!
                                  </p>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <a href className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                          <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                  <img src="../static/img/blog/c3.jpg" alt />
                                </div>
                                <div className="desc">
                                  <h5><a href="#">Emilly Blunt</a></h5>
                                  <p className="date">December 4, 2017 at 3:12 pm </p>
                                  <p className="comment">
                                    Never say goodbye till the end comes!
                                  </p>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <a href className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form">
                    <h4>Post Comment</h4>
                    <form>
                      <div className="form-group form-inline">
                        <div className="form-group col-lg-6 col-md-12 name">
                          <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                        </div>
                        <div className="form-group col-lg-6 col-md-12 email">
                          <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
                      </div>
                      <a href="#" className="primary-btn text-uppercase">Post Comment</a>
                    </form>
                  </div>
                </div>
                {/* End single-post Area */}
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

export default Article
