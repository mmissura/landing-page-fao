import Img from './assets/images/puravive5.png';
import Logo from './assets/images/logo.svg';

export const App = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center my-12">
          <img
            src={Logo}
            className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-3/4 2xl:mx-24 xl:mx-24 lg:mx-24 mx-6"
            alt="Logo PD Energy"
            title="Logo PD Energy"
          />
        </div>

        <nav className="w-full">
          <ul className="flex justify-end 2xl:px-24 xl:px-24 lg:px-24 px-4">
            <a
              href="https://puravive.com/news/?hop=faolivieri&hopId=e0b9ff98-7f91-4274-86cc-2c1f0088560b&pg=news"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#498b00] text-white 2xl:text-xl xl:text-xl lg:text-xl text-xl 
              py-3 px-4 2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center 
              gap-3 rounded-xl my-12 cursor-pointer hover:bg-green-900"
            >
              Click here
            </a>
          </ul>
        </nav>
      </div>

      <div>
        <div className="w-full px-8 py-24 flex justify-center items-center border-2 border-slate-200 shadow-md rounded-md">
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
            <h2 className="text-center text-6xl text-green-600 font-bold mb-4">
              100% Satisfaction
            </h2>
            <h3 className="text-center text-5xl text-green-600 font-bold mb-20">
              180-day money back guarantee
            </h3>
            <p className="text-xl text-slate-600 my-40 h-14 flex justify-center items-center">
              Your order today is protected by my iron-clad 180-day 100%
              money-back guarantee. If you are not astonished how fast your deep
              stubborn fat stores melt away into pure energy or shocked as you
              admire your new toned slim body in the mirror, then at any time in
              the next 180 days let us know and we'll refund every single penny
              of your investment. No questions ask
            </p>

            <div className="w-full flex justify-center items-center mt-20">
              <a
                href="https://puravive.com/news/?hop=faolivieri&hopId=e0b9ff98-7f91-4274-86cc-2c1f0088560b&pg=news"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#498b00] text-white text-2xl py-3 px-20 flex justify-center items-center gap-3 rounded-xl mb-20 cursor-pointer hover:bg-green-900"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full mx-auto p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-center items-center gap-6 border-2 border-slate-200 shadow-md rounded-md">
        <div>
          <div className="w-full overflow-hidden">
            <img
              src={Img}
              className="w-full justify-center"
              alt="Home Solar Systems"
              title="Home Solar Systems"
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-6xl text-green-600 font-bold mb-20">
            Puravive
          </h2>
          <p className="text-xl text-slate-600 my-40 h-14 flex justify-center items-center">
            It is one of the only products in the world with a proprietary blend
            of 8 exotic nutrients and plants designed to target and optimize low
            brown adipose tissue (BAT) levels, a new cause of unexplained weight
            gain. For every tiny increase in BAT is a huge jump in calorie
            burning! Electrifying your sleeping metabolism into full fat
            burning, energy boosting mode!
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center mt-12">
        <a
          href="https://puravive.com/news/?hop=faolivieri&hopId=e0b9ff98-7f91-4274-86cc-2c1f0088560b&pg=news"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#498b00] text-white text-2xl py-3 px-20 flex justify-center items-center gap-3 rounded-xl mb-20 cursor-pointer hover:bg-green-900"
        >
          Click here
        </a>
      </section>

      <footer
        className="text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm m-auto"
      >
        Copyright © {getYear} FAO Holdings. All rights reserved. Developed by
        <a
          href="http://missura.com.br"
          target="_blank"
          className="text-white hover:text-black"
        >
          {' '}
          Missura Networks.
        </a>
      </footer>
    </div>
  );
};
