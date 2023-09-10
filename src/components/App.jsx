import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  const [data, setData] = useState(true);

  useEffect(() => {
    if (data) {
      document.querySelector(".hero-image").style.opacity = 0;
      setTimeout(() => {
        document.querySelector(".hero-image").src = "image-tanya.jpg";
        document.querySelector(
          ".description"
        ).textContent = `"I've been interested in coding for a while but never taken the jump,
        until now. I couldn't recommend this course enough. I'm now in the job
        of my dreams and so excited about the future."`;
        document.querySelector(".author").textContent = "Tanya Sinclair";
        document.querySelector(".role").textContent = "UX Engineer";
        document.querySelector(".hero-image").style.opacity = 1;
      }, 1000);
    } else {
      document.querySelector(".hero-image").style.opacity = 0;
      setTimeout(() => {
        document.querySelector(".hero-image").src = "image-john.jpg";
        document.querySelector(
          ".description"
        ).textContent = `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`;
        document.querySelector(".author").textContent = "John Tarkpor";
        document.querySelector(".role").textContent =
          "Junior Front-end Developer";
        document.querySelector(".hero-image").style.opacity = 1;
      }, 1000);
    }
  }, [data]);

  return (
    <div className="font-inter p-[2em] grid gap-[2em] relative min-h-[100dvh] text-custom-font landscape:grid-cols-[1fr_0.2fr_1fr] landscape:gap-[0em]">
      <HeroImage setData={setData} />
      <Content />
      <Footer />
    </div>
  );
}
