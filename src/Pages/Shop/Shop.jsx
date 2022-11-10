import React, { useEffect, useState }from 'react'
import "./Shop.css"
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import Card from '../../components/Card/Card';
import {product} from "../../Data/productsData"

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';

function Shop() {

    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = useState("")
    const [filtersSel, setFiltersSel] = useState(1)
    const [productsDis, setProductsDis] = useState([])
    const [filtersOption, setFiltersOption] = useState({
      priceRange: "",
      category: "",
    })

    useEffect(() => {
      setProductsDis([...product])
    }, [searchText === ""])
    

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    const clearSearch = (e) => {
        e.preventDefault();
        setSearchText("");
    }

    const searchFIlter = () => {
        const newArr = product.filter((item) => {
            let tempName = item.name.toLocaleLowerCase();
            let tempDes = item.description.toLocaleLowerCase();
            let tempCat = item.category.toLocaleLowerCase();
            if(tempName.includes(searchText.toLocaleLowerCase()) || tempDes.includes(searchText.toLocaleLowerCase()) || tempCat.includes(searchText.toLocaleLowerCase())) {
                return item
            }
        })
        return setProductsDis([...newArr]);
    }

    const handelEnterPress = (event) => {
        if (event.key === 'Enter') {
          searchFIlter()
        }
      }




    //   functions to add on the filter!

      const handelPriceRangeChange = (e) => {
        setFiltersOption({
          ...filtersOption,
          priceRange: e.target.value
        })
      }
      const handelCategoryRangeChange = (e) => {
        setFiltersOption({
          ...filtersOption,
          category: e.target.value
        })
      }

      const clearAllFilters = () => {
        setFiltersOption({
          ...filtersOption,
          priceRange: "",
          category: "",
        });
        searchFIlter();
        handleClose();
      }

      const applyFilters = () => {
        const newFilterArr = productsDis.filter(product => {
          // check all the properties
          if(filtersOption.priceRange !== "" && filtersOption.category !== "") {
            // checking the prices
            if(product.price <= parseFloat(filtersOption.priceRange) && product.category === filtersOption.category) {
              return product;
            }
          }
          // checking for either of the properties
          else if (filtersOption.priceRange !== "" || filtersOption.category !== "") {
            if(filtersOption.priceRange !== "") {
              if(product.price <= parseFloat(filtersOption.priceRange)) {
                return product;
              }
            } else if(filtersOption.category !== "") {
              if(product.category === filtersOption.category) {
                return product;
              }
            }
          } else if(filtersOption.priceRange === "" && filtersOption.category === "") {
            return product;
          }
        })
        handleClose()
        return setProductsDis([...newFilterArr]);

      }

    const filterDis = () => {
      if(filtersSel === 1) {
        return (
          <div className="filters__right--cont">
            <h1 className="filters__text">Secect you price range</h1>
            <div className='filters__form'>
                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='5'
                    onChange={handelPriceRangeChange}
                    checked={filtersOption.priceRange === "5"}
                    />
                  <label className='filters__text'>below $ 5</label>
                </div>

                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='10'
                    onChange={handelPriceRangeChange}
                    checked={filtersOption.priceRange === "10"}
                  />
                  <label className='filters__text'>below $ 10</label>
                </div>

                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='15'
                    onChange={handelPriceRangeChange}
                    checked={filtersOption.priceRange === "15"}
                    />
                  <label className='filters__text'>below $ 15</label>
                </div>

                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='20'
                    onChange={handelPriceRangeChange}
                    checked={filtersOption.priceRange === "20"}
                    />
                  <label className='filters__text'>below $ 20</label>
                  </div>
            </div>
          </div>
        )
      } else if(filtersSel === 2) {
        return (<div className="filters__right--cont">
          <h1 className="filters__text">This is Category Section section</h1>
          <div className='filters__form'>
              {/* <li> */}
                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='toys'
                    onChange={handelCategoryRangeChange}
                    checked={filtersOption.category === "toys"}
                    />
                  <label className='filters__text'>Toys</label>
                </div>

                <div className="filters__right__radio">
                  <input
                    type='radio'
                    id='radio1'
                    value='food'
                    onChange={handelCategoryRangeChange}
                    checked={filtersOption.category === "food"}
                  />
                  <label className='filters__text'>Food</label>
                </div>

                
              {/* </li> */}
            </div>
        </div>)
      }
    }

    const onFilterOptionChange = (e) => {

      if(e.target.id === "price") {
        setFiltersSel(1)
      } else if(e.target.id === "category") {
        setFiltersSel(2)
      }
    }
    
  return (
    <div className='shop'>
        <div className="shop__nav--section"></div>

        {/* search secition */}
        {/* This section is to control the inputs of the shop page! */}
        <div className="shop__controls">
            <div className="shop__filters div_center">
                <button className="btn-ts-sm" onClick={handleClickOpen}>Filters <FilterListIcon fontSize='large'/></button>
            </div>
            <div className="shop__search div_center">
                <div className="shop__search--container div_center">
                    <input value={searchText} onKeyDown={handelEnterPress} onChange={handleSearchChange} type="text" name="search" id="search" placeholder='Search . . .'/>
                    <div className="shop_search--tools">
                        <ClearIcon onClick={clearSearch} fontSize="large" className='shop_search--clearIcon' />
                        <div className="shop_search_vl"></div>
                        <SearchIcon onClick={searchFIlter} fontSize="large" className='shop_search--searchIcon'/>
                    </div>
                </div>
            </div>
            <div className="shop__search--btn div_center">
                <button className="btn-ts-sm" onClick={searchFIlter}>Search <SearchIcon fontSize="large"/></button>
            </div>
        </div>

        {/* Filter dialog */}
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          <div className="filters__dialog--title">
          <h2 className='filters__heading'>Filters</h2>
          <CloseIcon onClick={handleClose} fontSize='50' className="filters__closeIcon"/>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="filters__content">
            <div className="filters__left">
                <h4 className={`filters__left--price filters__text ${filtersSel===1 ? "filters__active" : ""}`} id="price" onClick={onFilterOptionChange}>Price</h4>
                {/* <h4 className="filters__text">Price</h4> */}
                <h4 className={`filters__left--cat filters__text ${filtersSel===2 ? "filters__active" : ""}`} id="category" onClick={onFilterOptionChange}>Category</h4>
            </div>
            <div className="filters__right">
              {filterDis()}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button className='btn-ts-filter' onClick={clearAllFilters}>Clear Filters</button>
          <button className='btn-ts-filter' onClick={applyFilters} autoFocus>
            Apply
          </button>
        </DialogActions>
      </Dialog>

        {/* product section */}
        <div className="shop__products">
            {productsDis.length === 0 ?
            <>
                <h1 className="noItemsError">Sorry, no Items match your search!</h1>
            </> : 
            <>
                {productsDis.map((item, id) => {
                    return <Card key={id} product={item}/>
                    
                })}
            </>
            }
            
        </div>
    </div>
  )
}

export default Shop