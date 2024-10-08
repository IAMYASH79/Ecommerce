const HeroSection = () => {
  return (
    <main className="hero continer">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>

      <div className="">
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="Website\src\assets\flipkart.png" alt="flipkart" />
          </div>
          <img src="/images/amazon.png" alt="amazon" />
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
