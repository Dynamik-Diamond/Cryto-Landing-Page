import { useEffect } from 'react';
import { styles, layout } from '../../style';
import { featureImg03 } from '../../assets';
import { LearnMore } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Grow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <article className="container">
      <div
        className={`${layout.section} gap-[5rem] lg:gap-0 justify-between py-20 :items-center lg:pt-10`}
      >
        {/* smart info */}
        <div
          className={`space-y-[1.25rem] lg:space-y-[1rem] text-center lg:text-left`}
        >
          <h3 className={`${styles.heading3} text-white`}>
            Grow your profit and track your investments
          </h3>
          <p
            className={`${styles.paragraph} text-textColor pb-4 lg:w-[400px]`}
          >
            Use advanced analytical tools. Clear TradingView
            charts let you track current and historical
            profit investments.
          </p>
          <LearnMore />
        </div>
        {/* smart image */}
        <article>
          <img
            src={featureImg03}
            alt="featureImg03"
            className={`${styles.img}`}
            data-aos="flip-up"
          />
        </article>
      </div>
    </article>
  );
};

export default Grow;
