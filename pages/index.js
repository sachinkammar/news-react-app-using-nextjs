import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav';
import Footer from '../components/footer'
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
        <Nav />
        <div className="site-main-container">
          {/* Start top-post Area */}
          <section className="top-post-area pt-10">
            <div className="container no-padding">
              <div className="row small-gutters">
                <div className="col-lg-8 top-post-left">
                  <div className="feature-image-thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1142677_1296x518.jpg&w=660&h=264&scale=crop&cquality=80&location=center&format=jpg" alt />
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
                      <img className="img-fluid" src="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1182186_1296x729.jpg&w=238&h=133&scale=crop&cquality=80&location=center" alt />
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
                          <img className="img-fluid" src="https://a.espncdn.com/combiner/i?img=/media/motion/2019/0506/dm_190506_0605_Dhoni_v_Data_Site/dm_190506_0605_Dhoni_v_Data_Site.jpg" alt />
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
                          <img className="img-fluid" src="https://a.espncdn.com/combiner/i?img=/media/motion/2019/0506/dm_190506_0605_SPOTIFY/dm_190506_0605_SPOTIFY.jpg" alt />
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
                          <img className="img-fluid" src="https://a.espncdn.com/combiner/i?img=%2Fmedia%2Fmotion%2F2019%2F0506%2Fdm_190506_0605_Dailies_Site%2Fdm_190506_0605_Dailies_Site.jpg&w=768&h=432&scale=crop&cquality=80&location=origin&format=jpg../static/img/l3.jpg" alt />
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
                          <img className="img-fluid" src="https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1181173_900x506.jpg&w=768&h=432&scale=crop&cquality=80&location=origin&format=jpg" alt />
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
                    <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0424/dm_190424_240419-ARNOLD-WCXI-NRH/dm_190424_240419-ARNOLD-WCXI-NRH.jpg" alt />
                  </div>
                  {/* End banner-ads Area */}
                  {/* Start popular-post Area */}
                  <div className="popular-post-wrap">
                    <h4 className="title">Popular Posts</h4>
                    <div className="feature-post relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img className="https://a.espncdn.com/media/motion/2019/0420/dm_190420_2004_Sanjay_WC_Quiz_site/dm_190420_2004_Sanjay_WC_Quiz_site.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0506/dm_190506_060519-RC-WOMEN-NRH/dm_190506_060519-RC-WOMEN-NRH.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_MI_PC_SITE/dm_190505_0505_MI_PC_SITE.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_M55_KKR_MI_POST_SITE_revis/dm_190505_0505_M55_KKR_MI_POST_SITE_revis.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_M55_KKR_MI_POST/dm_190505_0505_M55_KKR_MI_POST.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0506/dm_190506_IPL_TOP5_MIvKKR_M56/dm_190506_IPL_TOP5_MIvKKR_M56.jpg" alt />
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
                            <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_PANASONIC/dm_190505_0505_PANASONIC.jpg" alt />
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
                              <img src="https://a.espncdn.com/media/motion/2019/0506/dm_190506_060519-TOP5-NRH-KXIPVCSK/dm_190506_060519-TOP5-NRH-KXIPVCSK.jpg" alt />
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
                              <img src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_Punjab_PC_SITE/dm_190505_0505_Punjab_PC_SITE.jpg" alt />
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
                              <img src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_CSK_STEPHEN_FLEMING_PC_SIT/dm_190505_0505_CSK_STEPHEN_FLEMING_PC_SIT.jpg" alt />
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
                      <img className="img-fluid" src="https://a.espncdn.com/media/motion/2019/0505/dm_190505_0505_M55_KXIP_CSK_PRE_01/dm_190505_0505_M55_KXIP_CSK_PRE_01.jpg" alt />
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
                          <img src="https://secure.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1183355_1296x729.jpg&w=238&h=134&scale=crop&location=center&cquality=80" alt />
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
                          <img src="https://secure.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1183355_1296x729.jpg&w=238&h=134&scale=crop&location=center&cquality=80" alt />
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
                          <img src="https://secure.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1143624_1296x518.jpg&w=628&h=252&scale=crop&location=center&cquality=80" alt />
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
                          <img src="https://secure.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1182890_1296x729.jpg&w=768&h=432&scale=crop&location=center&cquality=80" alt />
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
      @import url("https://fonts.googleapis.com/css?family=Open+Sans:600,700");
      
     
    `}</style>
  </div>
)

export default Home
