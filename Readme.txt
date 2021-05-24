This is React based excercise that includes -

1. Basic React specific knowledge such as Components, props 
and routing.
2. API calls and using React Hooks.
3. Basic understading of CS fundamentals.


We will be making API calls to https://swapi.dev/. 
You can checkout the docuementation at https://swapi.dev/documentation
You will be using this API to get information about the characters
from the StarWars franchise and display the relevant information 
as required.

Tasks -

A. 1. At the homepage, create a 9x9 Grid of cards-like Components,
   which will have Characters name and Height. When clicked on
   any of these cards, we will be redirected to their specific URL
   where we can see more detailed information about that character.

   2. Explain how you would implement pagination.

   

B. 1. Create a different route for this task and name it /task2.
      Assume after making an API request, you get an Array of Objects
      each having key called uid and another key called name. 
      This uid is unique for each object and is always greater than 0. 
      However, if there was some error with that particular object, 
      the uid would be negative. We need to render the objects in the 
      array such that only valid objects are rendered first as 
      components and invalid objects are rendered last together.
      Keep in mind that the array might be larger and so find the 
      optimum method to perform this operation.
      The array is at the bottom of this page.



  


Take care of - 

1. Error handling, good React practices and clean code.
2. Optimizing in the Task B.



Array = [
  {uid: 11, name: "mark"},
  {uid: 21, name: "adam"},
  {uid: -1, name: "seth"},
  {uid: -22, name: "roger"},
  {uid: 25, name: "vet"},
  {uid: 32, name: "sam"},
  {uid: -23, name: "pickle"},
  {uid: -10, name: "garry"},
  {uid: 20, name: "ninja"},
  {uid: 45, name: "rock"},
  {uid: -54, name: "hank"},
  {uid: 88, name: "tyler"},
  {uid: -29, name: "pit"},
]