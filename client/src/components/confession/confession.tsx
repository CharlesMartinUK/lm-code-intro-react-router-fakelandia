import { useState } from 'react'


function shouldDisable(subject:string, text:string) {

	if((text.length > 10) && (subject.length > 2 )) return false
	
	return true
}

const Confession : React.FC = () => {
	
	
	const [subjectText, setSubjectText] = useState("")
	const [confessionText, setConfessionText] = useState("")
	
	//const [submitButtonState, setSubmitButtonState] = useState(true)
	
	var disableSubmit  = shouldDisable(subjectText, confessionText)
	
	
	return <>
	
	<p>
	its very difficult to catch people committing misdemanours so we 
	appreciate it when citizens confess to us directly.
	</p>
	
	<p>
	However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!
	</p>
	
	<form>
		Subject:<input type="text" onChange={(e) =>setSubjectText(e.target.value)} /><br/>
		Reason for contact: <select>
		<option>I just want to talk</option>
		<option>Mild Public Rudeness</option>
		<option>Speaking in a Lift</option>
		
		<option>Not Eating Your Vegetables</option>
		<option>Supporting Manchester United</option>
		
		</select> <br/>
		
		<textarea rows={10} cols={50} onChange={(e) =>setConfessionText(e.target.value)}>
		
		</textarea><br/>
		
		<button type="submit" disabled={disableSubmit} >Confess</button>
	</form>
	</>
	
}

export default Confession
