import "./Education.css";

function Education_pf() {
  const education = [
    {
      degree: "B.Sc in Computer Science",
      institute: "St. Ann's College for Women",

      year: "2022 – 2025",
    },
    {
      degree: "Intermediate (M.P.C)",
      institute: "sri chaitanya junior college, Visakhapatnam",

      year: "2020 – 2022",
    },
    {
      degree: "SSC",
      institute: "Mrs. Mariadas School, Visakhapatnam",

      year: "2019 – 2020",
    },
  ];

  return (
    <section id="education" className="edu-section ">
      <h2 className="edu-title mt-4"> Education</h2>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <div key={i} className="edu-card" data-aos="fade-up">
            <div className="edu-header">
              <span className="edu-badge">{edu.year}</span>
            </div>
            <div className="edu-body">
              <h3>{edu.degree}</h3>
              <p className="institute">{edu.institute}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education_pf;
