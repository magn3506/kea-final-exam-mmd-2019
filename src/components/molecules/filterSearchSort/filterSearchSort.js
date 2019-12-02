import React from "react"
import styled from "styled-components"

const filterSearchSort = props => {
  const FilterSearchSortContainer = styled.div``

  const FilterTitle = styled.div`
    cursor: pointer;
    &:hover {
      color: red;
    }
  `
  const FilterList = styled.ul`
    cursor: pointer;
    li:hover {
      color: blue;
    }
  `

  const SortTitle = styled.div``
  const SortList = styled.ul``

  return (
    <>
      <FilterSearchSortContainer>
        <div>Search field</div>
        <div>
          <div>
            <FilterTitle onClick={props.handleOpenFilter}>
              Filter: {props.filter}
            </FilterTitle>
            {props.openFilter && (
              <FilterList>
                <li onClick={() => props.handleSetFilter("all")}>All</li>
                <li onClick={() => props.handleSetFilter("hats")}>Hats</li>
                <li onClick={() => props.handleSetFilter("boots")}>Boots</li>
              </FilterList>
            )}
          </div>
          <div>
            <SortTitle onClick={props.handleOpenSort}>
              Sort by {props.sort}
            </SortTitle>
            {props.openSort && (
              <SortList>
                <li onClick={() => props.handleSetSort("lowToHigh")}>
                  Low To High
                </li>
                <li onClick={() => props.handleSetSort("highToLow")}>
                  High To Low
                </li>
              </SortList>
            )}
          </div>
        </div>
      </FilterSearchSortContainer>
    </>
  )
}

export default filterSearchSort


// {
//   /* <h1>Products Page</h1>
// {location.state && location.state.filter ? (
//   <p>{location.state.filter}</p>
// ) : (
//   <p>no product added</p>
// )} */
// }


  //  {/* {products.map(e => {
  //         return (
  //           <div>
  //             <ul>
  //               <li>{e.node.title}</li>
  //               <li>{e.node.collection}</li>
  //               <li>{e.node.price}</li>
  //             </ul>
  //           </div>
  //         )
  //       })} */}