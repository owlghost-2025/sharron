import React, { useEffect } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "My Hobby",
    description: "Membaca buku merupakan salah satu hobiku yang paling menyenangkan.",
    tags: ["Mendengarkan Music", "Menonton Film", "Batminton"],
    image:
      "https://i.ibb.co.com/zH6d8V5m/The-Everygirl-s-2018-Bucket-List-advice-selfhelp.jpg",
    live: "#",
    code: "#",
    color: "#FFB6C1"
  },
  {
    id: 2,
    title: "My Favorite",
    description: "I like all animals, but I prefer cats, dogs, and sugar gliders.",
    tags: ["Matcha","Anime", "Playing games", "likes saving money"],
    image:
      "https://i.ibb.co.com/r2L0zZPy/download-4.jpg",
    live: "#",
    code: "#",
    color: "#FFD59E"
  },
  {
    id: 3,
    title: "My Dislike",
    description: "Aku bener-benar tidak suka bawang dari kecil karena rasanya gak enak.",
    tags: ["Spicy food", "Kecoa terbang", "Math"],
    image:
      "https://i.ibb.co.com/9m3WyF2x/Daun-Bawang.jpg",
    live: "#",
    code: "#",
    color: "#C7F9CC"
  }
];

function Header({ active }) {
  return (
    <header className="header">
      <div className="nav">
        <div className="brand">
          <span className="logo" aria-hidden>
            <img
              style={{ width: "50px" }}
              src="https://i.ibb.co.com/d0MX0NRG/6442012b-fb46-448e-9e2c-4e227cc02d5f.webp"
              alt="Logo Sharron Maddeline"
            />
          </span>
          <span className="brand-name">Sharron Maddeline</span>
        </div>
        <nav className="links" aria-label="Main navigation">
          <a href="#about" className={active === "about" ? "active" : ""}>Introduce</a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>About Me</a>
          <a href="#contact" className={active === "contact" ? "active primary" : "primary"}>Contact</a>
        </nav>
      </div>
    </header>
  );
}



function ProjectCard({ p }) {
  return (
    <article className="card" style={{ borderColor: p.color }}>
      <div className="card-media">
        <img src={p.image} alt={p.title} />
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p className="muted">{p.description}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="actions">
          <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">About</a>
          <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">Me</a>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div>{new Date().getFullYear()} </div>
      <div className="socials">
        <a href="#" aria-label="namaku">Sharron</a>
        <a href="#" aria-label="nama">Maddeline</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "portofolio";
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="app">
        

      <Header />

      <main>
        <section className="section" id="about">
          <div className="about-content">
            <div className="about-text">
              <h2 className="hi">My Portofolio</h2>
              <p className="muted">
                "Hai! Aku Sharron Maddeline Portofolio ini nunjukin hal-hal tentang diriku. Thanks udah lihat!"
              </p>
            </div>
            <img className="love" src="https://i.ibb.co.com/8LTppbPn/iconsoft.jpg"/>
          </div>
          <div className="skills" aria-hidden>
            <span className="skill">Tri Ratna School</span>  
            <span className="skill">Sofware Engginer</span>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>About Me!</h2>
          
          <div className="grid" role="list">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <h2>Kontak</h2>
          <p className="muted">
            Ingin bekerja sama atau ngobrol soal proyek? Kirim email ke{" "}
            <a href="mailto:hello@example.com">hello@example.com</a>.
          </p>
          <div style={{ marginTop: 10 }}>
            <a className="btn primary" href="mailto:hello@example.com">Kirim Email</a>
            <a className="btn" href="#projects" style={{ marginLeft: 8 }}>Lihat Proyek</a>
          </div>
        </section>
      </main>

      

      <div className="floating-bubbles" aria-hidden>
        <div className="bubble b1" />
        <div className="bubble b2" />
        <div className="bubble b3" />
      </div>
    </div>
  );
}