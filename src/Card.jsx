import { Html } from "@react-three/drei";
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
      <section class="card">
        <h1>{title}</h1>
        <h3>{techUsed}</h3>
        <aside>{links}</aside>
        {content}
        <div className="card-hover-container">
          <h1></h1>
        </div>
      </section>
    </>
  );
}
