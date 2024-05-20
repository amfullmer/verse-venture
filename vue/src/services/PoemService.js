import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:3000"
  });

  export default {

    getPoemsByTitle(title) {
        return http.get( `/poems`, title);
    },

    getPoemsByAuthor(author) {
        return http.get( `/poems`, author);
    }
  }