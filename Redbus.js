//   Requirement Analysis
//   1. Product   : BusTicketbooking
//    Every product has name :=> KSrtc ,APSRstc , private travel

/*   2. Variable's , Data 
       
       Customer Data

	   Name              dennisritchie
	   Adhaar             123423451242   
	   phoneno            9900367097
	   age                18
	   emaild             jvt@gmail.com

       
	  Product Data

	  From               Bangalore
	  To                 Hyderabad
	  Date               18-june-2021
	  travelsname        ksmroadlines
	  departure          22:00 
	  duration           7h 5m
	  arrival            6:35 
	  rating             4.8 
	  totalseats          60
	  avilable seats      45
	  price              980
	  Seats               A1 A2 

	   
*/

//  3. Customer & Product Data  Data type's|class   number string boolean
 
//  4. Process  Function , class  { to register the customer details }
//  Code reusablity  {  same code will work similar product's }
//  OOPS   Object oreinted programming
//  Many product's one code with many object's { many customer } 

//  5. Validation    age , emailid , phoneno , Adhaar

//  6. Logic         based on row of  seat selection pricing change's

//  7. Library       { function ,class }
        //  busticket pdf Library function
       //   Process : create object , call methods { all line's of code excuted for data u passed }

//  8. Datastructure  { to show the hughe data about the avilablity of buses }
       Product data

      From               Bangalore
	  To                 Hyderabad
	  Date               18-june-2021

	  travelsname        ksmroadlines
	  departure          22:00 
	  duration           7h 5m
	  arrival            6:35 
	  rating             4.8 
	  totalseats          60
	  avilable seats      45
	  price              980
	  Seats               A1 A2 


       //  To show the bus avilablity and get how many customer done with bus booking
       // 1. Dont implement class 
       // 2. Process :   product Data , call method's 

//  9. Algorthim's     search data of specific Ac,sleeper ,semi sleeper  
    // city name location     

// 10. customer data , product data at the end in the  database file 

// 11. database file data is always sent in the datastructure object

// 12. customer data is sent in the datastructure object to store it in database file

// 13. when a customer buys specific product { customer data + product data }stored in database 


" Datastructure's "

Product  { Variable , Value  }
      
	  Array  : Value
	  Object : Variable , Value
	  Map    : Variable , Value

PRoduct Get | set  :     [ 0  ]
                        ["Variable"]


"Array "

var bus = [  "ksmroadlines", "22:00",
             "7h 5m" ,4.8   ,
             "6:35" ,"A1" ,"A2" ,980 ]
        
document.writeln( bus[0] )       
 
"Object"

var buses = {  "travelsname" :  "ksmroadlines",
               "departure"   :  " 22:00 " ,
                "duration"   :  "7h 5m"
            }

document.writeln( buses["travelsname"] )

"Map"

 var arr = new Map( )
 arr["travelsname"] = "ksmroadlines"
 document.writeln( arr["travelsname"])  

" Product data "

var allbuses = [ 

                { "bangaloretohyderbad" :[

                {  "travelsname" :  "ksmroadlines",
               "departure"   :  " 22:45 " ,
                "duration"   :  "7h 5m"
               } ,

                {  "travelsname" :  "Hail Trip",
               "departure"   :  " 22:00 " ,
                "duration"   :  "7h 5m"
               } ,

			     {  "travelsname" :  "Intercity travels",
               "departure"   :  " 22:15 " ,
                "duration"   :  "7h 5m"
               } ,

			     {  "travelsname" :  "AGR Travels",
               "departure"   :  "22:00 " ,
                "duration"   :  "7h 5m"
               } 
			   ]  
               }
               ]


var allbuses = [
                
                {  "travelsname" :  "ksmroadlines",
               "departure"   :  " 22:45 " ,
                "duration"   :  "7h 5m"
               } ,

                {  "travelsname" :  "Hail Trip",
               "departure"   :  " 22:00 " ,
                "duration"   :  "7h 5m"
               } ,

			     {  "travelsname" :  "Intercity travels",
               "departure"   :  " 22:15 " ,
                "duration"   :  "7h 5m"
               } ,

			     {  "travelsname" :  "AGR Travels",
               "departure"   :  "22:00 " ,
                "duration"   :  "7h 5m"
               } 
			                 
               ]

"Algorthims"


// Display all the product 

for ( i of  allbuses ){
      document.writeln( i["bangaloretohyderbad"])
}



// Searching the  specific product 

departure = "22:45"

     // Get first product data ,second , ..

for ( i of  allbuses ){ // Line 1

       // search for  product
    if (  i["travelsname"] ==departure ){   // Line 2

      document.writeln("bus aviable")
      document.writeln(i["travelsname"] , i["departure"], i ["duration"] )
    }
    
}// Line 


     // Get first product data ,second , ..

for ( i of  allbuses ){ // Line 1

       // search for  product
    if (  i["travelsname"] == "AGR Travels" ){   // Line 2

      document.writeln("bus aviable")
      document.writeln(i["travelsname"] , i["departure"], i ["duration"] )
    }
    
}// Line 1
