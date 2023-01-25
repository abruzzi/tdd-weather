import {createServer} from "miragejs";
import data from "./search-response.json";

export function createMockServer() {
  return createServer({
    routes() {
      this.urlPrefix = "https://api.openweathermap.org/geo/1.0";

      this.get("/direct", () => {
        return data;
      });
    },
  });
}