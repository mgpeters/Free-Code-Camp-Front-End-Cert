/* Check if a string (first argument, str) ends with the given target string 
(second argument, target).

This challenge can be solved with the .endsWith() method, which was 
introduced in ES2015. But for the purpose of this challenge, we would 
like you to use one of the JavaScript substring methods instead. */
"use strict";
function confirmEnding(str, target) {

    var strLength = str.length;

    var targetLength = target.length;

    var strEndLetter = str.substr((strLength - targetLength), strLength);

    var targetEndLetter = target.substr((targetLength - strLength), targetLength);

    return targetEndLetter === strEndLetter;
}
confirmEnding("He has to give me a new name", "name");