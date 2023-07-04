//   Requirement Analysis
//   1. Product   : Vaccaniation
//    Every product has name :=> Covishield

/*   2. Variable's , Data 
       
       Customer Data

	   Name              dennisritchie
	   Adhaar             123423451242   
	   phoneno            9900367097
	   age                18- 45  , >45
	   photoid            Adhaar
	   Yob                 1950
       
	  Product Data
	   
	  Date              15-june-2021
	  place             indiranagar
	  Timeslot          3-4 pm
	  hospital          apollo 
	  Vaccinename       Covishield
	  price              780
	
	   
*/

//  3. Data type's|class   number string boolean
 
//  4. Process  Function , class  { to register the customer details }
//  Code reusablity  {  same code will work similar product's }
//  OOPS   Object oreinted programming
//  Many product's one code with many object's { many customer } 

//  5. Validation    age , Adhaar

//  6. Logic         free or paid

//  7. Library       { function ,class }
        //  report of vaccination pdf Library function
       //   Process : create object , call methods { all line's of code excuted for data u passed }

//  8. Datastructure  { to show the hughe data about the avilablity of slot's }
       Product data

	  Date              15-june-2021
	  place             indiranagar
	  Timeslot          3-4 pm
	  hospital          apollo 
	  Vaccinename       Covishield
	  price              780
	  pincode            560075
	  state              karnataka
	  district           bbmp

       //  To show the vacciane avilablity and get how many customer done with vaccanation
       // 1. Dont implement class 
       // 2. Process :   product Data , call method's 

//  9. Algorthim's     search data of vaccination 
    // city name location  , 560075  


" Datastructure's "

Product  { Variable , Value  }
      
	  Array  : Value
	  Object : Variable , Value
	  Map    : Variable , Value

PRoduct Get | set  :     [ 0  ]
                        ["Variable"]


"Array "

var vacarry = [ "WARD 58 NEW THIPPASANDRA", "SHAKTHI GANAPATHI TEMPLE NEWTHIPPASANDRA, BBMP, Karnataka, 560075",
        "15 june 2021" , 65 ,
        "vaccinaion name" ,"covishield" ]
        
document.writeln( vacarry[0] )       
 
"Object"

var vaccinecenter = { "WARD 58 NEW THIPPASANDRA": "SHAKTHI GANAPATHI TEMPLE NEWTHIPPASANDRA, BBMP, Karnataka, 560075",
        "15 june 2021" : 65 ,
        "vaccinaion name": "covishield"
        }

document.writeln( vaccinecenter[ "vaccinaion name"] )

"Map"

 var arr = new Map( )
 arr["Date"] = "15-june-2021"
 document.writeln( arr["Date"])  

" Product data "


var vaccinecenter = [ { "WARD 58 NEW THIPPASANDRA": "SHAKTHI GANAPATHI TEMPLE NEWTHIPPASANDRA, BBMP, Karnataka, 560075",
        "17 june 2021" : { "dose1": { "age18+": 25 , "age45+": 65 }, "dose2": { "age18+": 15 , "age45+": 75 } } ,
	     "vaccinaion name": "covishield",
        "pincode": 560075
        },

	{ "indranagar": "school, Karnataka, 560074",
        "17 june 2021" : { "dose1": { "age18+": 25 , "age45+": 65 }, "dose2": { "age18+": 15 , "age45+": 75 } } ,
        "vaccinaion name": "covvaxin",
           "pincode": 560071
        },
        
        { "krmarket": "school, Karnataka, 560074",
        "17 june 2021" : { "dose1": { "age18+": 25 , "age45+": 65 }, "dose2": { "age18+": 15 , "age45+": 75 } } ,
        "vaccinaion name": "covvaxin",
           "pincode": 560018
        },
        
        { "majestic": "school, Karnataka, 560074",
        "17 june 2021" : { "dose1": { "age18+": 25 , "age45+": 65 }, "dose2": { "age18+": 15 , "age45+": 75 } } ,
        "vaccinaion name": "covishiled",
           "pincode": 560019
        }
 
        
]


"Algorthims"


var addharno =  123453121212
var pancard  =  "ASUPB5901F"

// Display all the product 

for ( i of  vaccinecenter ){
      document.writeln( i["pincode"])
}

// Searching the  specific product 

customerpincode = "560019"

     // Get first product data ,second , ..

for ( i of  vaccinecenter ){ // Line 1

       // search for  product
    if (  i["pincode"] ==customerpincode ){   // Line 2

      document.writeln("slot aviable")
      document.writeln(i["majestic"] , i["vaccinaion name"], i ["pincode"] )
    }
    
}// Line 1


     // Get first product data ,second , ..

for ( i of  vaccinecenter ){ // Line 1

       // search for  product
    if (  i["vaccinaion name"] == "covishiled" ){   // Line 2

      document.writeln("slot aviable")
      document.writeln(i["majestic"] , i["vaccinaion name"], i ["pincode"] )
    }
    
}// Line 1
