// generate combinations

function dfs(arr, i, slate) {
    if(arr.length === i) {
        console.log(slate);
        return;
    }
    // chose the number;
    slate.push(arr[i]);
    dfs(arr, i+1, slate);
    slate.pop();

    // don't choose number
    dfs(arr, i+1, slate);
}

dfs(['a', 'b', 'c'], 0, []);