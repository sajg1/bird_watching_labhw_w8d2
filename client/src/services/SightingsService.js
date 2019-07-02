const baseURL = 'http://localhost:3000/api/sightings/'

// getSightings, postSightings methods needed
  export default {
    getSightings() {
      return fetch(baseURL)
      .then(res => res.json())
    },

  }
