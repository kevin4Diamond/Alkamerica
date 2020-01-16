import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <ul className="company-info">
      <li>
        <span className="company">Alkamerica</span>
      </li>
      <li>555 Main St.</li>
      <li>Irvine, CA</li>
    </ul>
    <div className="about-text">
      <img src="/static/imgs/water5.jpg" />
      <p>
        We are in the age of environmental changes. Alkamerica is a true believer of healthy living as we have faith in preventive measures rather than having to wait for  problems to arrive then seeking for the cures. There are many alkaline machines in the market, but Alkamerica trusts in Japanese technology. We stand by the quality of our products and our excellent customer service as we present only the best to our customers.
      </p>

    </div>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;