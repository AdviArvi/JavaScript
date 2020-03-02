import {fetchJoke} from './lib.js';
import * as element from './element.js';
import {randomItemFromArray} from './util.js';
import buttonText from './buttonText.js';

export async function handleClick() {
    const { joke } = await fetchJoke();
    element.jokeHolder.textContent = joke;
    element.jokeButtonSpan.textContent = randomItemFromArray(
        buttonText,
      element.jokeButtonSpan.textContent
    );
  }