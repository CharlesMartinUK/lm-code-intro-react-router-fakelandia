import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Confession from './confession';

import { shouldDisable } from './confession_utils'


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


	test('Submit button diabled because not enough text', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I ');
	  await user.type(subject[1], 'This');
	   
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});

	test('Submit button disabled because not message not long enough', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[0], 'I Confess ');
	 
	   
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});
	
	test('Submit button disabled because not subject not long enough', async() => { // this test causes warning for some reason
			
	  render(<Confession />);  
	  const subject = screen.getAllByRole('textbox');
	  await user.type(subject[1], 'This is some very long text that is needed here');
	 
	   
	  const button = screen.getByRole("button");
	  expect(button).toBeDisabled();
	 
	});


})

// needs better testing, break off form into another component so that test disable enable better