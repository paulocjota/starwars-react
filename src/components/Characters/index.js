import SearchInput from '../common/input/Search'
import EqualColumnWidthGrid from "../layouts/EqualColumnWidthGrid"
import Card from './Card'
import { IndexWrapper as Wrapper } from "../styles/common/Card.styled"
import Spinner from '../common/Spinner'
import Alert from '../common/Alert'
import Pagination from '../Pagination'

export default function Characters({
    characters, currentPage, totalCount, pageSize, setCurrentPage, searchTerm,
    handleSearchTermChange, isLoading, hasError, Error
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
                <Alert>{Error}</Alert>
            }

            {!isLoading && !hasError &&
                <>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                    <SearchInput value={searchTerm} onChange={handleSearchTermChange} placeholder="Pesquisar personagem..." />
                    <EqualColumnWidthGrid gap="2rem" def="1" sm="2" lg="3" xl="3">
                        {characters.map((character, index) => {
                            const {id, name, height, mass, birth_year, image_url} = character
                            return (
                                <Card
                                    key={index}
                                    id={id}
                                    name={name}
                                    height={height}
                                    mass={mass}
                                    birth_year={birth_year}
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