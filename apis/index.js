//C'est une très bonne pratique de séparer la logique API du reste de l'application.
import dataLingala from '../Helpers/FrenchLingala';
import dataSango from '../Helpers/FrenchSango';
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
