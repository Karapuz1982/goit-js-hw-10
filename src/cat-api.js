

 const API_KEY = 'live_7fYGs8U6VUkhmH1EqJASCr4Nmw0HkzTBzlgKAS2FSbzKYbdew6oxdDDr9DQgAfwP';
const url = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${url}/breeds`, {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Oops! Something went wrong! Try reloading the page!');
        }
        return response.json();
      });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${url}/images/search?breed_id=${breedId}`, {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Oops! Something went wrong! Try reloading the page!');
        }
        return response.json();
      });
}
