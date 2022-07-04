import { API_BASE_URL, PLANETS } from '../Config'

export class Planet{
    constructor({
        name, terrain, climate, population, diameter, orbital_period,
        rotation_period, url
    }){
        this.name = name;
        this.terrain = terrain;
        this.climate = climate;
        this.population = population;
        this.diameter = diameter;
        this.orbital_period = orbital_period;
        this.rotation_period = rotation_period;
        this.url = url;
        this.id = this.getIdFromUrl(API_BASE_URL + '/planets/');
        this.image_url = this.getImageFromId()
    }

    getIdFromUrl(baseUrl){
        return this.url.replace(baseUrl, '').replace('/', '')
    }

    getImageFromId(){
        return PLANETS.IMAGES[parseInt(this.id)-1] ?? null
    }

    normalizedTerrain(){
        const terrains = this.terrain.split(', ')
        return terrains.reduce((previousValue, currentValue) => {
            return `${previousValue ? previousValue + ', ' : ''}${PLANETS?.TERRAINS[currentValue] ?? currentValue}`
        }, '')
    }

    normalizedClimate(){
        const climates = this.climate.split(', ')
        return climates.reduce((previousValue, currentValue) => {
            return `${previousValue ? previousValue + ', ' : ''}${PLANETS?.CLIMATES[currentValue] ?? currentValue}`
        }, '')
    }

    normalizedPopulation(){
        return this.population === 'unknown' ?
                'desconhecido' :
                Intl.NumberFormat().format(this.population)
    }

    normalizedDiameter(){
        return this.diameter === 'unknown' ?
                'desconhecido' :
                Intl.NumberFormat().format(this.diameter)
    }

    normalizedOrbitalPeriod(){
        return this.orbital_period === 'unknown' ?
                'desconhecido' :
                Intl.NumberFormat().format(this.orbital_period)
    }

    normalizedRotationPeriod(){
        return this.rotation_period === 'unknown' ?
                'desconhecido' :
                Intl.NumberFormat().format(this.rotation_period)
    }

    normalizedData(){
        return {
            name: this.name,
            terrain: this.normalizedTerrain(),
            climate: this.normalizedClimate(),
            population: this.normalizedPopulation(),
            diameter: this.normalizedDiameter(),
            orbital_period: this.normalizedOrbitalPeriod(),
            rotation_period: this.normalizedOrbitalPeriod(),
            url: this.url,
            id: this.id,
            image_url: this.image_url
        }
    }
}