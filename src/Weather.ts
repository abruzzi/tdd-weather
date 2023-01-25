type RemoteWeatherType = {
  main: {
    temp: number;
  };
  id: number;
  weather: [
    {
      main: string;
      description?: string;
    }
  ];
};

export class Weather {
  private readonly data: RemoteWeatherType;

  constructor(data: RemoteWeatherType) {
    this.data = data;
  }

  get temperature() {
    return this.data.main.temp ?? "-/-";
  }

  get main() {
    return this.data.weather.map((x: any) => x.main).join("/") ?? "-/-";
  }
}

export const EmptyWeather = new Weather({
  main: {
    temp: 0,
  },
  id: 0,
  weather: [{
    main: '',
    description: ''
  }]
})