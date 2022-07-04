import { useEffect, useState } from 'react'
import axios from "axios";
import {
    API_BASE_URL,
    DEFAULT_ERROR_MESSAGE,
    IS_DEVELOPMENT_ENV,
    TITLE_PREFIX,
    TITLE_SUFIX
} from "../../Config"
import { Planet } from '../../classes/Planet'
import { Planets as PlanetsComponent } from '../Planets'
import buildSearchParams from '../../functions/buildSearchParams'
import _ from 'lodash'
import buildTitle from '../../functions/buildTitle';

export default function Planets({ title }){
    const [planets, setPlanets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        document.title = buildTitle(title);
    }, [title]);

    useEffect(() => {
        fetchPlanets()
    }, [])

    useEffect(() => {
        setCurrentPage(1)
        fetchPlanets()
        return () => fetchPlanets.cancel();
    }, [searchTerm])

    useEffect(() => {
        fetchPlanets()
        return () => fetchPlanets.cancel();
    }, [currentPage])

    function handleSearchTermChange(event){
        setSearchTerm(event.target.value)
    }

    const fetchPlanets = _.debounce( async () => {
        setIsLoading(true)
        try{
            const params = buildSearchParams({
                search: searchTerm,
                page: currentPage
            })
            const response = await axios.get(`${API_BASE_URL}/planets${params}`)
            setTotalCount(response.data.count)
            const normalizedPlanets = response.data.results.map(planet => {
                return (new Planet(planet)).normalizedData()
            })
            setPlanets(normalizedPlanets)
        }catch(error){
            setHasError(true)
            setError(IS_DEVELOPMENT_ENV ?
                'Ocorreu um erro: ' + error.message :
                DEFAULT_ERROR_MESSAGE
            )
        }
        setIsLoading(false)
    }, 1500)

    return (
        <PlanetsComponent
            planets={planets}
            hasError={hasError}
            error={error}
            isLoading={isLoading}
            currentPage={currentPage}
            pageSize={10}
            setCurrentPage={setCurrentPage}
            totalCount={totalCount}
            searchTerm={searchTerm}
            handleSearchTermChange={handleSearchTermChange}
        />
    )
}