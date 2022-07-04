import {P} from '../styles/common/TextAndImage.styled'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../Config'

export default function Paragraph({
    name, height, mass, birth_year, skin_color, gender, homeworld, className
}){
    return (
        <P className={className}>
            {gender === 'feminino' ? 'A' : 'O'} personagem <strong>{name}</strong> possui
            uma altura de {height}cm,
            {mass === 'desconhecido' ? ' ' : ' pesando cerca de ' + mass + 'kg, '}


            {birth_year !== 'desconhecido' ?  (gender === 'feminino' ? 'ela' : 'ele') + ` nasceu no ano de ${birth_year},` : ''}

            {skin_color !== 'n/a' && <> sua pele possui a cor {skin_color}, </>}

            {gender !== 'n/a' && <> seu genêro é {gender}, </>}

            seu planeta natal é <Link to={'/planet/' + homeworld.url.replace(`${API_BASE_URL}/planets/`, '').replace(`/`, '')}>{homeworld.name}</Link>.
        </P>
    )
}