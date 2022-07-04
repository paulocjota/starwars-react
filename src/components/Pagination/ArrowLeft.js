import { ArrowLeftBody, ChevronLeftIcon } from "../styles/Pagination.styled";

export default function ArrowLeft({ ...props }){
    return (
        <ArrowLeftBody {...props}>
            <ChevronLeftIcon />
        </ArrowLeftBody>
    )
}