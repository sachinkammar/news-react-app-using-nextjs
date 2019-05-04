import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Main = () => (
  <div>
    <Head>
        <title>News Test Pl</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:site_name" content="webcam.platifi.com" />
        <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" name="image" />
        <meta property="og:image:secure_url" content="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="News Test Pl" />
        <meta property="og:title" content="News Test Pl" name="title" />
        <meta content="news, trending, latest news" name="keywords" />
        <meta property="og:description" content="New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers." name="description" />
        <meta content="New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers." name="description" />
        <meta property="og:url" content="https://webcam.platifi.com/home" />
        <meta property="og:type" content="website" />
    </Head>
    <Nav />

    <div className='container'>
        <div className='info'>
            <h1>Article News Card</h1>
        </div>
        <div className='column'>
            <div className='demo-title'>Normal</div>
            <div className='post-module'>
            <div className='thumbnail'>
                <div className='date'>
                <div className='day'>27</div>
                <div className='month'>Mar</div>
                </div>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' />
            </div>
            <div className='post-content'>
                <div className='category'>Photos</div>
                <h1 className='title'>City Lights in New York</h1>
                <h2 className='sub_title'>The city that never sleeps.</h2>
                <p className='description'>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                <div className='post-meta'>
                <span className='timestamp'>
                    <i className='fa fa-clock-o'></i>
                    6 mins ago
                </span>
                <span className='comments'>
                    <i className='fa fa-comments'></i>
                    <a href='#'>39 comments</a>
                </span>
                </div>
            </div>
            </div>
        </div>
        <div className='column'>
            <div className='demo-title'>Hover</div>
            <div className='post-module hover'>
            <div className='thumbnail'>
                <div className='date'>
                <div className='day'>27</div>
                <div className='month'>Mar</div>
                </div>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' />
            </div>
            <div className='post-content'>
                <div className='category'>Photos</div>
                <h1 className='title'>City Lights in New York</h1>
                <h2 className='sub_title'>The city that never sleeps.</h2>
                <p className='description'>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                <div className='post-meta'>
                <span className='timestamp'>
                    <i className='fa fa-clock-o'></i>
                    6 mins ago
                </span>
                <span className='comments'>
                    <i className='fa fa-comments'></i>
                    <a href='#'>39 comments</a>
                </span>
                </div>
            </div>
            </div>
        </div>
    </div>


    <style jsx>{`
      body {
        background: #f2f2f2;
        font-family: 'proxima-nova-soft', sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .post-module {
        position: relative;
        z-index: 1;
        display: block;
        background: #FFFFFF;
        min-width: 270px;
        height: 470px;
        -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
      }
      .post-module:hover,
      .hover {
        -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
      }
      .post-module:hover .thumbnail img,
      .hover .thumbnail img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 0.6;
      }
      .post-module:hover .post-content .description,
      .hover .post-content .description {
        max-height: 100px;
      }
      .post-module .thumbnail {
        background: #000000;
        height: 400px;
        overflow: hidden;
      }
      .post-module .thumbnail .date {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        background: #e74c3c;
        width: 55px;
        height: 55px;
        padding: 12.5px 0;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        color: #FFFFFF;
        font-weight: 700;
        text-align: center;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .post-module .thumbnail .date .day {
        font-size: 18px;
      }
      .post-module .thumbnail .date .month {
        font-size: 12px;
        text-transform: uppercase;
      }
      .post-module .thumbnail img {
        display: block;
        width: 120%;
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
      }
      .post-module .post-content {
        position: absolute;
        bottom: 0;
        background: #FFFFFF;
        width: 100%;
        padding: 30px;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
      }
      .post-module .post-content .category {
        position: absolute;
        top: -34px;
        left: 0;
        background: #e74c3c;
        padding: 10px 15px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
      }
      .post-module .post-content .title {
        margin: 0;
        padding: 0 0 10px;
        color: #333333;
        font-size: 26px;
        font-weight: 700;
      }
      .post-module .post-content .sub_title {
        margin: 0;
        padding: 0 0 20px;
        color: #e74c3c;
        font-size: 20px;
        font-weight: 400;
      }
      .post-module .post-content .description {
        display: block;
        max-height: 0;
        color: #666666;
        font-size: 14px;
        line-height: 1.8em;
        -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        overflow: hidden;
      }
      .post-module .post-content .post-meta {
        margin: 30px 0 0;
        color: #999999;
      }
      .post-module .post-content .post-meta .timestamp {
        margin: 0 16px 0 0;
      }
      .post-module .post-content .post-meta a {
        color: #999999;
        text-decoration: none;
      }
      .hover .post-content .description {
        display: block !important;
        max-height: 100px !important;
        opacity: 1 !important;
      }
      .container {
        max-width: 800px;
        min-width: 640px;
        margin: 0 auto;
      }
      .container:before,
      .container:after {
        content: '';
        display: block;
        clear: both;
      }
      .container .column {
        width: 50%;
        padding: 0 25px;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        float: left;
      }
      .container .column .demo-title {
        margin: 0 0 15px;
        color: #666666;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .container .info {
        width: 300px;
        margin: 50px auto;
        text-align: center;
      }
      .container .info h1 {
        margin: 0 0 15px;
        padding: 0;
        font-size: 24px;
        font-weight: 400;
        color: #333333;
      }
      .container .info span {
        color: #666666;
        font-size: 12px;
      }
      .container .info span a {
        color: #000000;
        text-decoration: none;
      }
      .container .info span .fa {
        color: #e74c3c;
      }
      
    `}</style>
  </div>
)

export default Main
