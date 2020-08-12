// x = '2';

let y: number;

y = 3;

let z = 3;

type Style = 'bold' | 'italic' | 23;
// Done in class style; here the type can be either bold or italic or 23, so that shows we are not restricted to one type when assigning

let font: Style;

font = 'something else'; // Gives error
font = 'bold'; // Doesn't give error
