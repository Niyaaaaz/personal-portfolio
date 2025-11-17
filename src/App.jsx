import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Your Full Name</h1>
        <p className="tagline">Aspiring Full-Stack Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate learner currently pursuing full-stack web development. 
          I enjoy building interactive web applications and solving real-world problems through code. 
          My journey in tech started with curiosity and has grown into a dedicated pursuit of knowledge in modern web technologies.
        </p>
      </section>

      <section className="hobbies">
        <h2>Hobbies & Interests</h2>
        <div className="hobby-list">
          <div className="hobby">
            <h3>Reading</h3>
            <p>I love reading books on technology, science fiction, and personal development. It helps me stay updated and inspired.</p>
          </div>
          <div className="hobby">
            <h3>Gaming</h3>
            <p>Playing video games is a great way for me to relax and unwind. I enjoy strategy games and multiplayer experiences.</p>
          </div>
          <div className="hobby">
            <h3>Hiking</h3>
            <p>Exploring nature through hiking allows me to connect with the outdoors and maintain a healthy lifestyle.</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
        </ul>
      </section>
    </div>
  )
}

export default App
