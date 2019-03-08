/*
Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.
*/

var list = []

module.exports = {
    
    
    listAddFunc: function (num) {
        list.push(num);
        return list;
    },

    sortAndPrint: function(){
        list.sort(function(a, b) {
            return a - b;
          });
        return list;
    }
    
}



