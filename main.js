let h1 = document.querySelector('h1');
h1.textContent= "Lab7 Assignment";
h1.style.color = 'blue';
document.body.appendChild(h1);

let x = document.createElement("HR");
document.body.appendChild(x);

let h2a = document.createElement('h2');
h2a.textContent = 'Task';
h2a.style.color = 'red';
document.body.appendChild(h2a);

let p1 = document.createElement('p');
document.body.appendChild(p1);
p1.innerHTML= 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';

let ul1 = document.createElement('ul');

let li1 = document.createElement('li');
li1.classList.add('even');
li1.style.color = 'green';
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);';

let li2 = document.createElement('li');
li2.classList.add('odd');
li2.style.color = 'purple';
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';

let li3 = document.createElement('li');
li3.classList.add('even');
li3.style.color = 'green';
li3.innerHTML = 'change content of the elements (<b>5 points</b>);';

let li4 = document.createElement('li');
li4.classList.add('odd');
li4.style.color = 'purple';
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';

let li5 = document.createElement('li');
li5.classList.add('even');
li5.style.color = 'green';
li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);';

let li6 = document.createElement('li');
li6.classList.add('odd');
li6.style.color = 'purple';
li6.innerHTML = 'change classes of the elements (<b>5 points</b>).';

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);
document.body.appendChild(ul1);

let y = document.createElement("HR");
document.body.appendChild(y);

let h2b = document.createElement('h2');
h2b.textContent = 'Submission';
h2b.style.color = 'red';
document.body.appendChild(h2b);

let p2 = document.createElement('p');
document.body.appendChild(p2);
p2.innerHTML= 'To submit your work, follow these instructions:';

let ul2 = document.createElement('ul');

let li11 = document.createElement('li');
li11.classList.add('even');
li11.style.color = 'green';
li11.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>). ';

let li22 = document.createElement('li');
li22.classList.add('odd');
li22.style.color = 'purple';
li22.innerHTML = 'Clone this repository to your local machine and work inside it.';

let li33 = document.createElement('li');
li33.classList.add('even');
li33.style.color = 'green';
li33.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';

let li44 = document.createElement('li');
li44.classList.add('odd');
li44.style.color = 'purple';
li44.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';

let li55 = document.createElement('li');
li55.classList.add('even');
li55.style.color = 'green';
li55.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';

let li66 = document.createElement('li');
li66.classList.add('odd');
li66.style.color = 'purple';
li66.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';

let li77 = document.createElement('li');
li77.classList.add('even');
li77.style.color = 'green';
li77.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).'

ul2.appendChild(li11);
ul2.appendChild(li22);
ul2.appendChild(li33);
ul2.appendChild(li44);
ul2.appendChild(li55);
ul2.appendChild(li66);
ul2.appendChild(li77);
document.body.appendChild(ul2);

let z = document.createElement("HR");
document.body.appendChild(z);


