import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Card({ title, techUsed, links, content }) {

  const { ref, inView } = useInView({
    threshold: 0,
  });

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
      <div ref={ref} className="card-container">
        <section className="card">
          <section className="card-content">
            <h1>{title}</h1>
            <h2>{techUsed}</h2>
            <aside>{links}</aside>
            {inView ? (
              content
            ) : (
              <p>loading</p>
            )}
            
          </section>
        </section>
      </div>
 
    </>
  );
}
