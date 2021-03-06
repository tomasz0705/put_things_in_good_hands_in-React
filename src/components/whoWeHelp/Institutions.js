import React, { useState, useEffect } from 'react';


function Institutions({ institutions, selectedType }) {
    // console.log(institutions, selectedType);
    const [institutionsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    //Get current institutions
    const indexOfLastInstitution = currentPage * institutionsPerPage;
    const indexOfFirstInstitution = indexOfLastInstitution - institutionsPerPage;
    /* const currentInstitutions = institutions.slice(indexOfFirstInstitution, indexOfLastInstitution); */

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];

    /* let totalInstitutions = institutions.length; */

    //Adjusting pageNumbers
    if(selectedType === "fundacja") {
        pageNumbers.push(1, 2, 3);
    } else if (selectedType === "organizacja") {
        pageNumbers.push(1, 2);
    } else if (selectedType === "lokalne") {
        pageNumbers.push(1);
    }

    useEffect(() => {
        setCurrentPage(1);
      }, [selectedType]);

    /* for(let i = 1; i <= Math.ceil(totalInstitutions / institutionsPerPage); i++) {
        pageNumbers.push(i);
    } */

    return(
        <>
            <ul className="list-group">
                {institutions.filter((o) => o?.type === selectedType).slice(indexOfFirstInstitution, indexOfLastInstitution).map((el, i) => {
                    return (
                        <li key={i}>
                            <div className="organizations__content">
                                <div className="organizations__name">
                                    <h3>{el?.tile}</h3>
                                    <p>{el?.desc}</p>
                                </div>
                                <div className="organizations__resources">
                                    <p>{el?.resources}</p>
                                </div>
                            </div>
                            <hr/>
                        </li>
                    );
                })}
            </ul>
            <div className="whowehelp__btnpages">
               <nav>
                    <ul className="pagination">
                        {pageNumbers.map(number => {
                            return (
                                <li key={number} className="page-item">
                                    <button
                                        onClick={() => paginate(number)}
                                        className={currentPage === number ? "active" : ""}
                                        >
                                        {number}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
       </>
    );
}

export default Institutions;