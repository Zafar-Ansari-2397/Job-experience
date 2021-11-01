import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // fetching data
  const fetchingData = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchingData();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading ....</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>Jobs Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          {/* button-container */}
          <div className='btn-container'>
            {jobs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job-info */}
          <article className='article'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon' />
                  {duty}
                </div>
              );
            })}
          </article>
        </div>
        <button className='btn'>More info</button>
      </section>
    </>
  );
};

export default App;
