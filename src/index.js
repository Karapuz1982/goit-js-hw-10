
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const catName = document.querySelector('.cat-name');
const catDescription = document.querySelector('.cat-description');
const catTemperament = document.querySelector('.cat-temperament');
const errorElement = document.querySelector('.error');

async function populateBreeds() {
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    breedSelect.addEventListener('change', handleBreedSelect);
  } catch (error) {
    showError(error);
  } finally {
    loader.style.display = 'none';
    breedSelect.style.display = 'block';
  }
}

async function handleBreedSelect() {
  const breedId = breedSelect.value;
  if (breedId) {
    try {
      loader.style.display = 'block';
      catInfo.style.display = 'none';
      const cat = await fetchCatByBreed(breedId);
      showCatInfo(cat[0]); // The API returns an array, so we use the first item
    } catch (error) {
      showError(error);
    } finally {
      loader.style.display = 'none';
      catInfo.style.display = 'block';
    }
  } else {
    catInfo.style.display = 'none';
  }
}

function showCatInfo(cat) {
  catImage.style.backgroundImage = `url(${cat.url})`;
  catName.textContent = cat.breeds[0].name;
  catDescription.textContent = cat.breeds[0].description;
  catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
}

function showError(error) {
  errorElement.textContent = error.message;
  errorElement.style.display = 'block';
}

populateBreeds();
