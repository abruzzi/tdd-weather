import {createServer} from "miragejs";
import data from "./search-response.json";
import melbourne from './melbourne-weather.json';

export function createMockServer() {
  return createServer({
    routes() {
      this.urlPrefix = "https://api.openweathermap.org";

      this.get("/geo/1.0/direct", () => {
        return data;
      });

      this.get('/data/2.5/weather', () => {
        return melbourne;
      })
    },
  });
}