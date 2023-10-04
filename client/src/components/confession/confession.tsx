import { useState } from 'react'

import shouldDisable from './confession_utils'
 
import {BASE_URL} from '../../utils/url'


//only one used in multible places so just this as constant
const JUST_TALK = "just-talk"


const Confession : React.FC = () => {
	
	
	const [subjectText, setSubjectText] = useState("")
	const [option, setOption] = useState(JUST_TALK)
	const [confessionText, setConfessionText] = useState("")
	
	//const [submitButtonState, setSubmitButtonState] = useState(true)
	
	
	function handleSubmit(event:any) {
		event.preventDefault();
		//alert("submit "+subjectText+" "+option+" "+confessionText);
		
		const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "subject": subjectText, "reason":option, "details":confessionText  })
		};
		
		
		//alert("Subject:"+subjectText+"  option:"+option+" details:"+confessionText)
		
		fetch(BASE_URL+'api/confess', requestOptions)
			.then(response => response.json())
			.then(data => {
				if(data.success === false)
					alert("ERROR "+data.message)
				else if(data.success === true) {
					alert(data.message) // supposed to add misdemeanours  here
				}
			});
		
	} 
 
	
	var disableSubmit  = shouldDisable(subjectText, confessionText)
	
	
	return <>
	
	<p>
	its very difficult to catch people committing misdemanours so we 
	appreciate it when citizens confess to us directly.
	</p>
	
	<p>
	However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!
	</p>
	
	<form onSubmit={handleSubmit}>
		Subject:<input type="text" onChange={(e) =>setSubjectText(e.target.value)} /><br/>
		Reason for contact: <select onChange={(e)=>setOption(e.target.value)} defaultValue={JUST_TALK}>
						<option value={JUST_TALK}>I just want to talk</option>
						<option value="rudeness">Mild Public Rudeness</option>
						<option value="lift">Speaking in a Lift</option>
						
						<option value="vegetables">Not Eating Your Vegetables</option>
						<option value="united">Supporting Manchester United</option>
		
		</select> <br/>
		
		<textarea rows={10} cols={50} onChange={(e) =>setConfessionText(e.target.value)}>
		
		</textarea><br/>
		
		<button type="submit" disabled={disableSubmit} >Confess</button>
	</form>
	</>
	
}

export default Confession
