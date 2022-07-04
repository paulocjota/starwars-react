import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    API_BASE_URL,
    DEFAULT_ERROR_MESSAGE,
    IS_DEVELOPMENT_ENV,
} from "../../Config"
import { Planet as PlanetClass } from '../../classes/Planet'
import { Planet as PlanetComponent} from '../Planet'
import axios from "axios";
import buildTitle from "../../functions/buildTitle";

export default function Planet({ title }){
    let params = useParams();
    const [planet, setPlanet] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [Error, setError] = useState('')

    useEffect(() => {
        document.title = buildTitle(title, planet?.name);
    }, [title, planet.name]);

    useEffect(() => {
        fetchPlanet()
    }, [])

    async function fetchPlanet(){
        setIsLoading(true)
        try{
            const response = await axios.get(`${API_BASE_URL}/planets/${params.id}`)
            const planetObj = new PlanetClass(response.data)
            const normalizedPlanet = planetObj.normalizedData()
            setPlanet(normalizedPlanet)
        }catch(error){
            setHasError(true)
            setError(IS_DEVELOPMENT_ENV ?
                'Ocorreu um erro: ' + error.message :
                DEFAULT_ERROR_MESSAGE
            )
        }
        setIsLoading(false)
    }

    return (
        <PlanetComponent
            planet={planet}
            isLoading={isLoading}
            hasError={hasError}
            Error={Error}
        />
    )
}