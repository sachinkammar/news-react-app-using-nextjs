import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

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
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
    </Head>
    <div className="nav-body">
      <ul className="nav">
        <li><a href="/">Home</a><i class="circle"></i></li>
        <li><a href="/home">News</a></li>
        <li><a href="article">Article</a></li>
        <li><a href="/">Contact us</a></li>
      </ul>
    </div><br /><br />
    <div className="holder">
    <article className="container">
    <div className="col-md-8">
        <header className="header">
            <div className="category">Life</div>
            <h1 className="headline">
            The Lorem and Ipsum of Stylin&rsquo; Pancakes
            </h1>
            <div className="meta">
            <span className="meta-border"></span>
            <span className="author">by <span className="author-avatar"><img src="http://gravatar.com/avatar/6fafd1e5977a3d9fdccb7207bb1175ba" /></span><span className="author-name">Jimmy Wafflehoff</span></span>
            <span className="pub-date">Posted Sept. 22, 2015</span>
            </div>
        </header>

        <p>A pancake is a flat cake, often thin, and round, prepared from a starch-based batter that may also contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often with oil or butter. In Britain, pancakes are often unleavened,
            and resemble a crêpe. In North America, a raising agent is used (typically baking powder). The North American pancake is similar to a Scotch pancake or drop scone. Commercially prepared pancake mixes are produced in some countries.</p>
        
        <p>They may be served at any time with a variety of toppings or fillings including jam, fruit, syrup, chocolate chips, or meat. In America, they are typically considered to be a breakfast food. In Britain and the Commonwealth, they are associated with
            Shrove Tuesday, commonly known as Pancake Day, when perishable ingredients had to be used up before the fasting period of Lent began.</p>
        
        <p>Archaeological evidence suggests that pancakes are probably the earliest and most widespread cereal food eaten in prehistoric societies.<sup>[1]</sup> The pancake's shape and structure varies worldwide. A crêpe is a thin Breton pancake cooked on one or both sides
            in a special pan or crepe maker to achieve a lacelike network of fine bubbles. A well-known variation originating in Southeast Europe is Palačinke, a thin moist pancake fried on both sides and filled with jam, cheese cream, chocolate, or ground walnuts,
            but many other fillings, both sweet or savory, can also be used.</p>
        
        <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8533/pancakes.jpg" alt="American style pancakes" />
            <figcaption><strong>Figure 1.</strong> American style pancakes.</figcaption>
        </figure>
        <h2>History</h2>
        <p>
            The Ancient Greeks made pancakes called τηγανίτης (tēganitēs), ταγηνίτης (tagēnitēs)<sup>[2]</sup> or ταγηνίας (tagēnias),<sup>[3]</sup> all words deriving from τάγηνον (tagēnon), "frying pan".<sup>[4]</sup> The earliest attested references on tagenias are in the works of the 5th century BC poets Cratinus<sup>[5]</sup> and Magnes.<sup>[6]</sup> Tagenites were made with wheat flour, olive oil, honey, and curdled milk, and were served for breakfast.
        </p>
        <h2>Regional varieties</h2>
        <h3>Africa</h3>
        <p>Lahoh is a pancake-like bread originating in Somalia, Djibouti and Yemen.[18][19] It is often eaten along with honey, ghee and tea. During lunch, lahoh is sometimes consumed with curry, soup or stew.</p>
        <h3>Europe</h3>
        <p>Eastern-Slavic cuisines have a long tradition of pancake cooking and include a large variety of pancake types. In Belarus, Russia and Ukraine, pancakes may be breakfast food, appetizer, main course, or even dessert.</p>
        <figure>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8533/nalesniki.jpg" alt="Polish nalesniki" />
            <figcaption><strong>Figure 2.</strong> Polish style stuffed crepes.</figcaption>
        </figure>
        <h3>Asia</h3>
        <p>Banana pancakes are a menu item in Western-oriented backpackers' cafes in Asian countries such as Thailand, Cambodia, Vietnam, India, and China. This has elicited the term Banana Pancake Trail.</p>
        <h3>Americas</h3>
        <p>American and Canadian pancakes (sometimes called hotcakes, griddlecakes, or flapjacks) are usually served at breakfast, in a stack of two or three pancakes topped with real or artificial maple syrup and butter, and often served with sides such as bacon, toast, eggs or sausage. Other popular topping alternatives include jam, peanut butter, nuts, fruit, honey, powdered sugar, whipped cream, cane syrup, and molasses.</p>
        <h2>Common Ingridients</h2>
        <p>A <code>ul</code> tag is a good example of why you should set good default <code>font-size</code> and <code>line-height</code> above the context of simply paragraph tags. Let any sort of article content get sizing from its parents.</p>
        <ul>
            <li>Eggs</li>
            <li>Flour or other starchy base.</li>
            <li>Pure deliciousness.</li>
        </ul> 
        </div>
        <div className="col-md-4">      
            <div className="widget-sidebar">
              <h2 className="title-widget-sidebar">// RECENT POST</h2>
                <div className="content-widget-sidebar">
                <ul>
                  <li className="recent-post">
                    <div className="post-img">
                      <img src="https://lh3.googleusercontent.com/-ndZJOGgvYQ4/WM1ZI8dH86I/AAAAAAAADeo/l67ZqZnRUO8QXIQi38bEXuxqHfVX0TV2gCJoC/w424-h318-n-rw/thumbnail8.jpg" className="img-responsive" />
                      </div>
                      <a href="#"><h5>Excepteur sint occaecat cupi non proident laborum.</h5></a>
                      <p><small><i className="fa fa-calendar" data-original-title="" title=""></i> 30 Juni 2014</small></p>
                    </li>
                    <hr />
                    
                    <li className="recent-post">
                    <div className="post-img">
                      <img src="https://lh3.googleusercontent.com/-ojLI116-Mxk/WM1ZIwdnuwI/AAAAAAAADeo/4K6VpwIPSfgsmlXJB5o0N8scuI3iW4OpwCJoC/w424-h318-n-rw/thumbnail6.jpg" className="img-responsive" />
                      </div>
                      <a href="#"><h5>Excepteur sint occaecat cupi non proident laborum.</h5></a>
                      <p><small><i className="fa fa-calendar" data-original-title="" title=""></i> 30 Juni 2014</small></p>
                    </li>
                    <hr />
                    
                    <li className="recent-post">
                    <div className="post-img">
                      <img src="https://lh3.googleusercontent.com/-TrK1csbtHRs/WM1ZI1SIUNI/AAAAAAAADeo/OkiUjuad6skWl9ugxbiIA_436OwsWKBNgCJoC/w424-h318-n-rw/thumbnail3.jpg" className="img-responsive" />
                      </div>
                      <a href="#"><h5>Excepteur sint occaecat cupi non proident laborum.</h5></a>
                      <p><small><i className="fa fa-calendar" data-original-title="" title=""></i> 30 Juni 2014</small></p>
                    </li>
                    <hr />
                    
                    <li className="recent-post">
                    <div className="post-img">
                      <img src="https://lh3.googleusercontent.com/-UKfIhJSBW9M/WM1ZI8ou34I/AAAAAAAADeo/vlLGY29147AYLaxUW29ZXJlun115BhkhgCJoC/w424-h318-n-rw/thumbnail7.jpg" className="img-responsive" />
                      </div>
                      <a href="#"><h5>Excepteur sint occaecat cupi non proident laborum.</h5></a>
                      <p><small><i className="fa fa-calendar" data-original-title="" title=""></i> 30 Juni 2014</small></p>
                    </li>
                    
                    
                </ul>
              </div>
              </div>
        </div> 
    </article>
    </div>
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i')
        * { box-sizing: border-box; }
        .holder {
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(0,0,0,.7);
        }
        .category {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 1.5rem;
          color: rgba(0,0,0,.35);
        }
        .author-avatar img {
          width: 30px;
          margin: 0 .5rem;
          border-radius: 15px;
          position: relative;
          top: .7rem;
        }
        .meta .author, .meta .pub-date { 
          /*display: block;*/
          font-weight: 900;
          font-size: .7rem;
          text-transform: uppercase;
          color: rgba(0,0,0,.35);
        }
        .meta-border {
          margin: 2rem 0;
          width: 10rem;
          height: .5rem;
          background: rgba(0,0,0,.7);
          display: block;
        }
        h1 { font-size: 3.5rem; font-weight: 900; margin: 1rem 0; line-height: 1.1;  }
        h2 { font-size: 2.5rem; }
        h3 { font-size: 2rem; }
        p { font-size: 1.25rem; }
       .article { padding: 0 1rem; margin: 0 auto; }
        img { max-width: 100%; }
        /*
         navigation
       */
      .nav-body {
        padding-right: 100px; 
        font: 500 16px/1.2 Lato;
        float:right
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
         padding: 0px 18px; /*2*/
         text-decoration: none; /*3*/
         color: #000; /*4*/
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
         border-color: #E74C3C;
       }
       /*recent-post-col////////////////////*/
.widget-sidebar {
    background-color: #fff;
    padding: 20px;
    margin-top: 30px;
}

.title-widget-sidebar {
    font-size: 14pt;
    border-bottom: 2px solid #e5ebef;
    margin-bottom: 15px;
    padding-bottom: 10px;    
    margin-top: 0px;
}

.title-widget-sidebar:after {
    border-bottom: 2px solid #f1c40f;
    width: 150px;
    display: block;
    position: absolute;
    content: '';
    padding-bottom: 10px;
}

.recent-post{width: 100%;height: 80px;list-style-type: none;}
.post-img img {
    width: 100px;
    height: 70px;
    float: left;
    margin-right: 15px;
    border: 5px solid #16A085;
    transition: 0.5s;
}

.recent-post a {text-decoration: none;color:#34495E;transition: 0.5s;}
.post-img, .recent-post a:hover{color:#F39C12;}
.post-img img:hover{border: 5px solid #F39C12;}
    `}</style>
  </div>
)

export default Article
