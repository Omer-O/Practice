/*
2)
Write a function that expects a string representing a class name to be passed as a parameter.
The function should return an array containing all the elements in the document that have the class that was passed in.
*/
(function() {
    function returnArray(classStr) {
        var myArray = [];
        myArray = document.getElementsByClassName(classStr);
        console.log(myArray);
    }
    //test
    returnArray("row");
})();