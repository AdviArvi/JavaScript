import {loader} from './element.js';
export async function fetchJoke() {
    // turn loader on
    loader.classList.remove('hidden');
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    // turn the loader off
    loader.classList.add('hidden');
    return data;
  }