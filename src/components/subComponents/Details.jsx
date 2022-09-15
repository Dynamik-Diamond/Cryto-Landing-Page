import { useEffect } from 'react';
import { styles, layout } from '../../style';
import { featureImg02 } from '../../assets';
import { LearnMore } from '../Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <article className="container">
      <div
        className={`${layout.sectionReverse} justify-between gap-[5rem] py-20 sm:items-center lg:pt-10`}
      >
        {/* smart image */}
        <article>
          <img
            src={featureImg02}
            alt="featureImg01"
            className={`${styles.img}`}
            data-aos="flip-up"
          />
        </article>
        {/* smart info */}
        <div
          className={`space-y-[1.25rem] lg:space-y-[1rem] text-center lg:text-left`}
        >
          <h3 className={`${styles.heading3} text-white`}>
            Detailed Statistics
          </h3>
          <p
            className={`${styles.paragraph} text-textColor pb-4 lg:w-[400px]`}
          >
            View all mining related information in realtime,
            at any point at any location and decide which
            polls you want to mine in.
          </p>
          <LearnMore />
        </div>
      </div>
    </article>
  );
};

export default Details;
