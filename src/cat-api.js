

const API_KEY = 'live_7fYGs8U6VUkhmH1EqJASCr4Nmw0HkzTBzlgKAS2FSbzKYbdew6oxdDDr9DQgAfwP';

export function fetchBreeds() {
  return new Promise((resolve, reject) => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching breeds.');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`, {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching cat information.');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
