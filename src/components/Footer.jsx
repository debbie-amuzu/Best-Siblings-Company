import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-gold-400">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link to="/about" className="text-base hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/blog" className="text-base hover:text-white">
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-base hover:text-white">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="#" className="text-base hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="#" className="text-base hover:text-white">
              Terms of Service
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <Link to="https://www.facebook.com/share/1CYkK4Hxjh/?mibextid=wwXIfr">
                    <FaFacebook className="text-gold-600 text-xl" />
                  </Link>
                  <Link to="https://www.instagram.com/bestsiblingscom.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <FaInstagram className="text-gold-600 text-xl" />
                  </Link>
                  <Link
                    to="#">
                    <FaLinkedin className="text-gold-600 text-xl" />
                  </Link>
                  <Link
                    to="#"
                  >
                    <FaXTwitter className="text-gold-600 text-xl" />
                  </Link>
        </div>
          
          <p className="mt-8 text-center text-sm">Lashibi Comm 17 Behind transcort house</p>

        <p className="mt-8 text-center  italic">
          &copy; {new Date().getFullYear()} Best Siblings Company. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;