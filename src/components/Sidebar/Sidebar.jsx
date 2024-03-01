import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import dot from "../../img/icons/dot.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 0 && scrollY < 500) {
      setActiveLink("home");
    } else if (scrollY >= 500 && scrollY < 700) {
      setActiveLink("application");
    } else if (scrollY >= 700 && scrollY < 2100) {
      setActiveLink("deadline");
    } else if (scrollY >= 2100 && scrollY < 3000) {
      setActiveLink("participation");
    } else if (scrollY >= 3000 && scrollY < 3600) {
      setActiveLink("faq");
    } else if (scrollY >= 3600) {
      setActiveLink("partners");
    } else {
      setActiveLink(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollTo = (element) => {
    const yOffset = -70;
    scroll.scrollTo(element, {
      duration: 500,
      smooth: true,
      offset: yOffset,
    });
  };

  return (
    <nav className="text-black text-lg font-light h-screen p-5 w-72 fixed overflow-y-auto">
      <ul>
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "home" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("home");
              smoothScrollTo("home");
            }}
          >
            {activeLink === "home" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Что такое StartLand
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="application"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "application" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("application");
              smoothScrollTo("application");
            }}
          >
            {activeLink === "application" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Заявка на участие
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="deadline"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "deadline" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("deadline");
              smoothScrollTo("deadline");
            }}
          >
            {activeLink === "deadline" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Сроки
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="participation"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "participation" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("participation");
              smoothScrollTo("participation");
            }}
          >
            {activeLink === "participation" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Что даст Вам участие
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="faq"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "faq" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("faq");
              smoothScrollTo("faq");
            }}
          >
            {activeLink === "faq" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Вопросы и ответы
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="partners"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={`block p-5 w-72 cursor-pointer hover:text-blue ${
              activeLink === "partners" ? "font-bold text-blue" : ""
            }`}
            onClick={() => {
              setActiveLink("partners");
              smoothScrollTo("partners");
            }}
          >
            {activeLink === "partners" && (
              <span className="dot-img inline-block">
                <img src={dot} alt="dot" className="h-2 w-2 mr-2" />
              </span>
            )}
            Наши партнеры
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
