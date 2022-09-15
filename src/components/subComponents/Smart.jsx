import { useEffect } from 'react';
import { styles, layout } from '../../style';
import { featureImg01 } from '../../assets';
import { LearnMore } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Smart = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <article className="container">
      <div
        className={`${layout.section} justify-between py-20 sm:items-center gap-[5rem] lg:gap-0 sm:pt-10`}
      >
        {/* smart info */}
        <div
          className={`space-y-[1.25rem] lg:space-y-[1rem] text-center lg:text-left`}
        >
          <h3
            className={`${styles.heading3} text-white lg:w-[480px]`}
          >
            Invest Smart
          </h3>
          <p
            className={`${styles.paragraph} text-textColor pb-4 lg:w-[400px]`}
          >
            Get full statistic information about the
            behaviour of buyers and sellers will help you to
            make the decision.
          </p>
          <LearnMore />
        </div>
        {/* smart image */}
        <article>
          <img
            src={featureImg01}
            alt="featureImg01"
            className={`${styles.img}`}
            data-aos="flip-up"
          />
        </article>
      </div>
    </article>
  );
};

export default Smart;
