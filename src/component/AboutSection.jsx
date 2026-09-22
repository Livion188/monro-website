function AboutSection() {
  return (
    <div className="text-mist-800 text-center">
      <div className=" w-full h-106 items-center justify-center flex">
        <img src="../src/assets/unsplash.jpg" className="w-50 rounded-2xl" alt="" />
      </div>
      <h1 className="text-2xl font-bold my-3">About Us</h1>
      <h3 className="text-xl font-semibold mb-2">Style that feels like you.</h3>
      <p className="text-sm mb-3">
        We believe fashion should be effortless, expressive, and accessible.
        <br></br> Our collection brings together timeless pieces and modern
        trends <br></br>designed to help you look good and feel confident
        everyday
      </p>
      <ul className="text-sm font-semibold font-serif mb-3">
        <li>
          <i class="bi bi-stars"></i>Quality Pieces - Carefully selected styles
          made to last
        </li>
        <li>
          👗Everyday Style - Fashion that's easy to wear and easy to love.
        </li>
        <li>
          <i class="bi bi-heart"></i>Made for you - Pieces that let your
          personality shine.
        </li>
      </ul>
    </div>
  );
}

export default AboutSection;
