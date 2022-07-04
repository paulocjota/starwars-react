import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import Ul from './Ul'
import Li from './Li'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Ellipsis from './Ellipsis';
import { CurrentPage } from '../styles/Pagination.styled'

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <>
            <Ul>
                <ArrowLeft
                    disabled={currentPage === 1}
                    onClick={onPrevious}
                />

                <CurrentPage disabled>{currentPage}</CurrentPage>

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return <Ellipsis key={index} />;
                    }

                    return (
                        <Li
                            key={index}
                            currentPage={pageNumber === currentPage}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </Li>
                    );
                })}

                <ArrowRight
                    disabled={currentPage === lastPage}
                    onClick={onNext}
                />
            </Ul>
        </>
    );
};

export default Pagination;
