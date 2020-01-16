import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';


const images = [
  '/static/imgs/water9s.jpg',
  '/static/imgs/water10s.jpg',
  '/static/imgs/water12s.jpg',
  '/static/imgs/water13s.jpg'
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