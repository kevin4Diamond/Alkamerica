import Layout from '../../components/Layout';

const art = () => (
  <Layout>
    <h1>art</h1>
    <ul className="company-info">
      <li>
        <span className="company">Alkamerica</span>
      </li>
      <li>555 Main St.</li>
      <li>Irvine, CA</li>
    </ul>
    <div className="about-text">
      <img src="/static/image/water5.jpg" />
      <p>
        This is something about art
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

export default art;