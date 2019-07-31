import React from 'react';
import Person from './Person/Person';

const persons = props => {
	console.log('[Persons.js] rendering...');
	return props.persons.map(({ id, name, age }, index) => (
		<Person
			key={id}
			name={name}
			age={age}
			click={() => props.clicked(index)}
			changed={event => props.changed(event, id)}
		/>
	));
};

export default persons;