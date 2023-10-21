import type {RemoteSearchResultItem} from "./RemoteSearchResultItem";

const countryMap = {
  AU: "Australia",
  US: "United States",
  GB: "United Kingdom",
};

class SearchResultItemType {
  private readonly _city: string;
  private readonly _state: string;
  private readonly _country: string;

  constructor(item: RemoteSearchResultItem) {
    this._city = item.name;
    this._state = item.state;
    this._country = item.country;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get country() {
    // @ts-ignore
    return countryMap[this._country] || this._country;
  }
}

export { SearchResultItemType };
