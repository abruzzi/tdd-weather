import { createServer } from "miragejs";
import data from "./melbourne.json";

export const createMockServer = () =>
  createServer({
    routes() {
      this.urlPrefix = "https://weather.service/api";
      this.get("/cities", () => data.list);
    },
  });
