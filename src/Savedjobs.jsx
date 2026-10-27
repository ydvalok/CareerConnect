import { Link } from "react-router-dom";

function SavedJobs({ jobs, savedJobs, handleSaveJob }) {
  const savedJobList = jobs.filter((job) =>
    savedJobs.includes(job.id)
  );

  return (
    <div className="container py-5">
      <Link to="/" className="text-decoration-none">
        ← Back to Home
      </Link>

      <h2 className="fw-bold mt-4">My Saved Jobs</h2>
      <p className="text-secondary">
        Your favourite jobs in one place.
      </p>

      {savedJobList.length === 0 ? (
        <div className="text-center py-5">
          <h4>No saved jobs yet ❤️</h4>
          <p className="text-secondary">
            Go to the home page and save a job first.
          </p>
          <Link to="/" className="btn btn-primary">
            Explore Jobs
          </Link>
        </div>
      ) : (
        <div className="row g-4 mt-2">
          {savedJobList.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <span className="badge bg-primary mb-3">
                    {job.type}
                  </span>

                  <h5 className="fw-bold">{job.title}</h5>
                  <p className="text-secondary">{job.company}</p>
                  <p>📍 {job.location}</p>
                  <h6 className="fw-bold mb-4">{job.salary}</h6>

                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => handleSaveJob(job.id)}
                  >
                    ♥ Remove Saved Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedJobs;