import Alert from '../common/Alert'
import Spinner from '../common/Spinner'
import Img from './Img'
import { NoImageWrapper, Wrapper } from '../styles/common/TextAndImage.styled'
import Paragraph from './Paragraph'
import NoImage from '../common/NoImage'

export function Planet({planet,isLoading, hasError, error}){
    const {image_url, name} = planet

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

                    <Paragraph {...planet} />
                </>
            }
        </Wrapper>
    )
}