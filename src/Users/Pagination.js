import React from 'react'

const Pagination = (props) => {

    
    const pageClickHandler = (event) => {
        
        let pageid = (event.target.id);
        props.clickPageHandler(pageid);
        
    }
    
    return (
        <>
            <li className="pageItem" id={props.pageId} onClick={pageClickHandler}>
                {props.children}
            </li>
        </>
    )
}

export default Pagination
