//C'est une très bonne pratique de séparer la logique API du reste de l'application.
import * as frenchLingala from '../Helpers/FrenchLingala';
import * as frenchSango from '../Helpers/FrenchSango';
const API_TOKEN =
  'T/6wiLml8CM8yiuAxl0NJurKWQvb6JW4ttSN1XMLzZeJFwHmVpf0CWO79E5AsTegFec=';

export function createTranslation(language, source, target) {
  let translate = language === 'sango' ? 'frenchsango' : 'frenchlingala';
  let url = 'https://bantu-dico.com/api/' + translate;
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': API_TOKEN,
    },
    body: JSON.stringify({
      french: source,
      traduction: target,
      check: true,
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function search(text, language) {
  let url = 'https://bantu-dico.com/api/' + language + '/search';

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': API_TOKEN,
    },
    body: JSON.stringify({
      identifier: 'word',
      search: text,
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function searchTraduction(text, source, target) {
  let translate = 'frenchlingala';
  let identifier = 'french_id';
  switch (source) {
    case 'french':
      translate = target === 'sango' ? 'frenchsango' : 'frenchlingala';
      identifier = 'french_id';
      break;
    case 'sango':
      translate = 'frenchsango';
      identifier = 'sango_id';
      break;
    default:
      translate = 'frenchlingala';
      identifier = 'lingala_id';
  }
  let url = 'https://bantu-dico.com/api/' + translate + '/search';
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': API_TOKEN,
    },
    body: JSON.stringify({
      identifier: identifier,
      search: text,
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

//retourne une translation random en fonction du language
export function randomTranslation(language) {
  var min = 1;
  var max = 250;
  var id = Math.floor(Math.random() * (+max - +min)) + +min;
  var translation =
    language === 'lingala'
      ? frenchLingala.FRENCH_LINGALA[id]
      : frenchSango.FRENCH_SANGO[id];

  return [translation];
}
