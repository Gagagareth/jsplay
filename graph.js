const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'OKC'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route)); // route => addEdge(...route);

//console.log(adjacencyList);

// Breadth First Search
function bfs(start, finish) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);
        for (const destination of destinations) {
            if (destination === finish) {
                console.log('found it! ' + destination);
                return 'found it! ' + destination;
            }
            if (destination !== start && !visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
            }
        }
    }

    return `${start} does not connect to ${finish} :(`;
}

console.log(bfs('PHX', 'BKK'));

// Depth First Search
function dfs(start, visited, finish) {
    //'PHX', 'LAX', 'MEX', 'BKK'
    console.log(start);
    visited.add(start);

    const destinations = adjacencyList.get(start);


    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i] === finish) {
            console.log(`Got to my destination, ${finish}!`);
            return;
        }
        if (!visited.has(destinations[i]) && destinations[i] !== start) {
            visited.add(destinations[i]);
            dfs(destinations[i], visited, finish);
        }
    }

    return `${start} does not connect to ${finish} :(`;
}

dfs('JFK', new Set(), 'BKK');

/*
Map(11) {
  'PHX' => [ 'LAX', 'JFK' ],
  'BKK' => [ 'MEX', 'LIM' ],
  'OKC' => [ 'JFK' ],
  'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
  'LAX' => [ 'PHX', 'MEX' ],
  'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
  'EZE' => [ 'MEX' ],
  'HEL' => [ 'JFK' ],
  'LOS' => [ 'JFK' ],
  'LAP' => [],
  'LIM' => [ 'MEX', 'BKK' ]
}
*/