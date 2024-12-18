import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white md:h-[27rem]">
      {/* Waves SVG */}
      <div className="absolute inset-x-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#4F46E5"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,229.3C672,203,768,149,864,133.3C960,117,1056,139,1152,170.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#4338CA"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,106.7C672,75,768,53,864,74.7C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="relative z-10 container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-4">Explore</h6>
          <ul>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Popular Campaigns</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">New Projects</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Fundraising Categories</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Success Stories</a>
            </li>
          </ul>
        </nav>

        {/* About Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-4">About Us</h6>
          <ul>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">How It Works</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Our Mission</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Press & Media</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Support Section */}
        <nav>
          <h6 className="text-lg font-semibold mb-4">Support</h6>
          <ul>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">FAQs</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2 hover:text-blue-200 transition-colors">
              <a href="#">Help Center</a>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <nav>
          <h6 className="text-lg font-semibold mb-6">Follow Us</h6>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>

      {/* Footer Bottom */}
      <div className="text-center py-4 bg-blue-800 text-blue-300">
        © 2024 Fund Star. Empowering Ideas Together.
      </div>
    </div>
  );
};

export default Footer;
