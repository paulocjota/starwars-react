import { Link } from 'react-router-dom'
import NoImage from '../common/NoImage'
import {
    CardBody as Body,
    CardTable as Table,
    CardImgWrapper as ImgWrapper
} from '../styles/common/Card.styled'

export default function Card({
    id, name, terrain, climate, population, diameter, orbital_period,
    rotation_period, image_url
}){
    return (
        <Body>
            <Link to={`/planet/${id}`}>
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
                            <th>Terreno</th>
                            <td>{terrain}</td>
                        </tr>
                        <tr>
                            <th>Clima</th>
                            <td>{climate}</td>
                        </tr>
                        <tr>
                            <th>População</th>
                            <td>{population}</td>
                        </tr>
                        <tr>
                            <th>Diâmetro</th>
                            <td>{diameter}</td>
                        </tr>
                        <tr>
                            <th>Período orbital</th>
                            <td>{orbital_period}</td>
                        </tr>
                        <tr>
                            <th>Período rotacional</th>
                            <td>{rotation_period}</td>
                        </tr>
                    </tbody>
                </Table>
            </Link>
        </Body>
    )
}