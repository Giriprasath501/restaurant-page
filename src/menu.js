export function loadmenu(){
    const content = document.getElementById('content');
    const recipediv = document.createElement('div');
    recipediv.className = 'box';
    recipediv.innerHTML = `<h1>briyani</h1>
    <p>
        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. 
        Perfect for everyday cooking or special occasions. 
        Each recipe is explained step by step, making it easy even for beginners. 
        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.
    </p>`;

    content.appendChild(recipediv);
    
    const sweetdiv = document.createElement('div');
    sweetdiv.className= 'box';
    sweetdiv.innerHTML = `<h1>idle</h1>
    <p>
        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. 
        Perfect for everyday cooking or special occasions. 
        Each recipe is explained step by step, making it easy even for beginners. 
        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.
    </p>`;

    content.appendChild(sweetdiv);
    
    const snackdiv = document.createElement('div');
    snackdiv.className= 'box';
    snackdiv.innerHTML = `<h1>dosa</h1>
    <p>
        Discover a variety of delicious recipes ranging from quick meals to traditional dishes. 
        Perfect for everyday cooking or special occasions. 
        Each recipe is explained step by step, making it easy even for beginners. 
        You can also find healthy alternatives and time-saving hacks to make cooking fun and simple.
    </p>`;

    content.appendChild(snackdiv);

    
}
