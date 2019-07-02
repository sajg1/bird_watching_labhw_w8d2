const baseURL = 'http://localhost:3000/api/sightings/'

// getSightings, postSightings methods needed
  export default {
    getSightings() {
      return fetch(baseURL)
      .then(res => res.json())
    },

    postSighting(payload){
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        header: { 'Content-type': 'application/json'}
      })
      .then( res => res.json());
    }

  }
