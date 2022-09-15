import { useEffect } from 'react';
import { styles } from '../../style';
import { Calculate } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Earn = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={`container space-y-12 translate-y-60 lg:translate-y-40 -mt-[10rem] lg:-mt-[6rem] `}
    >
      {/* Heading */}
      <article
        className={`text-center grid md:place-content-center space-y-6 sm:space-y-6 `}
      >
        <h2
          className={`${styles.heading2} text-white`}
          data-aos="zoom-in"
        >
          Check how much you can earn
        </h2>
        <p
          className={`${styles.paragraph} text-textColor max-w-[622px]`}
          data-aos="fade-up"
        >
          Let’s check your hash rate to see how much you
          will earn today, Exercitation veniam consequat
          sunt nostrud amet.
        </p>
      </article>
      {/* End of heading */}
      {/* Box with input and Prices */}
      <div className="max-w-[942px] mx-auto w-full bg-white rounded-2xl space-y-16 p-8 drop-shadow-lg ">
        {/* Input and button */}
        {/* subscribe input and button*/}
        <form className="lg:grid lg:grid-cols-2 gap-16 items-center justify-center space-y-6 lg:space-y-0">
          {/* subscribe info */}
          <div className="space-y-6 lg:space-y-0">
            <div className="">
              <input
                type="email"
                placeholder="Enter your hash rate"
                className="input"
              />
            </div>
          </div>
          <div className="lg:flex flex-col items-center  gap-12 lg:flex-row  space-y-6 lg:space-y-0">
            <select className="select">
              <option value="TH/s">TH/s</option>
              <option value="H/s">H/s</option>
              <option value="kH/s">kH/s</option>
              <option value="GH/s">GH/s</option>
            </select>
            <Calculate />
          </div>
        </form>
        {/* End of Input and button */}
        {/* subcribe info text */}
        {/* Earn Info */}
        <article className="space-y-3 text-left">
          <h4
            className={`${styles.heading4} text-ButtonColor`}
          >
            ESTIMATED 24 HOUR REVENUE:
          </h4>
          <h3 className={`${styles.heading3}`}>
            0.055 130 59 ETH{' '}
            <span className="text-ButtonColor">
              ($1275)
            </span>
          </h3>
          <p className={`${styles.paragraph} text-textdim`}>
            Revenue will change based on mining difficulty
            and Ethereum price.
          </p>
        </article>

        {/* subcribe info text */}
      </div>
      {/* End of Box with input and Prices */}
    </section>
  );
};

export default Earn;
