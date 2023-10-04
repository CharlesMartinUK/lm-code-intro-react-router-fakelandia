export function shouldDisable(subject:string, text:string) {

	if( (subjectLongEnough(subject) ) &&  (textLongEnough(text)) ) return false
	
	return true
}
  

export function subjectLongEnough(subject:string) {
	
	return subject.length > 2 ? true : false 
	
}


export function textLongEnough(text:string) {
	
	return text.length > 10 ? true : false
}



