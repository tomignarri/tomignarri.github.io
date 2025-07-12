import { store } from "./store";
import { useEffect } from "react";

export default function Card({ title, techUsed, links, content }) {
  useEffect(() => {
    const portfolioVideos = document.querySelectorAll(".card video");

    portfolioVideos.forEach((video) => {
      video.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    });
  }, []);

  return (
    <>
      <div className="card-container">
        <section className="card">
          <section className="card-content">
            <h1>{title}</h1>
            <h3>{techUsed}</h3>
            <aside>{links}</aside>
            {content}
          </section>
        </section>
      </div>
    </>
  );
}
