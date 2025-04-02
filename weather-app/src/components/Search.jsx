import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, GEO_API_URL } from "../utils/api"

function Search() {
	const [search, setSearch ] = useState("");

	const loadOptionsFunc = (inputValue) => {
		return (
			fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
			.then(res => res.json())
			.then(data => {
				return {
					options: data.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						}
					})
				}
			})
			.catch(err => console.log(err))
		)
	}

  return (
    <AsyncPaginate
		debounceTimeout={1000}
		placeholder="Search any city"
		value={search}
		onChange={(e) => setSearch(e.target.value)}
		loadOptions={loadOptionsFunc}
	/>
  )
}

export default Search