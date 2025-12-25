
const rmvConsDuplicates = (str, cons) => {
    if(str.length === 0) return ""
    
    cons = str[0] === cons || str[1] === str[0] ? "" : str[0]
    return cons + rmvConsDuplicates(str.slice(1), cons)
}

console.log(rmvConsDuplicates("aaabbccdd"));
