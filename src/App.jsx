import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import SavedJobs from "./Savedjobs";
import JobDetails from "./JobDetails";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const storedJobs = localStorage.getItem("careerConnectSavedJobs");
      return storedJobs ? JSON.parse(storedJobs) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "careerConnectSavedJobs",
      JSON.stringify(savedJobs)
    );
  }, [savedJobs]);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Delhi",
      salary: "₹3–5 LPA",
      type: "Full-time",
      description:
        "We are looking for a Frontend Developer to build responsive and user-friendly web applications.",
      responsibilities: [
        "Build responsive user interfaces.",
        "Write clean and reusable code.",
        "Collaborate with designers and developers.",
        "Test features and fix bugs.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      requirements: [
        "Knowledge of HTML, CSS and JavaScript.",
        "Understanding of React fundamentals.",
        "Basic knowledge of Git and GitHub.",
      ],
    },
    {
      id: 2,
      title: "React Developer Intern",
      company: "PixelWorks",
      location: "Remote",
      salary: "₹10k–15k/month",
      type: "Internship",
      description:
        "Join our development team as a React intern and gain practical experience building modern web applications.",
      responsibilities: [
        "Develop reusable React components.",
        "Fix UI issues and improve responsiveness.",
        "Work with the development team.",
        "Learn coding standards and best practices.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
      requirements: [
        "Basic understanding of React.",
        "Knowledge of JavaScript fundamentals.",
        "Willingness to learn and collaborate.",
      ],
    },
    {
      id: 3,
      title: "JavaScript Developer",
      company: "CodeSphere",
      location: "Noida",
      salary: "₹3–4 LPA",
      type: "Full-time",
      description:
        "We are seeking a JavaScript Developer to create interactive web experiences and maintain frontend features.",
      responsibilities: [
        "Develop interactive web features.",
        "Write maintainable JavaScript code.",
        "Debug and troubleshoot application issues.",
        "Work with other developers to deliver features.",
      ],
      skills: ["JavaScript", "HTML", "CSS", "React", "REST APIs"],
      requirements: [
        "Good understanding of JavaScript.",
        "Knowledge of DOM and asynchronous JavaScript.",
        "Basic understanding of REST APIs.",
      ],
    },
    {
  id: 4,
  title: "UI/UX Designer",
  company: "DesignHub",
  location: "Delhi",
  salary: "₹3–5 LPA",
  type: "Full-time",
  description:
    "Create intuitive and attractive user experiences for web applications.",
  responsibilities: [
    "Design wireframes and prototypes.",
    "Create user-friendly interfaces.",
    "Collaborate with developers.",
  ],
  skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
  requirements: [
    "Understanding of UI/UX principles.",
    "Basic knowledge of design tools.",
  ],
},
{
  id: 5,
  title: "Web Developer Intern",
  company: "WebSpark",
  location: "Remote",
  salary: "₹8k–12k/month",
  type: "Internship",
  description:
    "Learn and contribute to building responsive websites.",
  responsibilities: [
    "Develop website components.",
    "Fix layout and styling issues.",
    "Test pages on different devices.",
  ],
  skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  requirements: [
    "Knowledge of HTML and CSS.",
    "Basic JavaScript understanding.",
  ],
},
{
  id: 6,
  title: "React Developer",
  company: "InnovateTech",
  location: "Noida",
  salary: "₹4–6 LPA",
  type: "Full-time",
  description:
    "Build reusable React components and responsive user interfaces.",
  responsibilities: [
    "Develop React components.",
    "Integrate REST APIs.",
    "Improve application performance.",
  ],
  skills: ["React", "JavaScript", "REST APIs", "Git"],
  requirements: [
    "Knowledge of React and JavaScript.",
    "Understanding of component-based development.",
  ],
},
{
  id: 7,
  title: "Frontend Developer Intern",
  company: "CodeNest",
  location: "Delhi",
  salary: "₹10k–15k/month",
  type: "Internship",
  description:
    "Assist in developing modern frontend applications.",
  responsibilities: [
    "Build responsive page layouts.",
    "Work with reusable components.",
    "Fix frontend bugs.",
  ],
  skills: ["HTML", "CSS", "JavaScript", "React"],
  requirements: [
    "Basic frontend development knowledge.",
    "Willingness to learn React.",
  ],
},
  ];

  function handleSaveJob(jobId) {
    setSavedJobs((previous) =>
      previous.includes(jobId)
        ? previous.filter((id) => id !== jobId)
        : [...previous, jobId]
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "All" || job.location === location;

    const matchesType =
      jobType === "All" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Career<span className="text-primary">Connect</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <Link className="nav-link" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/#jobs">
                Find Jobs
              </Link>

              <Link className="nav-link" to="/saved-jobs">
                Saved Jobs ({savedJobs.length})
              </Link>

              <Link className="nav-link" to="/#jobs">
                Applications
              </Link>

              <Link
                className="btn btn-primary px-4 ms-lg-2 mt-2 mt-lg-0"
                to="/#jobs"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <section className="hero-section py-5">
                <div className="container py-lg-5">
                  <div className="row align-items-center g-4">
                    <div className="col-12 col-lg-7">
                      <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
                        YOUR CAREER STARTS HERE
                      </span>

                      <h1 className="display-3 fw-bold">
                        Find Your{" "}
                        <span className="text-primary">Dream Job.</span>
                      </h1>

                      <p className="lead text-secondary mt-3">
                        Discover opportunities that match your skills
                        and take the next step in your career.
                      </p>

                      <form
                        className="search-box bg-white p-2 d-flex gap-2 mt-4"
                        onSubmit={(event) => {
                          event.preventDefault();
                          document.getElementById("jobs")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        <input
                          type="text"
                          className="form-control border-0 shadow-none"
                          placeholder="Job title, company or location..."
                          value={search}
                          onChange={(event) =>
                            setSearch(event.target.value)
                          }
                        />

                        <button
                          type="submit"
                          className="btn btn-primary px-4"
                        >
                          Search
                        </button>
                      </form>

                      <p className="text-secondary small mt-3">
                        Popular searches: React Developer · Frontend · Internship
                      </p>
                    </div>

                    <div className="col-12 col-lg-5 text-center mt-5 mt-lg-0">
                      <div className="hero-illustration">
                        <div className="display-1">💼</div>
                        <h4 className="fw-bold mt-3">
                          Your next opportunity awaits
                        </h4>
                        <p className="text-secondary mb-0">
                          Explore jobs and grow your career.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Job Listings */}
              <section className="container py-5" id="jobs">
                <div className="mb-4">
                  <h2 className="fw-bold">Latest Job Openings</h2>
                  <p className="text-secondary mb-0">
                    {filteredJobs.length} jobs found
                  </p>
                </div>

                {/* Filters */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <select
                      className="form-select"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                    >
                      <option value="All">All locations</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Remote">Remote</option>
                      <option value="Noida">Noida</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Job type</label>
                    <select
                      className="form-select"
                      value={jobType}
                      onChange={(event) => setJobType(event.target.value)}
                    >
                      <option value="All">All job types</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>

                {/* Job Cards */}
                <div className="row g-4">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <div className="col-12 col-md-6 col-lg-4" key={job.id}>
                        <div className="card job-card h-100 border-0 shadow-sm">
                          <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="company-avatar">
                                {job.company.charAt(0)}
                              </div>

                              <button
                                className={`btn btn-sm ${
                                  savedJobs.includes(job.id)
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                }`}
                                onClick={() => handleSaveJob(job.id)}
                              >
                                {savedJobs.includes(job.id)
                                  ? "♥ Saved"
                                  : "♡ Save"}
                              </button>
                            </div>

                            <p className="text-secondary small mb-1">
                              {job.company}
                            </p>

                            <h5 className="fw-bold">{job.title}</h5>

                            <div className="d-flex flex-wrap gap-2 my-3">
                              <span className="badge text-bg-light">
                                {job.location}
                              </span>

                              <span className="badge text-bg-light">
                                {job.type}
                              </span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between align-items-center gap-2">
                              <strong>{job.salary}</strong>

                              {/* Opens the selected job details */}
                              <Link
                                to={`/jobs/${job.id}`}
                                className="btn btn-outline-primary btn-sm"
                              >
                                View Job
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center py-5">
                      <h4>No jobs found</h4>
                      <p className="text-secondary">
                        Try changing your search or filters.
                      </p>

                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSearch("");
                          setLocation("All");
                          setJobType("All");
                        }}
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </>
          }
        />

        {/* Saved Jobs Page */}
        <Route
          path="/saved-jobs"
          element={
            <SavedJobs
              jobs={jobs}
              savedJobs={savedJobs}
              handleSaveJob={handleSaveJob}
            />
          }
        />

        {/* Job Details Page */}
        <Route
          path="/jobs/:id"
          element={
            <JobDetails
              jobs={jobs}
              savedJobs={savedJobs}
              handleSaveJob={handleSaveJob}
            />
          }
        />

        {/* Not Found Page */}
        <Route
          path="*"
          element={
            <div className="container py-5 text-center">
              <h2>Page not found</h2>
              <Link to="/" className="btn btn-primary mt-3">
                Back to Home
              </Link>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <footer className="border-top bg-white py-4">
        <div className="container text-center text-secondary">
          © {new Date().getFullYear()} CareerConnect. Built with React & Bootstrap.
        </div>
      </footer>
    </>
  );
}

export default App;