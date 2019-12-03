import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"

const filterSearchSort = props => {
  const FilterSearchSortContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    border-bottom: 5px solid ${colors.gold};
    justify-content: center;
    @media (min-width: 600px) {
      justify-content: space-between;
    }
  `

  const SearchCon = styled.div`
    min-width: 300px;
    padding: 10px;
    @media (min-width: 600px) {
      padding: 15px 0px 0px 0px;
    }
  `
  const Search = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    height: 40px;
    border: 0px solid transparent;
    color: ${colors.grey};
  `
  const FilterSortContainer = styled.div`
    display: flex;
    min-width: 300px;
    padding: 0px;
    /* align-items: flex-end; */
  `
  const FilterCon = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    color: white;
    margin: 0px 5px;
  `
  const SortCon = styled.div`
    /* border: 1px solid green; */
    width: 100%;

    color: white;
    margin: 0px;
  `
  // FILTER --------------------------
  const FilterTitleCon = styled.div``

  const FilterText = styled.div`
    background: ${colors.gold};
    padding: 5px 15px;
    font-family: "Roboto Slab", serif;
    border-radius: 5px 5px 0px 0px;
    text-transform: capitalize;
    height: 40px;
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
  `
  const DropDown = styled.div`
    position: relative;
    z-index: -1;

    ul {
      position: absolute;
      padding: 15px 0px 0px 0px;
      margin: 0;
      font-size: 12px;
      width: 100%;
      top: -10px;
      background-color: ${colors.dark};
      li {
        padding: 0;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        margin: 0;
        border-bottom: 0.5px dotted ${colors.gold};
        &:hover {
          background: ${colors.gold};
          color: ${colors.dark};
        }
      }
    }
  `

  // SORT ---------------------------
  const SortTitleCon = styled.div``
  const Title = styled.div`
    padding-left: 15px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    color: ${colors.grey};
  `
  const SortText = styled.div`
    background: ${colors.green};
    padding: 5px 15px;
    font-family: "Roboto Slab", serif;
    border-radius: 5px 5px 0px 0px;
    text-transform: capitalize;
    height: 40px;
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
  `

  return (
    <>
      <FilterSearchSortContainer>
        <SearchCon>
          <Search type="text" placeholder="Search.."></Search>
        </SearchCon>
        <FilterSortContainer>
          <FilterCon>
            <FilterTitleCon>
              <Title>Filter</Title>
              <FilterText onClick={props.handleOpenFilter}>
                {props.filter}
              </FilterText>
            </FilterTitleCon>

            {props.openFilter && (
              <DropDown>
                <ul>
                  <li onClick={() => props.handleSetFilter("all")}>All</li>
                  <li onClick={() => props.handleSetFilter("hats")}>Hats</li>
                  <li onClick={() => props.handleSetFilter("boots")}>Boots</li>
                  <li onClick={() => props.handleSetFilter("clothing")}>
                    Clothing
                  </li>
                  <li onClick={() => props.handleSetFilter("accessories")}>
                    Accessories
                  </li>
                  <li onClick={() => props.handleSetFilter("gifts")}>Gifts</li>
                  <li onClick={() => props.handleSetFilter("beard")}>Beard</li>
                  <li onClick={() => props.handleSetFilter("sale")}>Sale</li>
                </ul>
              </DropDown>
            )}
          </FilterCon>
          <SortCon>
            <SortTitleCon>
              <Title>Sort</Title>
              <SortText onClick={props.handleOpenSort}>{props.sort}</SortText>
            </SortTitleCon>
            {props.openSort && (
              <DropDown>
                <ul>
                  <li onClick={() => props.handleSetSort("lowToHigh")}>
                    Low To High
                  </li>
                  <li onClick={() => props.handleSetSort("highToLow")}>
                    High To Low
                  </li>
                </ul>
              </DropDown>
            )}
          </SortCon>
        </FilterSortContainer>
      </FilterSearchSortContainer>
    </>
  )
}

export default filterSearchSort
