import React from "react";

const Experience = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="h3 fw-semibold border-bottom pb-2 mb-4">Experience</h2>
        <div className="vstack gap-4">
          <div className="card bg-secondary bg-gradient border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-1">Capgemini – Software Developer</h5>
              <h6 className="text-light text-opacity-75 mb-3">
                Apr 2024 – Present
              </h6>
              <div className="d-flex flex-column gap-1">
                <div className="d-flex flex-column gap-2">
                  <div>
                    Reduced runtimes of critical backend jobs by ~60%, enhancing
                    system performance and reducing operational costs.
                  </div>
                  <div>
                    Migrated backend workflows from Golang to Scala,
                    significantly improving modularity and long-term
                    maintainability.
                  </div>
                  <div>
                    Built a hybrid Java-Scala application to enable seamless
                    integration between legacy systems and new pipelines.
                  </div>
                  <div>
                    Owned the end-to-end lifecycle of multiple Golang-based jobs
                    — from development and testing to deployment and monitoring.
                  </div>
                  <div>
                    Deployed services across AWS EC2 and EMR clusters;
                    integrated workflow monitoring using Apache Airflow.
                  </div>
                  <div>
                    Delivered high-impact POCs for real-time data processing,
                    directly accelerating project delivery timelines.
                  </div>
                  <div>
                    Collaborated with directors and cross-functional leads to
                    resolve live production issues with rapid turnaround.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-secondary bg-gradient border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-1">Grant Thornton LLP – Intern</h5>
              <h6 className="text-light text-opacity-75 mb-3">
                Feb 2023 – May 2023
              </h6>
              <div className="d-flex flex-column gap-1">
                <div>Collaborated with cross-functional finance-tech teams</div>
                <div>Learned agile development and teamwork</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
