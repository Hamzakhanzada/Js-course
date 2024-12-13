// immediately invoked function expression

(function chai () {
    // named iife
    console.log(`DB was Connected`)
}) ();

((name) =>  {
    // simple iife
    console.log(`DB 2 was Connected ${name}`);
}) ("hamza");