import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';


const images = [
  '/static/image/water9S.jpg',
  '/static/image/water10S.jpg',
  '/static/image/water12S.jpg',
  '/static/image/water13S.jpg'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Alkamerica</h1>
        <div>Alkaline Water for America – Invest in Your Health</div>
        <Link href="/services">
          <a className="view-more">What we offer</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <Link href= '/services'>
        What is Alkline Water?</Link>
      <Gallery images={images} />
      <div className="">
        <Link href="/services">
          <a className="view-more">More Info</a>
        </Link>
        <Link href="/contactform">
          <a className="view-more">Contact Us</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;