import {createServer} from 'miragejs';

export const createMockServer = () => {
  return createServer({
    routes() {
      this.urlPrefix = 'https://weather.service'
      this.namespace = "api"

      this.get("/cities", () => {
        return ["Melbourne US", "Melbourne AU", "Melbourne GB"]
      })
    },
  })

}