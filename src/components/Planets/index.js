import EqualColumnWidthGrid from "../layouts/EqualColumnWidthGrid"
import Card from './Card'
import { IndexWrapper as Wrapper } from "../styles/common/Card.styled"
import Spinner from '../common/Spinner'
import Alert from '../common/Alert'
import Pagination from '../Pagination'
import SearchInput from '../common/input/Search'

export function Planets({
    planets, currentPage, totalCount, pageSize, setCurrentPage,  searchTerm,
    handleSearchTermChange, isLoading, hasError, error
}){
    return (
        <Wrapper>
            {isLoading &&
                    <Spinner style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2rem 0'
                    }} />
                }

            {hasError &&
                <Alert>{error}</Alert>
            }

            {(!isLoading && !hasError) &&
                <>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                    <SearchInput value={searchTerm} onChange={handleSearchTermChange} placeholder="Pesquisar planeta..." />
                    <EqualColumnWidthGrid gap="2rem" def="1" sm="2" lg="3" xl="3">
                        {planets.map((character, index) => {
                            const {id, name, terrain, climate, population, diameter, orbital_period, rotation_period, image_url} = character
                            return (
                                <Card
                                    key={index}
                                    id={id}
                                    name={name}
                                    terrain={terrain}
                                    climate={climate}
                                    population={population}
                                    diameter={diameter}
                                    orbital_period={orbital_period}
                                    rotation_period={rotation_period}
                                    image_url={image_url}
                                />
                            )
                        })}
                    </EqualColumnWidthGrid>
                </>
            }
        </Wrapper>
    )
}