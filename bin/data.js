const axios = require('axios')

const axiosClient = axios.create({
    baseURL: 'http://simro-kberthe.pythonanywhere.com/api/',
  });

  module.exports = axiosClient
  