import { StartshipsModel } from "../../models/startships.model"

export class StartshipsAdapter {
  recivePeopleAdapter(response: any): StartshipsModel {
      const length: number = +response.length;
      let newlength = 'small';
      if(length > 1000) {
        newlength = 'large';
      } else if(length > 100 && length < 1000) {
        newlength = 'normal'
      }

    return new StartshipsModel(
      response.name,
      response.model,
      newlength,
      response.max_atmosphering_speed,
      response.crew,
      response.passengers,
      response.cargo_capacity,
      response.consumables,
      response.hyperdrive_rating,
      response.MGLT,
      response.starship_class,
      response.url
    );
  }
}
