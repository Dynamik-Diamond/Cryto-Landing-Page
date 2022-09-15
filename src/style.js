export const styles = {
  heading1:
    'font-bold text-[2rem] sm:text-[4rem] md:leading-[76px]',
  heading2:
    'font-bold text-[1.9rem] md:text-[2.5rem]  leading-[40px] md:leading-[60px] ',
  heading3: 'font-bold text-[2rem] leading-[38px]',
  heading4:
    'font-medium text-[1rem] leading-[24px] tracking-[0.04em]',

  paragraph:
    'font-Rubik font-normal text-White text-[1rem] leading-[28px] tracking-[0.01em]',

  flexCenter: 'flex justify-center items-center flex-col ',
  flexStart: 'flex justify-center items-start',
  flexBetween: ' flex flex-wrap md:justify-between',

  ButtonPadding: 'py-14px px-16px',
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6 ',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  img: 'object-cover block w-full m-w-[100%] ',
};

export const layout = {
  section: `flex flex-col lg:flex-row ${styles.paddingY}`,
  sectionReverse: `flex flex-col-reverse lg:flex-row ${styles.paddingY}`,

  grid: 'grid gap-[1rem] lg:gap-[10rem] md:grid-cols-3',
};
