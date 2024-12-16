const coding = ["html","css","js"];

coding.forEach( (item) => {
    console.log(item);
});


coding.forEach( (item,index,array) => {
    console.log(item,index,array);

});


const myCoding = [
    {
        language : "javascript",
        languageFile: "js"
    },
    {
        language : "java",
        languageFile: "java"

    },
    {
        language : "phython",
        languageFile: "py"

    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
});
