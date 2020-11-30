// generate combinations using bfs
// manage do all the work

function bfs(arr, pos) {
 if(arr.length === pos) {
     return [[]];
 }
 let prev = bfs(arr, pos+1);

 let result = [];
 for(let i = 0 ; i< prev.length; i++) {
    result.push(prev[i]);
    result.push([...prev[i], arr[pos]]);
 }
 return result;
}


console.log(bfs(['a','b','c'], 0));