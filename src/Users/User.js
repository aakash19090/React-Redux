import React, { Component } from 'react'
import Pagination from './Pagination'

class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data: null,
            totalItems : null,
            itemsPerPage : 10,
            currentPage : 1,
            isLoading : true,
            currPageData : null
            
        }
    }
    

    getInitialData = (initialData) => {
        const lastItemIndex = this.state.currentPage * this.state.itemsPerPage;
        const firstItemIndex = lastItemIndex - this.state.itemsPerPage;
        const InitialcurrPageData = initialData.slice(firstItemIndex,lastItemIndex)
        return InitialcurrPageData

    }
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(apidata => this.setState(
            {
                data: apidata,
                totalItems: apidata.length,
                isLoading: false,
                currPageData : this.getInitialData(apidata)
            }
            
            )
        )
    }

    handleClick = (e_id,InitialcurrPageData) => {

        const lastItemIndex = e_id * this.state.itemsPerPage;
        const firstItemIndex = lastItemIndex - this.state.itemsPerPage;
        const nextPageData = this.state.data.slice(firstItemIndex,lastItemIndex)

        this.setState({
            currentPage: Number(e_id),
            currPageData: nextPageData
        }
        )
    }

 
    render() {

        
        // Destructuring State Object
        const{ data, totalItems, itemsPerPage } = this.state
        const totalPageCount = totalItems / itemsPerPage

        const pageArr = []
        for(let i=1; i<=totalPageCount; i++){
            pageArr.push(i);
        }


        return this.state.isLoading ?  (
            <h1>Loading...</h1>
        ):(
            <div id="main_page">
                <ul className="current_page_data">
                    {
                        this.state.currPageData.map(postTitle =>{
                            return <li key={postTitle.id}> <h3> {postTitle.title} </h3></li>
                        })
                    }
                </ul>
                <ul className="pageList">
                    {
                        pageArr.map(pagenum => {
                            return <Pagination key={pagenum} pageId={pagenum} clickPageHandler={this.handleClick}> {pagenum} </Pagination> 
                            
                        })

                    }
                </ul>
            </div>
        )
    }
}

export default User
