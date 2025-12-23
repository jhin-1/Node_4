strs = ["flower","flow","flight"]
console.log(strs.reduce((a, b) => {
    if(!a || !b) return "";
    let i = 0;
    while (a[i] && b[i] && a[i] === b[i]) i++;
    return a.slice(0, i);
}))