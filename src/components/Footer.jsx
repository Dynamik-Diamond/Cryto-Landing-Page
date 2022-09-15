import { logo } from '../assets';
import {
  footerLinks,
  socialMedia,
  cardIcons,
} from '../constants/data';
import { styles } from '../style';

const Footer = () => {
  return (
    <footer className="bg-Background py-[5rem] px-0">
      {/* Footer container */}
      <div className="container text-white text-center lg:text-left  ">
        {/* link items */}
        <div className="grid place-items-center gap-6 lg:gap-[4.5rem] lg:place-items-start  lg:grid-cols-3">
          {/* footer image */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* Footer links */}
          <div className="grid lg:grid-cols-2 gap-[1.5rem] lg:gap-[3rem] ">
            {footerLinks.map(footerLink => {
              return (
                <article
                  key={footerLink.title}
                  className=""
                >
                  <h3 className=" text-[20px] leading-[30px] mb-6">
                    {footerLink.title}
                  </h3>
                  <ul>
                    {footerLink.links.map((link, index) => {
                      return (
                        <li
                          key={link.name}
                          className={`${
                            index ===
                            footerLink.links.length - 1
                              ? 'mb:0'
                              : 'mb-3'
                          }`}
                        >
                          <a href={link.link}>
                            {link.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
          {/* end of Footer links */}
          {/* footer tagline */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            <h4 className={`${styles.heading3}`}>
              We accept following payment systems
            </h4>
            {/* Tagline icons */}
            <div className="flex gap-3">
              {cardIcons.map(icon => {
                return (
                  <img
                    key={icon.id}
                    src={icon.img}
                    alt={icon.id}
                  />
                );
              })}
            </div>
            {/* end of  Tagline icons */}
          </div>
          {/* end of footer tagline */}
        </div>
        {/* end of link items */}
        {/* copy right and social media icons */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 lg:space-y-0 mt-8 md:mt-16 ">
          <p>©2021 CRAPPO. All rights reserved</p>
          <ul className="flex gap-6 items-center md:self-start">
            {socialMedia.map((social, index) => (
              <a href={social.link} key={social.id}>
                <img src={social.logo} alt={social.id} />
              </a>
            ))}
          </ul>
        </div>
        {/* end of copy right and social media icons */}
      </div>
      {/* End of Footer container */}
    </footer>
  );
};

export default Footer;
