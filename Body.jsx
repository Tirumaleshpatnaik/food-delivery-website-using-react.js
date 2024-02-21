import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Restaurantcard from './Restaurantcard';
import Shimmer from './Shimmer';

// import reslist from './utilis/mockdata';

const Body = () => {


  let [restaurantList, setRestaurantList] = useState([])

  let [filtereddata, setFiltereddata] = useState([])

  let [search, setSearch] = useState("")

  // let[food,setFood]=useState("")

  useEffect(() => {
    fetchdata()
  }, [])


  const fetchdata = async () => {
    const data = await fetch("https://mocki.io/v1/57442d6e-2bbb-405b-9366-ffb7e36773e3")
    const json = await data.json()
    console.log(json);
    
    setRestaurantList(json)
    setFiltereddata(json)
    // setFood(json)
  }

  return restaurantList.length === 0 ? (<Shimmer />) :
    (
      <>
     

        <div className='body'>
          <div id="filter">
            <div id="search">
              <input type="text" id="searchbox" placeholder='search for restro' value={search} onChange={(e) => {
                // console.log(e);
                setSearch(e.target.value)
                
              }} />
              <button onClick={() => {
                const filteredlist = restaurantList.filter((list) =>

                  list.res.toLowerCase().includes(search.toLowerCase())
                )
                setFiltereddata(filteredlist)
              }}>search</button>


            {/* for food list search */}
            {/* <input type="text" id="food" placeholder='search for food' value={food} onChange={(e)=>{
                        setFood(e.target.value)
            }}/>

          <button onClick={()=>{
            const filterfood=restaurantList.filter((foodlist)=>
            console.log(foodlist.cusine.includes(food))
                  
            )
            setFood(filterfood)
          }}>search</button> */}


            </div>



            <button id="filterbtn" onClick={() => {

              // filter logic

              const filterlist = restaurantList.filter(
                (res) => res.rating > 4
              )
              setRestaurantList(filterlist)
            }}>✔️Top rated restaurants 🍽️</button>

          </div>

          <div id="rescontainer">


            {filtereddata.map((restaurant) => (
              <Restaurantcard key={restaurant.id} resdata={restaurant} />
            ))}

          </div>

        </div>
      </>
    )
}

export default Body