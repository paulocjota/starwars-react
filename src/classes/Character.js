import { API_BASE_URL, CHARACTERS } from '../Config'

export class Character{
    constructor({
        name, url='', height, mass, birth_year, hair_color, skin_color,
         eye_color, gender, homeworld, image_url, species=[], starships=[],
         vehicles=[]
    }){
        this.name = name;
        this.url = url;
        this.id = this.getIdFromUrl(API_BASE_URL + '/people/');
        this.image_url = this.getImageFromId()
        this.height = height;
        this.mass = mass;
        this.birth_year = birth_year;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.gender = gender;
        this.homeworld = homeworld;
        this.species = species;
        this.starships = starships;
        this.vehicles = vehicles;
    }

    normalizedMass(){
        return this.mass === 'unknown' ? 'desconhecido' : this.mass
    }

    normalizeBirthYear(){
        return this.birth_year === 'unknown' ? 'desconhecido' : this.birth_year
    }

    normalizeSkinColor(){
        return CHARACTERS.SKIN_COLORS[this.skin_color] ?? 'n/a'
    }

    normalizeHairColor(){
        return CHARACTERS.HAIR_COLORS[this.hair_color] ?? 'n/a'
    }

    normalizeGender(){
        return CHARACTERS.GENDERS[this.gender] ?? 'n/a'
    }

    normalizeEyeColor(){
        return CHARACTERS.EYE_COLORS[this.eye_color] ?? 'n/a'
    }

    getIdFromUrl(baseUrl){
        return this.url.replace(baseUrl, '').replace('/', '')
    }

    getImageFromId(){
        return CHARACTERS.IMAGES[parseInt(this.id)-1] ?? null
    }

    normalizedData(){
        return {
            name: this.name,
            url: this.url,
            id: this.id,
            image_url: this.image_url,
            height: this.height,
            mass: this.normalizedMass(),
            birth_year: this.normalizeBirthYear(),
            hair_color: this.normalizeHairColor(),
            skin_color: this.normalizeSkinColor(),
            eye_color: this.normalizeEyeColor(),
            gender: this.normalizeGender(),
            homeworld: this.homeworld,
            starships: this.starships,
            vehicles: this.vehicles
        }
    }
}