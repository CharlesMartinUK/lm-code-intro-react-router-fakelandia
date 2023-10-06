
import {useState, createContext, useContext  } from 'react'
import {useFetchData} from '../../hooks/use_fetch_data'
import { BASE_URL } from '../../utils/url'

export type MisdemeanourDetail = { citizenId: string, misdemeanour:string, date:string  };



interface PassedMis  {'misdemeanours':MisdemeanourDetail[] }


function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}


const Misdemeanour : React.FC = () => {
		
	const { data, error, isFetching, status } = useFetchData<PassedMis>(BASE_URL+'api/misdemeanours/10');
	
	//console.log(mis)

	
	let mds:MisdemeanourDetail[] = []
	// STUPID CODE TO GET RID OF MISDEMANOUR KEY SO JUST HAVE ARRAY, MUST BE BETTER WAY
	if(data) {
		if(data.hasOwnProperty('misdemeanours') ) {
			mds = data.misdemeanours
			//console.log(mds)
		}
	}
	
	
	let [filterOptions, setFilterOptions] = useState("all") 
	
	function change(event: React.FormEvent) {
		// Use cast to any works but is not type safe
        let unsafeSearchTypeValue = ((event.target) as any).value;
		//console.log(unsafeSearchTypeValue)
		setFilterOptions(unsafeSearchTypeValue) // note this will cause a page reload apart from state
	}
	
		
	//console.log(filterOptions)
	
	//ADD THE EXTRA MIS CREATED BY USER
	let extraItems = localStorage.getItem("mis")
	
	if(extraItems != null) {
		let mis = JSON.parse(extraItems)
		for(const t of mis){
			mds.push(  {"date":t?.date,"misdemeanour": t?.misdemeanour, "citizenId": t?.citizenId} )
		}
	}
	
	
	return (<>Misdemeanour!
			<table className='misTable'><thead><tr><th>Citizen Id</th><th>Misdemeanour</th><th>Date</th><th>Punishment</th></tr></thead>
			<tbody>
			
			 { mds.map ((m,i) => {
					const width = getRandomInt(50)+50
					const height = getRandomInt(50)+50
					//console.log(w)
					const path = "https://picsum.photos/"+width+"/"+height
					//console.log(path)
					if((filterOptions == 'all') || (filterOptions === m.misdemeanour)) {
						
						let d :{[name: string]: string} =  {"united":"😈","lift":"🗣","vegetables": "🥗" , "rudeness": "🤪"}
						let emoj = d[m.misdemeanour]
						
						return <tr key={i}><td>{m.citizenId}</td><td>{m.misdemeanour} {emoj}</td><td>{ m.date }</td><td><img src={path} />;</td></tr>
					}
				} )
				 
			 }
			 </tbody>
			</table>	
			
			<select onChange={change}>
				<option value="all" defaultValue="all" >Show all</option>
				<option value="lift">lift</option>
				<option value="united">United</option>
				<option value="vegetables">Vegetables</option>
				<option value="rudeness">Rudeness</option>
			</select>
			
	</>)
}

export default Misdemeanour