function reservation(){

    let customername=document.getElementById("name").value;
    let noofguests=document.getElementById("guests").value;
    let reservationtime=document.getElementById("time").value;
   
    if (!customername || !noofguests || !reservationtime) {
       alert("Please fill in all fields.");
       return;}
   
    let results=document.getElementById("result")
    
    results.innerHTML +=`
           <p><strong>Customer Name:</strong> ${customername}   <strong>Number of guests:</strong> ${noofguests}   <strong>ReservationTime:</strong> ${reservationtime}</p>
           
          `; 
   
      
   document.getElementById("name").value = "";
   document.getElementById("guests").value = "";
   document.getElementById("time").value = "";
   
   }
   
   
   function unreserving() {
      let results = document.getElementById("result");
       if (results.firstElementChild) {
           results.removeChild(results.firstElementChild); 
       } else {
           alert("No customer details to delete."); 
       }
   }
   
   