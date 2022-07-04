import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE_URL, DEFAULT_ERROR_MESSAGE, IS_DEVELOPMENT_ENV } from "../../Config"
import { Character as CharacterClass } from '../../classes/Character'
import { Character as CharacterComponent} from '../Character'
import axios from "axios";
import buildTitle from "../../functions/buildTitle";

export default function Character({ title }){
    let params = useParams();
    const [character, setCharacter] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [Error, setError] = useState('')

    useEffect(() => {
        document.title = buildTitle(title, character?.name);
    }, [title, character.name]);

    useEffect(() => {
        fetchCharacter()
    }, [])

    async function fetchCharacter(){
        setIsLoading(true)
        try{
            const characterResponse = await axios.get(`${API_BASE_URL}/people/${params.id}`)
            const homeworldResponse = await axios.get(characterResponse.data.homeworld)
            characterResponse.data.homeworld = homeworldResponse.data
            const characterObj = new CharacterClass(characterResponse.data)
            const normalizedCharacter = characterObj.normalizedData()
            setCharacter(normalizedCharacter)
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
        <CharacterComponent
            character={character}
            isLoading={isLoading}
            hasError={hasError}
            Error={Error}
        />
    )
}