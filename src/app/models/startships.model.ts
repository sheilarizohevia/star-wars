export class StartshipsModel {
  name: string;
  model: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  url: string;

  constructor(
    name: string,
    model: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    url: string
) {
    this.name = name
    this.model = model
    this.length = length
    this.max_atmosphering_speed = max_atmosphering_speed
    this.crew = crew
    this.passengers = passengers
    this.cargo_capacity = cargo_capacity
    this.consumables = consumables
    this.hyperdrive_rating = hyperdrive_rating
    this.MGLT = MGLT
    this.starship_class = starship_class
    this.url = url
  }

}

