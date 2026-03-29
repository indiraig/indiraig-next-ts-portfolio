import './Skills.css';

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Core Skills</h2>

        <div className="grid">
          <div className="card skills__group">
            <h3 className="skills__group-title">Frontend Engineering</h3>
            <div className="chips">
              <span className="chip chip--accent">JavaScript (ES6+)</span>
              <span className="chip">TypeScript</span>
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">React Query</span>
              <span className="chip">Redux</span>
               <span className="chip">Tailwind CSS</span>
                <span className="chip">Responsive Design</span>
                
            </div>
          </div>

          <div className="card skills__group">
            <h3 className="skills__group-title">Backend Architecture</h3>
            <div className="chips">
              <span className="chip chip--accent">SpringBoot</span>
              <span className="chip">Python</span>
              <span className="chip">Django</span>
              <span className="chip">FastAPI</span>
              <span className="chip">AWS (S3, Lambda, Athena, RDS, Aurora)</span>
              <span className="chip">Kafka Pipeline</span>
              <span className="chip">PostgreSQL</span>
                 <span className="chip">Docker</span>
            </div>
          </div>

          <div className="card skills__group">
            <h3 className="skills__group-title">AI Engineering Stack</h3>
            <div className="chips">
              <span className="chip chip--accent">SpringAI</span>
              <span className="chip">TensorFlow</span>
              
              <span className="chip">MCP</span>
                <span className="chip">LLM</span>
              <span className="chip">Cursor</span>
                <span className="chip">Trae</span>
                <span className="chip">LangChain</span>  
                <span className="chip">Vector DB</span> 
         <span className="chip">Jupyter Notebook</span>

          <span className="chip">Deep Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
