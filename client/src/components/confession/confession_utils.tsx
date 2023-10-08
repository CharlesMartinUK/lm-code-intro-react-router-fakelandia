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


export const SUBJECT_TOO_SHORT_MESSAGE = "Subject text needs to at least 2 characters"
export const MESSAGE_TOO_SHORT_MESSAGE = "Confession text needs to be at least 10 characters"
