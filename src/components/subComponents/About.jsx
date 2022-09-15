import { useEffect } from 'react';
import { whyImg } from '../../assets';
import { styles, layout } from '../../style';
import { LearnMore } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={`container ${layout.sectionReverse} justify-between items-center py-20`}
    >
      {/* about image */}
      <article className="self-center">
        <img
          src={whyImg}
          alt="why image"
          className={styles.img}
          data-aos="slide-right"
        />
      </article>

      {/* about info */}
      <article
        className="space-y-6 text-center lg:text-left"
        data-aos="zoom-in"
      >
        <h2
          className={`${styles.heading2} text-white lg:w-[480px]`}
        >
          Why you should choose CRAPPO
        </h2>
        <p
          className={`${styles.paragraph} text-textColor pb-4 lg:w-[400px]`}
        >
          Experience the next generation cryptocurrency
          platform. No financial borders, extra fees, and
          fake reviews.
        </p>
        <LearnMore />
      </article>
    </section>
  );
};

export default About;
