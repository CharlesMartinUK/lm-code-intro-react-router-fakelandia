
import {shouldDisable } from "./confession_utils"

describe("Tests for confession utils",  () => {

	test('Confession: shouldDisable fails', () => {
	  
	  expect(shouldDisable("","")).toBe(true); 
	  expect(shouldDisable("fdsfdsfsdfsdfsdfsdfsdfsdsfsd","")).toBe(true);
	  expect(shouldDisable("","fsdfsdfsdfdsfsdfdsfsdfsd")).toBe(true);
	});

	test('Confession: shouldDisable pass', () => {
	  
	  expect(shouldDisable("fsfsfsdfsdfsd","fsdfsdfsdfsd")).toBe(false); 
	 
	});

})