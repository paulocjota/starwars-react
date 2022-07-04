import CharactersComponent from "../../components/Characters"
import { useState, useEffect } from 'react'
import { API_BASE_URL, DEFAULT_ERROR_MESSAGE, IS_DEVELOPMENT_ENV } from "../../Config"
import { Character as CharacterClass } from '../../classes/Character'
import axios from "axios";
import _ from 'lodash'
import buildSearchParams from "../../functions/buildSearchParams";
import buildTitle from "../../functions/buildTitle";

export default function Characters({ title }){
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [Error, setError] = useState('')
    const [characters, setCharacters] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        document.title = buildTitle(title);
    }, [title]);

    useEffect(() => {
        fetchCharacters()
    }, [])

    useEffect(() => {
        setCurrentPage(1)
        fetchCharacters()
        return () => fetchCharacters.cancel();
    }, [searchTerm])

    useEffect(() => {
        fetchCharacters()
        return () => fetchCharacters.cancel();
    }, [currentPage])

    function handleSearchTermChange(event){
        setSearchTerm(event.target.value)
    }

    const fetchCharacters = _.debounce( async () => {
        setIsLoading(true)
        try{
            const params = buildSearchParams({
                search: searchTerm,
                page: currentPage
            })
            const response = await axios.get(`${API_BASE_URL}/people${params}`)
            setTotalCount(response.data.count)
            const normalizedData = response.data.results.map(value => {
                return (new CharacterClass(value)).normalizedData()
            })
            setCharacters(normalizedData)
        }catch(error){
            setHasError(true)
            setError(IS_DEVELOPMENT_ENV ?
                'Ocorreu um erro: ' + error.message :
                DEFAULT_ERROR_MESSAGE
            )
        }
        setIsLoading(false)
    }, 500)

    return (
        <CharactersComponent
            currentPage={currentPage}
            pageSize={10}
            setCurrentPage={setCurrentPage}
            characters={characters}
            totalCount={totalCount}
            isLoading={isLoading}
            hasError={hasError}
            Error={Error}
            searchTerm={searchTerm}
            handleSearchTermChange={handleSearchTermChange}
        />
    )
}
