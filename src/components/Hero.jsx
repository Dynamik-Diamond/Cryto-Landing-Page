import { useEffect } from 'react';
import { layout } from '../style';
import { styles } from '../style';
import { TryButton } from './Buttons';
import { heroImg } from '../assets';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <article className="container .hero">
      <div
        className={`flex flex-col lg:flex-row justify-between md:items-center gap-[5rem] lg:gap-0 pt-6 lg:pt-0`}
      >
        {/* hero info */}
        <article
          className="space-y-6 md:space y"
          data-aos="zoom-in"
        >
          {/* flex discount */}
          <div className="flex flex-1 items-center space-x-2  md:space-x-4 py-[0.2em] px-[0.2em] text-white bg-LightBlue rounded-full max-w-[340px]">
            <span className="py-[0.2em] px-[0.5em] bg-white text-Background rounded-full font-medium text-[0.85rem] md:text-[1rem]">
              75% SAVE
            </span>
            <p
              className={`${styles.paragraph} text-[0.85rem] md:text-[1rem]`}
            >
              For the Black Friday weekend
            </p>
          </div>
          {/* hero main text */}
          <h1
            className={`${styles.heading1} text-white sm:w-[588px]`}
          >
            Fastest & secure platform to invest in crypto
          </h1>
          {/* hero paragraph */}
          <p
            className={`${styles.paragraph} text-textColor sm:w-[435px] `}
          >
            Buy and sell cryptocurrencies, trusted by 10M
            wallets with over $30 billion in transactions.
          </p>
          {/* hero button */}
          <TryButton />
        </article>
        {/* end of hero info */}
        {/* smart image */}
        <article>
          <img
            src={heroImg}
            alt="Hero image"
            className={`${styles.img} self-center  md:h-[500px] `}
            data-aos="flip-up"
          />
        </article>
      </div>
    </article>
  );
};

export default Hero;
