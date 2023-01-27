export class Weather {
  private readonly data: any;

  constructor(data: any) {
    this.data = data;
  }

  get temperature() {
    return `${Math.ceil(this.data.main.temp)}°` ?? "-/-";
  }

  get main() {
    return this.data.weather[0].main.toLowerCase();
  }
}

export const emptyWeather = new Weather({
  main: {temp: 0},
  weather: [{main: "-/-"}],
});