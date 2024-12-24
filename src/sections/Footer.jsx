const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/AShivan26?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/AniruddhaS13" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/aniruddha-shivananda/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkdin.svg" alt="linkedin" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Aniruddha Shivananda. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
