import { ArrowRightBody, ChevronRightIcon } from "../styles/Pagination.styled";

export default function ArrowRight({ ...props }){
    return (
        <ArrowRightBody {...props}>
            <ChevronRightIcon />
        </ArrowRightBody>
    )
}