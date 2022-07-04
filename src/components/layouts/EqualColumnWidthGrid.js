import { Body } from '../styles/layouts/EqualColumnWidthGrid.styled'

export default function EqualColumnWidthGrid({
    children, gap='1rem', def=1, sm, md, lg, xl, xl2, ...otherProps
}){
    return (
        <Body gap={gap} def={def}
            sm={sm ?? def ?? 1}
            md={md ?? sm ?? 1}
            lg={lg ?? md ?? 1}
            xl={xl ?? lg ?? 1}
            xl2={xl2 ?? xl ?? 1}
            {...otherProps}
        >{children}</Body>
    )
}