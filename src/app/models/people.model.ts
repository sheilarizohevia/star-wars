export class PeopleModel {
  name: string;
  height: string;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;

  constructor(
    name: string,
    height: string,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    url: string
) {
    this.name = name
    this.height = height
    this.mass = mass
    this.hair_color = hair_color
    this.skin_color = skin_color
    this.eye_color = eye_color
    this.birth_year = birth_year
    this.gender = gender
    this.homeworld = homeworld
    this.url = url
  }

}
