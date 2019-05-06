import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

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
    </Head>
    <div className="nav-body">
      <ul className="nav">
        <li><a href="">Home</a><i class="circle"></i></li>
        <li><a href="/home">News</a></li>
        <li><a href="article">Article</a></li>
        <li><a href="/">Contact us</a></li>
      </ul>
    </div><br /><br />
    <div className="container">
      <div className="posts">
        
        <div className="posts__item posts__item--main">
          <div className="posts__image">
            <img src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Post image" />
          </div>
          <div className="posts__information">
            <div className="posts__date">
              November 28, 2015
            </div>
            <div className="posts__title">
              <a href="#">Fantastic Designs Of 2015 Concept Cars</a>
            </div>
          </div>
        </div>
        
        <div className="posts__item">
          <div className="posts__image">
            <img src="https://images.unsplash.com/photo-1541654056076-0a252e083078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0973edee71e034b2da232c4f4fe99cef&auto=format&fit=crop&w=500&q=60" alt="Post image" />
          </div>
          <div className="posts__information">
            <div className="posts__date">
              November 24, 2015
            </div>
            <div className="posts__title">
              <a href="#">How To Find Design Inspiration In The Simple Things Around You</a>
            </div>
            <div className="posts__author">
              <a href="#">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="posts__item">
          <div className="posts__image">
            <img src="https://images.unsplash.com/photo-1541636752-a5ace3a8a2d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3d5ec3f81c8ab31d1e7b0809ad178a6&auto=format&fit=crop&w=500&q=60" alt="Post image" />
          </div>
          <div className="posts__information">
            <div className="posts__date">
              November 18, 2015
            </div>
            <div className="posts__title">
              <a href="#">The Only Guide To Choosing Website Photos You’ll Ever Need</a>
            </div>
            <div className="posts__author">
              <a href="#">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="posts__item">
          <div className="posts__image">
            <img src="https://images.unsplash.com/photo-1541618236-90386f48b9ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89485d218a2ffb816d895360eddd817d&auto=format&fit=crop&w=500&q=60" alt="Post image" />
          </div>
          <div className="posts__information">
            <div className="posts__date">
              November 08, 2015
            </div>
            <div className="posts__title">
              <a href="#">Growth Hack Your Way to a Successful Freelance Career</a>
            </div>
            <div className="posts__author">
              <a href="#">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="posts__item">
          <div className="posts__image">
            <img src="https://images.unsplash.com/photo-1541473246607-0676be857916?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b85ddefa8f867ff9eaf62129d5f1f045&auto=format&fit=crop&w=500&q=60" alt="Post image" />
          </div>
          <div className="posts__information">
            <div className="posts__date">
              November 08, 2015
            </div>
            <div className="posts__title">
              <a href="#">Get 80% Off DSLR Photography Course Bundle</a>
            </div>
            <div className="posts__author">
              <a href="#">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Open+Sans:600,700");
      * {
        margin: 0;
        padding: 0;
      }
      
      .bodyp {
        margin:-8px;
        padding:0;
        background: linear-gradient(to right, #00dbde, #fc00ff) !important;
      }
      
      .container {
        max-width: 1200px;
        min-width: 320px;
        padding: 100px 0;
        margin: 0 auto;
      }
      
      .posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .posts__item {
        display: flex;
        flex-direction: column;
        flex-basis: 32%;
        background-color: #fff;
        margin-bottom: 22px;
        position: relative;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      }
      .posts__item--main {
        flex-basis: 66%;
      }
      .posts__item--main:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      }
      .posts__item--main .posts__image {
        display: flex;
        flex-grow: 1;
      }
      .posts__item--main .posts__information {
        position: absolute;
        bottom: 35px;
        left: 50px;
        padding: 0 25px 0 0;
        z-index: 1;
      }
      .posts__item--main .posts__title a {
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.75px;
        color: #fff;
      }
      .posts__image > img {
        display: block;
        width: 100%;
      }
      .posts__information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px 25px;
        flex-grow: 1;
      }
      .posts__date {
        font-size: 13px;
        line-height: 30px;
        letter-spacing: 0.325px;
        color: #818181;
        text-transform: uppercase;
        font-weight: 600;
        margin: 7px 0;
      }
      .posts__title {
        margin-top: 7px;
        margin-bottom: auto;
      }
      .posts__title a {
        font-size: 22px;
        line-height: 30px;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.55px;
      }
      .posts__title a:hover {
        text-decoration: underline;
      }
      .posts__author {
        margin-top: 55px;
      }
      .posts__author img {
        border-radius: 50px;
        width: 60px;
      }
      
      @media screen and (max-width: 992px) {
        .posts__information {
          padding: 10px 15px 15px 15px;
        }
      
        .posts__date {
          font-size: 12px;
        }
      
        .posts__title a {
          font-size: 16px;
          line-height: 24px;
        }
      
        .posts__item--main .posts__information .post-title a {
          font-size: 20px;
          line-height: 26px;
        }
      }
      @media screen and (max-width: 768px) {
        .posts__item {
          flex-basis: 49%;
        }
      
        .posts__item--main {
          flex-basis: 100%;
          justify-content: center;
        }
        .posts__item--main .posts__image {
          display: block;
        }
        .posts__item--main .posts__information {
          width: 100%;
          bottom: auto;
          left: auto;
          align-items: center;
          text-align: center;
          padding: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .posts__item {
          flex-basis: 100%;
        }
      }
      /*
         navigation
       */
      .nav-body {
        padding-right: 100px; 
        font: 500 16px/1.2 Lato;
        float:right;
        display:block
       }
       .nav {
         list-style: none;
       }
       
       /*
         nav list items
         1. side by side
         2. needed for circle positioning
       */
       .nav li {
         float: left; /*1*/
       }
       
       /*
         nav link items
       */
       .nav > li a {
         display: block; /*1*/
         padding: 15px 18px; /*2*/
         text-decoration: none; /*3*/
         color: #fff; /*4*/
         transition: all ease .5s;
         opacity:0.7
       }
       
       /*
         fade out all links on ul hover
       */
       .nav:hover > li a {
         opacity: .5;
         transition: all ease .5s;
       }
       
       /*
         override previous rule to highlight current link
       */
       .nav > li:hover a {
         opacity: 1;
         color: #fff;
         border-color: #E74C3C;
       }
    `}</style>
  </div>
)

export default Home
