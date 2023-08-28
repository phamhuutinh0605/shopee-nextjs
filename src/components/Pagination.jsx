import React, { useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

function Pagination({ data }) {
    const itemsPerPage = 2
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="join mx-auto">
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
                <RiArrowLeftSLine />
            </button>
            {/* <button className="join-item btn btn-secondary rounded-lg btn-sm">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </button> */}
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">1</button>
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">2</button>
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">3</button>
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">4</button>
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">...</button>
            <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
                <RiArrowRightSLine />
            </button>
        </div>
    )
}

export default Pagination
