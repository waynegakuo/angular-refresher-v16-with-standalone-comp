import { Injectable } from '@angular/core';
import { HousingLocation } from "../housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // First run npm install -g json-server
  // Then run json-server --watch db.json to mock a real live endpoint
  url = "http://localhost:3000/locations"
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined>{
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
