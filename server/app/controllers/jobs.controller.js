const jobsController = () => {
  return {
    getJobs(req, res){
      if (req.query === null) {
        return data.jobs.getAll()
          .then((jobs) => {
            return res.json(jobs);
          })
      }
      else {
        return data.jobs.filter(req.query)
          .then((filteredJobs) => {
            return res.json(filteredJobs);
          })
      }
    }
  }
}

module.exports = jobsController;