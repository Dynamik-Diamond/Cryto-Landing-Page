import { useEffect } from 'react';
import { styles, layout } from '../../style';
import { SubscribeBtn } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <article
      className={` flex-col md:flex-row subscribe-container text-center md:text-left  bg-ButtonColor max-w-[1200px] p-6 md:py-16 px-16 rounded-t-[10px] rounded-b-[10px]`}
      data-aos="fade-up"
    >
      {/* subscribe info */}
      <div className="space-y-3">
        <h3 className={`${styles.heading3}`}>
          Start mining now
        </h3>
        <p className={`${styles.paragraph} max-w-[348px]`}>
          Join now with CRAPPO to get the latest news and
          start mining now
        </p>
      </div>
      {/* subscribe input and button*/}
      <form className={`form`}>
        <div className="form-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <SubscribeBtn />
      </form>
    </article>
  );
};

export default Subscribe;
