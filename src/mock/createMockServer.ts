import {createServer} from "miragejs";
import searchResults from "./search-result.json";
import weather from './weather.json';

const createMockServer = () => {
  return createServer({
    routes() {
      this.urlPrefix = "https://api.openweathermap.org";

      this.get("/geo/1.0/direct", () => {
        return searchResults;
      });

      this.get('/data/2.5/weather', () => {
        return weather;
      })
    },
  });
};

export {createMockServer};