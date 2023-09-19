function shouldDisable(subject:string, text:string) {

	if((text.length > 10) && (subject.length > 2 )) return false
	
	return true
}

export default shouldDisable