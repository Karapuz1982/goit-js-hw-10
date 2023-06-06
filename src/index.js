
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
 


const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const catName = document.querySelector('.cat-name');
const catDescription = document.querySelector('.cat-description');
const catTemperament = document.querySelector('.cat-temperament');
const errorElement = document.querySelector('.error');

// 
async function populateBreeds() {
  try {
    loader.style.display = 'block'; // Відображення повідомлення "Loading"
    // breedSelect.style.display = 'none'; // Ховаємо список поки завантажується
     breedSelect.classList.add('hidden'); 
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
    // breedSelect.style.display = 'block'; // Відображаємо список після завантаження
      breedSelect.classList.remove('hidden'); 
  }
}

async function handleBreedSelect() {
  const breedId = breedSelect.value;
  if (breedId) {
    try {
      loader.style.display = 'block'; // Відображення повідомлення "Loading"
      catInfo.style.display = 'none'; // Ховаємо інформацію про кота поки завантажується
      const cat = await fetchCatByBreed(breedId);
      showCatInfo(cat[0]); 
    } catch (error) {
      showError(error);
    } finally {
      loader.style.display = 'none';
      catInfo.style.display = 'block'; // Відображаємо інформацію про кота після завантаження
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
  loader.style.display = 'none';
  breedSelect.style.display = 'none';
    catInfo.style.display = 'none';
    catImage.style.display = 'none';

}



populateBreeds();
