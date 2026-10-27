import { Link, useParams } from "react-router-dom";

function JobDetails({ jobs, savedJobs, handleSaveJob }) {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="container py-5 text-center">
        <h2>Job Not Found</h2>
        <p className="text-secondary">
          This job may no longer be available.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  const isSaved = savedJobs.includes(job.id);

  return (
    <div className="container py-5">
      <Link to="/" className="text-decoration-none">
        ← Back to Jobs
      </Link>

      <div className="row g-4 mt-2">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="company-avatar mb-3">
                {job.company.charAt(0)}
              </div>

              <h1 className="fw-bold">{job.title}</h1>
              <h5 className="text-secondary">{job.company}</h5>

              <div className="d-flex flex-wrap gap-2 my-4">
                <span className="badge text-bg-light p-2">
                  📍 {job.location}
                </span>
                <span className="badge text-bg-light p-2">
                  💼 {job.type}
                </span>
                <span className="badge text-bg-light p-2">
                  💰 {job.salary}
                </span>
              </div>

              <hr />

              <h4 className="fw-bold mt-4">Job Description</h4>
              <p className="text-secondary">
                We are looking for a motivated {job.title} to join{" "}
                {job.company}. You will work with a team to build,
                improve, and maintain web applications while learning
                industry best practices.
              </p>

              <h4 className="fw-bold mt-4">Responsibilities</h4>
              <ul className="text-secondary">
                <li>Develop and maintain web application features.</li>
                <li>Write clean, readable, and reusable code.</li>
                <li>Collaborate with team members to solve problems.</li>
                <li>Test features and fix bugs.</li>
              </ul>

              <h4 className="fw-bold mt-4">Required Skills</h4>
              <div className="d-flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Git"].map(
                  (skill) => (
                    <span
                      className="badge text-bg-primary p-2"
                      key={skill}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <h4 className="fw-bold mt-4">Requirements</h4>
              <ul className="text-secondary">
                <li>Understanding of web development fundamentals.</li>
                <li>Problem-solving and communication skills.</li>
                <li>Willingness to learn and work with a team.</li>
              </ul>

              <p className="small text-secondary mt-4 mb-0">
                Note: This is sample job information for your frontend
                project.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h5 className="fw-bold">Job Overview</h5>

              <p className="text-secondary mb-1 mt-3">Salary</p>
              <h5 className="fw-bold">{job.salary}</h5>

              <p className="text-secondary mb-1 mt-3">Location</p>
              <h6>{job.location}</h6>

              <p className="text-secondary mb-1 mt-3">Employment Type</p>
              <h6>{job.type}</h6>

              <hr className="my-4" />

              <button
                className="btn btn-primary w-100 mb-2"
                onClick={() =>
                  alert(
                    "Application feature coming soon! This is a frontend demo."
                  )
                }
              >
                Apply Now
              </button>

              <button
                className={`btn ${
                  isSaved ? "btn-outline-danger" : "btn-outline-primary"
                } w-100`}
                onClick={() => handleSaveJob(job.id)}
              >
                {isSaved ? "♥ Remove Saved Job" : "♡ Save Job"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;