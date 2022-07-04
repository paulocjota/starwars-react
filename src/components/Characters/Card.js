import { Link } from 'react-router-dom'
import NoImage from '../common/NoImage'
import {
    CardBody as Body,
    CardTable as Table,
    CardImgWrapper as ImgWrapper
} from '../styles/common/Card.styled'

export default function Card({id, name, height, mass, birth_year, image_url}){
    return (
        <Body>
            <Link to={`/character/${id}`}>
                <ImgWrapper>
                    {image_url &&
                    <img
                        src={image_url}
                        alt={name + ' from starwars'}
                    />}
                    {!image_url &&
                    <NoImage />}
                </ImgWrapper>
                <Table>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Altura</th>
                            <td>{height}</td>
                        </tr>
                        <tr>
                            <th>Peso</th>
                            <td>{mass} kg</td>
                        </tr>
                        <tr>
                            <th>Ano de nasc.</th>
                            <td>{birth_year}</td>
                        </tr>
                    </tbody>
                </Table>
            </Link>
        </Body>
    )
}