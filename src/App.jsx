import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(null);
  const toggleAnswer = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };
  return (
    <div className="min-h-screen w-full overflow-y-auto relative bg-black bg-[netflix-bg]">
      <div className="bg bg-netflix-bg bg-cover bg-center xs:min-h-[80vh] lg:max-h-[100vh] relative sm:min-h-[55vh]">
        <div className="absolute inset-0 bg-edge-dark-gradient"></div>
        <div className="flex flex-wrap relative">
          <nav className="w-full h-24 absolute flex justify-between items-center flex-wrap">
            <div className="logo flex items-center">
              <img
                className="w-24 xs:w-[80px] ml-6 md:w-40 md:ml-[10vw] xss:absolute xss:top-1"
                src="/svg/netflix-logo.svg"
                alt="netflix-logo"
              />
            </div>
            <div className="navcontainer flex justify-end gap-4 absolute right-5 md:mr-[8vw] flex-wrap">
              <div className="language relative flex items-center h-auto">
                <img
                  src="/svg/language.svg"
                  className="w-4 h-4 absolute left-2 outline-none text-white xs:w-3 xs:h-3"
                  alt="langIcon"
                ></img>
                <select
                  className="md:px-10 px-7 py-1 bg-transparent rounded-md border border-slate-600 text-white appearance-none relative z-10 font-semibold sm:w-[140px] w-4"
                  name="language"
                  id="language"
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className=" text-black" value="हिन्दी">
                    हिन्दी
                  </option>
                </select>
                <img
                  src="/svg/dropdown.svg"
                  className="w-4 h-4 absolute right-2 pointer-events-none text-white"
                  alt="dropdownIcon"
                ></img>
              </div>
              <div className="signin text-white flex items-center h-auto w-[90px]">
                <button
                  className="bg-red-600 py-1 font-semibold rounded-md px-4 cursor-pointer"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </div>
          </nav>
        </div>
        <main className="flex flex-col items-center justify-center  lg:pt-[200px] sm:pt-[150px] pt-20 relative  lg:pb-[200px] sm:pb-12">
          <div className="main text-white flex flex-col items-center sm:w-[80vw] lg:w-[80vw] w-[100vw]">
            <h1 className="px-12 py-4 text-[2em] font-[800] text-center xs:p-8 md:text-5xl md:font-extrabold">
              Unlimited movies, TV shows and more
            </h1>
            <h3 className="px-12 md:py-0 text-[1.2em] xs:px-8 md:text-[1.5rem] text-center sm:text-[1.5em]">
              Watch anywhere. Cancel anytime.
            </h3>
            <h4 className="px-14 md:px-12 md:py-3 mt-6 md:mt-4 text-[1.2rem] sm:text-[1.5rem] text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="inputArea flex flex-wrap md:gap-2 gap-5 justify-center w-full md:mt-2 mt-4 xs:mb-8 mb-8">
              <label for="email"></label>
              <input
                className="py-3 px-4 md:p-4 bg-black bg-opacity-40 border border-gray-500 rounded-md flex text-left xs:w-[70vw] w-[80vw] md:w-96 text-white placeholder-gray-300 justify-between"
                type="text"
                placeholder="Email address"
                id="email"
              />
              <button
                className="bg-red-600 md:p-3 py-2 border border-red-600 rounded-md flex font-semibold flex-row-reverse justify-center gap-2 md:gap-4 text-xl md:text-2xl items-center px-2"
                type="submit"
              >
                <span>
                  <img
                    className="flex"
                    src="/svg/getstartedicon.svg"
                    alt="getstarted"
                  />
                </span>
                Get Started
              </button>
            </div>
          </div>
        </main>
      </div>
      <section className="w-full bg-black text-white md:py-16 lg:py-16 flex flex-col border-y-8 border-[#232323] py-8">
        <div className="first min-h-[50vh] flex flex-col justify-center md:flex-row lg:flex-row items-center">
          <div className="text flex flex-col ml-4">
            <h1 className="md:text-5xl lg:5xl text-3xl font-bold md:font-extrabold lg:font-extrabold flex justify-center md:justify-start mb-6 mt-4">
              Enjoy on your TV
            </h1>
            <p className="md:text-2xl flex justify-center w-96 md:w-full lg:w-full text-[1.15rem] font-normal text-center md:text-start lg:text-start sm:text-center">
              Watch on smart TVs, PlayStation, Xbox, Chromecast,
              <br className="block md:block lg:block sm:block" />
              Apple TV, Blu-ray players and more.
            </p>
          </div>
          <div className="tv-container relative items-center bg-black md:h-full h-[40vh] flex flex-row md:w-[600px] lg:w-[600px] w-[380px] xs:w-[80vw]">
            <img src="/image/tv.png" alt="TV" className="w-full absolute" />
            <div className="video-inside">
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={"/video/video-tv-in-0819.m4v"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white  flex flex-col border-b-[8px] border-[#232323] py-8 md:py-16 lg:py-16">
        <div className="second min-h-[50vh] flex justify-center md:flex-row lg:flex-row items-center flex-col-reverse">
          <div className="mob-container relative items-center bg-black md:h-full h-[50vh] flex flex-row md:w-[600px] lg:w-[600px] w-[380px]">
            <div className="flex relative justify-center w-full">
              <img
                src="/image/mobile-0819.jpg"
                alt="mobile"
                className="w-full object-cover"
              ></img>
              <div className="border-2 border-gray-500 h-[64px] md:h-[112px] lg:h-28 sm:h-24 md:w-[340px] lg:w-[340px] sm:w-[340px]  rounded-xl md:mt-[20px] absolute bg-black flex w-[260px] bottom-[48px] gap-3 md:gap-2 lg:gap-3 sm:gap-2">
                <img
                  className="h-full object-cover md:p-3 lg:p-3 sm:p-3 p-2"
                  src="/image/strangerthingsimg.png"
                  alt="strangerthings"
                ></img>
                <h1 className="flex justify-center flex-col md:font-bold lg:font-bold sm:font-bold font-semibold">
                  Stranger Things
                  <span className="text-blue-500 font-normal md:text-base lg:text-base sm:text-base text-xs -mt-1">
                    Downloading...
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="text flex flex-col">
            <h1 className="md:text-5xl lg:5xl text-3xl font-bold md:font-extrabold lg:font-extrabold flex justify-center text-center md:justify-end mb-6 mt-4 md:text-start lg:text-start sm:text-center ">
              Download your shows to
              <br className=" md:block lg:block sm:block block"></br>
              watch offline
            </h1>
            <p className="md:text-2xl flex justify-center w-96 md:w-full lg:w-full text-[1.15rem] font-normal text-center md:text-start lg:text-start sm:text-center pl-8 px-4 md:px-0">
              Save your favourites easily and always have something
              <br className="block md:block lg:block sm:block" />
              to watch.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white flex flex-col border-b-[8px] border-[#232323] md:py-16 lg:py-16 py-8">
        <div className="third md:min-h-[50vh] flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8">
          <div className="text flex flex-col text-center md:text-start">
            <h1 className="md:text-5xl lg:text-5xl text-3xl font-bold md:font-extrabold lg:font-extrabold mb-6 mt-4 px-4">
              Watch everywhere
            </h1>
            <p className="md:text-2xl text-[1.15rem] font-normal px-4">
              Stream unlimited movies and TV shows on your
              <br className="block md:block lg:block sm:block" />
              phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="tv-container2 relative flex justify-center items-center md:w-[600px] lg:w-[600px] w-[380px] xs:w-[80vw] md:h-full h-[35vh] mb-2">
            <img src="/image/TV2.png" alt="TV" className="w-full absolute" />
            <div className="video-inside">
              <video
                autoPlay
                loop
                muted
                className="md:w-[380px] md:-mt-[150px] object-cover w-[250px] -mt-[100px] xs:w-[50vw] xs:-mt-[20vw]"
              >
                <source src="/video/sacredgames.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white  flex flex-col border-b-[8px] border-[#232323] py-8 md:py-16 lg:py-16">
        <div className="fourth min-h-[50vh] flex  justify-center md:flex-row lg:flex-row items-center flex-col-reverse">
          <div className="mob-container relative items-center bg-black md:h-full h-[50vh] flex flex-row md:w-[600px] lg:w-[600px] w-[380px]">
            <img
              src="/image/children.png"
              alt="mobile"
              className="w-full object-cover"
            />
          </div>
          <div className="text flex flex-col">
            <h1 className="md:text-5xl lg:5xl text-[2em] font-bold md:font-extrabold lg:font-extrabold flex justify-center text-center md:justify-end mb-6 mt-4 md:text-start lg:text-start sm:text-center">
              Create profiles for kids
            </h1>
            <p className="md:text-2xl flex justify-center w-96 md:w-full lg:w-full text-[1.15rem] font-normal text-center md:text-start lg:text-start sm:text-center pl-8 px-4 md:px-0">
              Send children on adventures with their favourite
              <br className="hidden md:block lg:block sm:block" />
              characters in a space made just for them—free with
              <br className="hidden md:block lg:block sm:block"></br>
              your membership.
            </p>
          </div>
        </div>
      </section>

      <section className="xs:ml-12 border-b-[8px] border-[#232323] min-h-screen bg-black pt-12">
        <div className="container text-white mx-auto">
          <h1 className="md:text-4xl text-3xl lg:text-5xl md:font-extrabold font-bold text-white mb-4 flex justify-center text-center">
            Frequently Asked Questions
          </h1>
          <div className="faq-item mt-8">
            <div
              id="que1"
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq1")}
            >
              <span>What is Netflix?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 t  ransition-transform duration-300 ${
                    isOpen === "faq1" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq1" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </span>
            </div>
          </div>
          <div className="faq-item mt-2">
            <div
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq2")}
            >
              <span>How much does Netflix cost?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 transition-transform duration-300 ${
                    isOpen === "faq2" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq2" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.
              </span>
            </div>
          </div>
          <div className="faq-item mt-2">
            <div
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq3")}
            >
              <span>Where can I watch?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 transition-transform duration-300 ${
                    isOpen === "faq3" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq3" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                <br />
                You can also download your favourite shows with the iOS or
                Android app. Use downloads to watch while you're on the go and
                without an internet connection. Take Netflix with you anywhere.
              </span>
            </div>
          </div>
          <div className="faq-item mt-2">
            <div
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq4")}
            >
              <span>how do I cancel?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 transition-transform duration-300 ${
                    isOpen === "faq4" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq4" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </span>
            </div>
          </div>
          <div className="faq-item mt-2">
            <div
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq5")}
            >
              <span>What can I watch on Netflix?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 transition-transform duration-300 ${
                    isOpen === "faq5" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq5" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </span>
            </div>
          </div>
          <div className="faq-item mt-2">
            <div
              className="que md:text-2xl sm:text-xl text-lg bg-[#2d2d2d] flex justify-between md:mx-[10vw] mx-[2vw]  p-6 mt-2 cursor-pointer hover:bg-[#474747] transition-colors duration-300"
              onClick={() => toggleAnswer("faq6")}
            >
              <span>Is Netflix good for Kids?</span>
              <button className="btn outline-none">
                <img
                  className={`icon md:size-8 transition-transform duration-300 ${
                    isOpen === "faq6" ? "rotate-45" : ""
                  }`}
                  src="/svg/plussvg.svg"
                  alt="logo"
                ></img>
              </button>
            </div>
            <div
              className={`ans md:text-2xl sm:text-xl text-lg p-6 my-2 mt-[0.05rem] ${
                isOpen === "faq6" ? "block" : "hidden"
              } bg-[#2d2d2d] transition-all duration-300 md:font-normal font-[400] leading-[1.5rem] md:mx-[10vw] mx-[2vw]`}
            >
              <span>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </span>
            </div>
          </div>
        </div>
        <div className="bottomEmail flex flex-col items-center gap-5 md:mt-10 mt-10 mb-12">
          <div className="readyToWatch text-center">
            <h1 className="text-white md:text-xl text-lg font-normal md:font-semibold mx-16 xs:mx-8">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
          </div>
          <div className="inputArea flex flex-wrap justify-center w-full gap-3 px-4">
            <input
              className="py-3 px-4 bg-black bg-opacity-40 border border-gray-500 rounded-md text-white placeholder-gray-300 w-80 md:w-96"
              type="text"
              placeholder="Email address"
              id="email"
            />
            <button
              className="bg-red-600 py-3 px-0 md:px-6 border border-red-600 rounded-md text-white font-semibold w-48 md:w-auto md:text-2xl text-xl flex items-center justify-center flex-row-reverse gap-4"
              type="submit"
            >
              <img
                className="mr-2"
                src="/svg/getstartedicon.svg"
                alt="getstarted"
              />{" "}
              Get Started
            </button>
          </div>
        </div>
      </section>
      <footer className="text-[#b3b3b3] pt-8 py-8 lg:mx-40">
        <h1 className="text-center mb-6 flex px-4 font-semibold justify-start">
          Questions? Call{" "}
          <span className="cursor-pointer underline px-2">
            000-800-919-1694
          </span>
        </h1>
        <div className="container mx-auto px-4 font-semibold">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-0.5 text-sm underline">
            <a href="https://help.netflix.com/en/node/412">FAQ</a>
            <a href="https://help.netflix.com/en">Help Centre</a>
            <a href="https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
              Account
            </a>
            <a href="https://media.netflix.com/en/">Media Centre</a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
              Investor Relations
            </a>
            <a href="https://jobs.netflix.com/">Jobs</a>
            <a href="https://help.netflix.com/en/node/14361">Ways to Watch</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="https://help.netflix.com/en/node/134094">
              Corporate Information
            </a>
            <a href="https://help.netflix.com/en/contactus">Contact Us</a>
            <a href="https://fast.com/">Speed Test</a>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            <a href="https://www.netflix.com/in/browse/genre/839338">
              Only on Netflix
            </a>
          </div>
        </div>
        <div className="flex justify-start mt-8 px-4">
          <div className="language relative flex items-center h-auto">
            {/* <!-- SVG Icon added here --> */}
            <img
              src="/svg/language.svg"
              className="w-4 h-4 absolute left-2 pointer-events-none text-white "
              alt="langIcon"
            ></img>
            <select
              className="md:px-10 px-7 py-1 bg-transparent rounded-md border border-slate-600 text-white appearance-none relative z-10 font-semibold"
              name="language"
              id="language"
            >
              <option className=" text-black" value="English">
                English
              </option>
              <option className=" text-black" value="हिन्दी">
                हिन्दी
              </option>
            </select>
            <img
              src="/svg/dropdown.svg"
              className="w-4 h-4 absolute right-2 pointer-events-none text-white"
              alt="dropdownIcon"
            ></img>
          </div>
        </div>
        <h2 className="mt-4 px-4 text-left">Netflix India</h2>
      </footer>
    </div>
  );
}

export default App;
