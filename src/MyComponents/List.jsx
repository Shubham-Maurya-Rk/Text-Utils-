import React from 'react'

const List = ({ list, setlist, filtertext }) => {
    const deleteItem = (index) => {
        setlist(prev => list.filter((item, i) => i !== index));
    }
    return (
        <div className='mt-4'>
            <ol className="list-group list-group-numbered">
                {
                    list && list.filter((item) => item.toLowerCase().includes(filtertext.toLowerCase())).map((item, index) => {
                        return <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item}</div>
                            </div>
                            <button onClick={() => deleteItem(index)} className=" btn badge px-4 pointer text-bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg></button>
                        </li>
                    })
                }
            </ol>
        </div>
    )
}

export default List
