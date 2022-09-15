import { useState, useEffect } from 'react';
import { styles } from '../style';
import { cards } from '../constants/data';
import { BiChevronRightCircle } from 'react-icons/bi';
import { StartMining } from './Buttons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Trade = () => {
  const [isHovering, setIsHovering] = useState('');

  return (
    <section className="container pt-[20rem] md:pt-[20rem] lg:pt-[15rem] sm:py-32 space-y-6 sm:space-y-16 ">
      {/* Heading */}
      {/* title */}
      <article
        className={`${styles.flexCenter} text-center space-y-6 sm:space-y-16 `}
      >
        <h2
          className={`${styles.heading2} max-w-[741px]`}
          data-aos="zoom-in"
        >
          Trade securely and market the high growth
          cryptocurrencies.
        </h2>
      </article>
      {/* cards */}
      {/* cards container */}
      <article className={`${styles.flexCenter}`}>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 `}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              onMouseOver={() =>
                setIsHovering(card.smTitle)
              }
              onMouseOut={() => setIsHovering(' ')}
              className={`box ${
                styles.flexCenter
              } text-center space-y-6 py-12 px-1 rounded-t-[1rem] rounded-b-[1rem] ${
                index === cards.length - 1
                  ? 'mb-0'
                  : 'mb-10 sm:mb-0'
              } hover:bg-SecondaryBlue hover:text-white`}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src={card.img}
                alt={card.id}
                className={`w-[80px] h-[80px]`}
              />
              <h3 className={`font-bold text-[2rem]`}>
                {card.title}{' '}
                <span className="text-[18px] text-#BDBDBD opacity-[0.7] ">
                  {card.smTitle}
                </span>
              </h3>
              <p
                className={`${styles.paragraph} text-textdim max-w-[322px]`}
              >
                {card.text}
              </p>
              {isHovering === card.smTitle && (
                <StartMining />
              )}
              {!(isHovering === card.smTitle) && (
                <img src={card.iconImg} alt="" />
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Trade;
