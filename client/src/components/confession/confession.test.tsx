import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Confession from './confession';

import { shouldDisable, SUBJECT_TOO_SHORT_MESSAGE, MESSAGE_TOO_SHORT_MESSAGE } from './confession_utils'




describe("Tests for confession page",  () => {
	
	test('Does element appear in text?', () => {
	  render(<Confession />);  
	  const linkElement = screen.getByText(/its very difficult to catch/i);
	  expect(linkElement).toBeInTheDocument();
	});


	test('Submit button disabled at start', () => {
	  render(<Confession />);  
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	});

	test('Submit button enabled with valid entry', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I Confess');
	  await user.type(subject[1], 'This is some very long text that is needed here');
	   
	  const button = screen.getByRole("button");
	  expect(button).not.toBeDisabled();
	 
	});

	test('No warning messages if long enough subject and message', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I Confess');
	  await user.type(subject[1], 'This is some very long text that is needed here');
	   
	  const message = screen.queryByText(SUBJECT_TOO_SHORT_MESSAGE);
	  expect(message).toBeNull();
	 
	  const message2 = screen.queryByText(MESSAGE_TOO_SHORT_MESSAGE);
	  expect(message2).toBeNull();
	 
	});


	test('Test if get warning messages when have not entered anything', () => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  //await user.type(subject[0], 'I');
	  //await user.type(subject[1], 'This');
	   
	  const message = screen.queryByText(SUBJECT_TOO_SHORT_MESSAGE);
	  expect(message).not.toBeNull();
	 
	  const message2 = screen.queryByText(MESSAGE_TOO_SHORT_MESSAGE);
	  expect(message2).not.toBeNull();
	 
	});



	test('Test if get warning messages subject and message too short', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I');
	  await user.type(subject[1], 'This');
	   
	  const message = screen.queryByText(SUBJECT_TOO_SHORT_MESSAGE);
	  expect(message).not.toBeNull();
	 
	  const message2 = screen.queryByText(MESSAGE_TOO_SHORT_MESSAGE);
	  expect(message2).not.toBeNull();
	 
	});



	test('Test warning message if subject too short but message is long enough ', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	 // await user.type(subject[0], 'I Confess');
	  await user.type(subject[1], 'This is some very long text that is needed here');
	   
	  const message = screen.queryByText(SUBJECT_TOO_SHORT_MESSAGE);
	  expect(message).not.toBeNull();
	 
	});


	test('Test warning message if message too short but subject is long enough ', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I Confess');
	  //await user.type(subject[1], 'This is some very long text that is needed here');
	   
	  const message = screen.queryByText(MESSAGE_TOO_SHORT_MESSAGE);
	  expect(message).not.toBeNull();
	 
	});



	test('Submit button disabled because not enough text', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I ');
	  await user.type(subject[1], 'This');
	   
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});

	test('Submit button disabled because message not long enough', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I Confess ');
	 
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});
	
	test('Submit button disabled because subject not long enough', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[1], 'This is some very long text that is needed here');
	 
	   
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});

})

// needs better testing, break off form into another component so that test disable enable better