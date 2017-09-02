import api from './api'
api()
    .then(response => response.json())
    .catch(e => console.error('Failed while fetching github user profile'))
    .then(response => console.log('response',response))