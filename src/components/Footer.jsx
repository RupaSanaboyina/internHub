const Footer = () => {
    return (
      <footer className="bg-[#1A1916] text-white py-6 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-lg font-semibold mb-3 text-[#C2BDBD]">stay connected with us</h3>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 text-blue-500 text-2xl mb-4">
            <a href="https://www.instagram.com/zoomsterhubofficial/" className="hover:text-blue-400 cursor-pointer"><i className="ri-instagram-line text-3xl"></i></a> {/* Instagram Icon */}
            <a href="https://www.linkedin.com/company/official-zoomster-hub-opc-private-limited/posts/?feedView=all" className="hover:text-blue-400"><i className="ri-linkedin-box-line text-3xl"></i></a> {/* LinkedIn Icon */}
            <a href="https://www.facebook.com/officialzoomsterhub" className="hover:text-blue-400"><i className="ri-facebook-box-line text-3xl"></i></a> {/* Facebook Icon */}
          </div>
          
          {/* Links */}
          <div className="text-sm text-gray-400 space-x-4 mb-3">
            <a href="#" className="hover:text-gray-200">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-200">FAQs</a>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-gray-500">© 2025 Zoomsterhub | All Rights Reserved | Designed & Developed by Zoomsterhub</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  