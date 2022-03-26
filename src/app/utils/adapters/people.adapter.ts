import {PeopleModel} from "../../models/people.model";

export class PeopleAdapter {

  recivePeopleAdapter(response: any): PeopleModel {

    const height = response.height;
    let newHeight = 'low';
    if(height > 200) {
      newHeight = 'high'
    } else if(height > 100 && height < 200) {
      newHeight = 'normal'
    }

    return new PeopleModel(
      response.name,
      newHeight,
      response.mass,
      response.hair_color,
      response.skin_color,
      response.eye_color,
      response.birth_year,
      response.gender,
      response.homeworld,
      response.url
    );
  }

}
