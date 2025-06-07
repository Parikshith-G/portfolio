import React from "react";

const Skills = () => {
  return (
    <section className="py-4">
      <h2 className="h3 fw-semibold mb-3">Technical Skills</h2> <br></br>
      <br></br>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 fs-6">
        <div>
          <strong>Languages:</strong> Golang, Scala, Java, Python, JavaScript,
          TypeScript
        </div>
        <div>
          <strong>Backend:</strong> Spring Boot, Django, REST APIs,
          Microservices
        </div>
        <div>
          <strong>Frontend:</strong> React, Angular, HTML5, CSS3
        </div>
        <div>
          <strong>Cloud & DevOps:</strong> AWS (EC2, EMR, EKS), Azure, Docker,
          Kubernetes, CI/CD, Apache Airflow, Apache Flink
        </div>
        <div>
          <strong>Databases & Storage:</strong> PostgreSQL, MySQL, MongoDB,
          Apache Hive, Apache Iceberg, Apache Trino
        </div>
        <div>
          <strong>Tools & Practices:</strong> Git, Agile/Scrum, VS Code,
          IntelliJ, JIRA, Postman
        </div>
      </div>
    </section>
  );
};

export default Skills;
