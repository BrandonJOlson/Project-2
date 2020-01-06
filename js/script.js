/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// this variable will hold all the students
const studentItem = document.getElementsByClassName('student-item cf');

/****************************************************************************************************************************************************/

const showPage = (e) => {
   // this variable hold the value of 9
    let listA = (e * 10) - 1;
    // this variable holds the value of 0
    let listZ = (listA - 9); 
    // loop over the entire student list                                       
    for (let i = 0; i < studentItem.length; i ++ ) {      
       // is student list more than 1 or more than 10. . . . .if true default  
    if (i >= listZ && i <= listA) {                   
      studentItem[i].style.display = '';                    
    } else {
      studentItem[i].style.display = 'none';                
    } 
  }
}
// call showPage function
showPage(1);

/****************************************************************************************************************************************************/

const appendPageLinks = () => {
   // this variable holds the ul of the students list
   const studentListUl = document.querySelector('.student-list');
   // this variable stores the amount of pages
   const pageNumber = (studentItem.length /10); 
   // creating a new DIV
   const divPagination = document.createElement('div');   
   // adding the new DIV to lists UL     
   studentListUl.appendChild(divPagination);
   // setting the DIV class
   divPagination.className = 'pagination';           
      // looping over the pages
   for (let i = 0; i < pageNumber; i ++) {  
      // creating a LI                         
      const li = document.createElement('li');
      // adding the new LI to DIV
      divPagination.appendChild(li);
      // creating a ANCHOR tag
      const a = document.createElement('a'); 
      // setting the text content of ANCHOR to page numbers
      a.textContent = (i + 1); 
      // adding the ANCHOR tag to the LI
      li.appendChild(a);
      // ANCHOR tag listens for clicks and returns list
   a.addEventListener('click', () => {                    
      showPage(a.textContent);                                            
   });
 }
}
// call the appendPageLinks function 
appendPageLinks();                                             










