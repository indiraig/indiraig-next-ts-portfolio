type Certificate = {
  name: string;
  issuer: string;
  skills: string[];
  link: string;
};

const certificates: Certificate[] = [
  {
    name: 'Artificial Intelligence with Cloud Computing',
    issuer: 'Microsoft',
    skills: ['Python', 'CNN', 'RNN', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Azure'],
    link: 'https://drive.google.com/file/d/1EpshECIQgwAvarglEeuzVJ7G-04yY7Vi/view',
  },
  {
    name: 'Full Stack with Python Programming',
    issuer: 'HCL GUVI',
    skills: ['Python', 'React.js', 'MongoDB', 'RESTful APIs'],
    link: 'https://drive.google.com/file/d/1OecjpEJdy8d2ZBKgCqEI7HlP6q4RAg0s/view',
  },
  {
    name: 'Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    skills: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM', 'VPC', 'Security'],
    link: 'https://www.credly.com/badges/b426002e-fc1d-4ef0-8783-d3f3a6e236db/public_url',
  },
    {
    name: 'ChatGPT and AI Tools',
    issuer: 'Be10x',
    skills: ['Prompt Engineering', 'GPT', 'RAG', 'LangChain', 'LLM'],
    link: 'https://drive.google.com/file/d/1yGHfNorzZbUEovDNq9olbGs71diOsAOO/view?pli=1',
  },
   {
    name: 'Project on A Reliable Complaint Management System using Python and Db2',
    issuer: 'IBM',
    skills: ['JavaScript', 'Docker', 'React.js', 'Flask','Db2'],
    link: 'https://drive.google.com/file/d/1O2Sk5AUwNaqUiHoXI73Yfzt53T4QbUov/view',
  },
   {
    name: 'Node.js',
    issuer: 'Infosys',
    skills: ['Node.js', 'Server Creation',  'RESTful APIs'],
    link: 'https://drive.google.com/file/d/1bM3tTdsR_L6O9tZjWkBQITnmJsoDtpdL/view',
  },
];

export default function Certificate() {
  return (
    <section className="section certificates" id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="grid">
          {certificates.map((c) => (
            <article key={c.name} className="card cert-card">
              <h3 className="cert-card__title">{c.name } - {c.issuer}</h3>
              <div className="chips cert-card__chips">
                {c.skills.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              <div className="cert-card__actions">
                <a className="btn btn--primary" href={c.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
