import { useEffect } from 'react';
import { styles, layout } from '../style';
import Smart from './subComponents/Smart';
import Details from './subComponents/Details';
import Grow from './subComponents/Grow';
import Subscribe from './subComponents/Subscribe';

import Aos from 'aos';
import 'aos/dist/aos.css';

const market = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={`container py-6 mt-6 md:py-32 space-y-6 md:space-y-16 text-white font-Rubik `}
    >
      <article
        className={`${styles.flexCenter} text-center space-y-6 md:space-y-16 `}
      >
        <h2
          className={`${styles.heading2} max-w-[758px]`}
          data-aos="zoom-in"
        >
          Market sentiments, portfolio, and run the
          infrastructure of your choice
        </h2>
      </article>
      <Smart />
      <Details />
      <Grow />
      <Subscribe />
    </section>
  );
};

export default market;
