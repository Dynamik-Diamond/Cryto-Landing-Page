import { stats } from '../../constants/data';
import { styles, layout } from '../../style';
const Stats = () => (
  <section className="container mt-24 md:mt-36">
    <div
      className={`flex flex-col md:flex-row justify-between`}
    >
      {stats.map((stat, index) => {
        return (
          <article
            key={stat.id}
            className={`flex sm:flex-row items-center gap-[1.5rem] ${
              index === stats.length - 1
                ? 'mb-0 sm:mb-0'
                : 'mb-6 sm:mb-0'
            }`}
          >
            <img
              src={stat.img}
              alt={stat.id}
              className={`object-contain`}
            />
            <div>
              <h2
                className={`text-White ${styles.heading2}`}
              >
                {stat.num}
              </h2>
              <p className="text-textColor">{stat.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Stats;
