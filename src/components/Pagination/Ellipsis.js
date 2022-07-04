import { EllipsisBody } from "../styles/Pagination.styled";

export default function Ellipsis({ ...props }){
    return (
        <EllipsisBody {...props}>&#8230;</EllipsisBody>
    )
}