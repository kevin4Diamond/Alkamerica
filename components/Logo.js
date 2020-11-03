import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src='/static/image/logo.jpg' />
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 180px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;