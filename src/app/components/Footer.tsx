const Footer: React.FC = () => {
  return (
    <div className=" bg-neutral-800 mt-16">
      <footer className="footer container mx-auto  sm:footer-horizontal  text-base-content p-10 ">
        <nav className="text-neutral-300">
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">Our stroy</a>
          <a className="link link-hover">Blogs</a>
        </nav>
        <nav className="text-neutral-300">
          <h6 className="footer-title">Help</h6>
          <a className="link link-hover">Shipping & Returns</a>
          <a className="link link-hover">Track Order</a>
          <a className="link link-hover">FAQs</a>
        </nav>
        <nav className="text-neutral-300">
          <h6 className="footer-title">Contact</h6>
          <p>Phone:</p>
          <p>(+1) 123 456 7893</p>
          <p>Email:</p>
          <p>name@email.com</p>
        </nav>
        <form>
          <h6 className="footer-title">Receive new promotions</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
