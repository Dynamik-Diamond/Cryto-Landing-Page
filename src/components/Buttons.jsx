import { FaChevronCircleRight } from 'react-icons/fa';

export const RegisterButton = () => {
  return (
    <button className="register bg-ButtonColor py-[0.875em] px-[2em] rounded-full">
      <a href="#">Register</a>
    </button>
  );
};

export const TryButton = () => {
  return (
    <button className=" flex gap-3 items-center bg-ButtonColor text-white py-[0.875em] px-[2em] rounded-full">
      <a href="#">Try for FREE</a>
      <FaChevronCircleRight
        color="white"
        fontSize="1.5rem"
      />
    </button>
  );
};

export const LearnMore = () => {
  return (
    <button className="bg-ButtonColor text-white py-[0.875em] px-[2em] rounded-full">
      <a href="#">Learn More</a>
    </button>
  );
};

export const SubscribeBtn = () => {
  return (
    <button className="subscribeBtn bg-white text-[1.125rem] font-medium text-SubscribeBtn py-[0.875em] px-[2em] rounded-full">
      <a href="#">Subscribe</a>
    </button>
  );
};

export const Calculate = () => {
  return (
    <button className="bg-ButtonColor text-white py-[0.875em] px-[2em] rounded-full">
      <a href="#">calculate</a>
    </button>
  );
};

export const StartMining = () => {
  return (
    <button className="startBtn flex hover:flex gap-3 items-center bg-ButtonColor text-white py-[0.875em] px-[2em] rounded-full">
      <a href="#">Start mining</a>
      <FaChevronCircleRight
        color="white"
        fontSize="1.5rem"
      />
    </button>
  );
};
