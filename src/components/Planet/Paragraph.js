import {P} from '../styles/common/TextAndImage.styled'

export default function Paragraph({
    name='', terrain, climate, population, diameter, orbital_period,
    rotation_period, ...otherProps
}){
    const moreThanOneTerrain = !!terrain.includes(',')
    const moreThanOneClimate = !!climate.includes(',')
    const hasTerrain = terrain !== 'desconhecido'
    const hasClimate = climate !== 'desconhecido'
    const hasPopulation = population !== 'desconhecido'
    const hasDiameter = diameter !== 'desconhecido'
    const hasOrbitalPeriod = orbital_period !== 'desconhecido'
    const hasRotationPeriod = rotation_period !== 'desconhecido'
    let lastDot = false

    const totalUnknown = !hasTerrain && !hasClimate && !hasPopulation && !hasDiameter && !hasOrbitalPeriod && !hasRotationPeriod

    const hasBellowClimate = hasPopulation || hasDiameter || hasOrbitalPeriod || hasRotationPeriod
    const hasBellowPopulation = hasDiameter || hasOrbitalPeriod || hasRotationPeriod
    const hasBellowDiameter = hasOrbitalPeriod || hasRotationPeriod
    const hasBellowOrbitalPeriod = hasRotationPeriod

    function finishText(){
        if(lastDot){
            return ''
        }else{
            lastDot = true
            return '.'
        }
    }

    return (
        <P {...otherProps}>

            {totalUnknown && <>
                Nada se sabe sobre o planeta <strong>{name}</strong> além de seu nome.
            </>}

            {!totalUnknown && <>
                O planeta <strong>{name}</strong> possui
                o{moreThanOneTerrain && 's'} tipo{moreThanOneTerrain && 's'} de terreno{moreThanOneTerrain && 's'} {terrain},
                com clima{moreThanOneClimate && 's'} {climate}
                {hasBellowClimate ? ' e ' : finishText()}
                {hasPopulation && `uma população de aproximadamente ${population} habitantes`}

                {hasBellowPopulation ? ', ' : finishText()}
                {hasDiameter && `um diâmetro de ${diameter}`}

                {hasBellowDiameter ? ', ' : finishText()}
                {hasOrbitalPeriod && `um período orbital de ${orbital_period}`}

                {hasBellowOrbitalPeriod ? ' e ' : finishText()}
                {hasRotationPeriod && `um período rotacional de ${rotation_period}.`}
            </>}
        </P>
    )
}