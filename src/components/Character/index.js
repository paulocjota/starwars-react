import Alert from '../common/Alert'
import Spinner from '../common/Spinner'
import Img from './Img'
import { NoImageWrapper, Wrapper } from '../styles/common/TextAndImage.styled'
import Paragraph from './Paragraph'
import NoImage from '../common/NoImage'

export function Character({character,isLoading, hasError, Error}){
    const {image_url, name} = character

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
                    {image_url &&
                        <Img
                            src={image_url}
                            alt={name + ' from starwars'}
                        />
                    }

                    {!image_url &&
                        <NoImageWrapper>
                            <NoImage />
                        </NoImageWrapper>
                    }

                    <Paragraph {...character} />
                </>
            }
        </Wrapper>
    )
}