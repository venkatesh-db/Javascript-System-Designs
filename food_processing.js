
//   Requirement Analysis
//   1. Product   : chocolate
//    Every product has name :=> Diarymilk

/*   2. Variable's , Data 
      flavour      nuts and alomnds
	  weight       35mg
	  price        40
	  mfd          june 2021
*/

//  3. Data type's|class   "nuts and alomnds"   40
 
//  4. Process  Function , class 
//  Code reusablity  {  same code will work similar product's }
//  OOPS   Object oreinted programming
//  Many product's one code with many object's { many customer } 

//  5. Validation    flavour  "nuts and alomnds"  "9900367097"
//  6. Logic         phone no 9900367097  is avaiable already in the file 
//  7. Library       { function ,class }
       // Process : create object , call methods { all line's of code excuted for data u passed }
//  8. Datastructure   variants of chocolate 
       // 1. Dont implement class 
       // 2. Process :   product Data , call method's 

//  9. algorthim's     search data of chocolate 

//  9.1 Exception   { getting data from server if failed error msg }
//  9.2 Function  :  named function , { unnamed function , arrow function : used in server  } ,
// 10.  {  Callback , Promises, fetch, proxy , async/await  }
//         Datastruture { product  data we can get  server|computer }
// 11.  Advanced logic     map foreach 
// 12.  Import export  { ui }
        1. Library { datastructure }
		2. Library { product data fetch   }
		3. Library { ui HTML : framework angular  , react js }

// 13.  OOPS   Abstrcation , encapsulation ,Inheritence ,Ploymorphism
// 14.  Library built using process of the oops  { customer data , product data }
// 15.  Object inside { many object's }  ,  object inside { many refernce to object's }
// 16 . FrontEnd devloeper: Take Customer data , show product data using  UI  { HTML,CSS,bootstarp,Angular }
// 17 . OOPS New Style 
// 18.  Ajax Product Data  { GET , POST , PUT ,UPDATE ,DELETE }
// 19.  Jquery
// 20.  HTML ELEMENT's  { UI Datastructure  }

var flavour =  "nuts and alomnds"
var weight  =  "35mg"
var price   =    40
var mfd     =  "june 2021"


// PROCESS : Works for one product

function chocolate(  ){

var flavour =  "nuts and alomnds"
var weight  =  "35mg"
var price   =    40
var mfd     =  "june 2021"
var available = false

if ( flavour == "nuts and alomnds") {
      available = true
} 

}

//   Function call  { product data stored in RAM memory }
//                  { customer buy's your product by giving money }

chocolate(  )


// Code reusablity
// Works for N No of  product

function  ch( company , flavour , price     ){
    
	 available = false

   // Based on the customer data the below code for a product dairy milk

	 if ( company == "dairy milk" )
	 {
         if ( flavour == "dry fruits"  )
         {
			     available = true
         }
	 }

   // Based on the customer data the below code for a product 5 star

	 if ( company == "5 star" )
	 {
		 if ( flavour == "nuts penats"  )
         {
			     available = true
         }
    
	 }
	  
}

//   Function call  { product data stored in RAM memory }
//                  { customer buy's your product by giving money }

ch( "dairy milk", "dry fruits"  ,  20 ) // customer 1

ch( "5 star",     "nuts penats" ,  20 ) // customer 2



// PROCESS : class
// Code work for one product 

class dairymilk
{

 flavour =  "nuts and alomnds"
 weight  =  "35mg"
 price   =    40
 mfd     =  "june 2021"

}

// { product data stored in RAM HEAP memory }
// { customer buy's your product by giving money and identity { object } }

var venkatesh = new dairymilk()
var  suresh  =  new dairymilk()


venkatesh           ----------->  { One MEmory product variable and data is same }
suresh              ----------->

// Code work for N no of product 

class chocolates
{

// Method
constructor(  company , flavour , price  ){

}
	
}

// { product data stored in RAM HEAP memory }
// customer buy's your product's by calling method constructor and giving data

var Ramesh = new chocolates( "dairy milk", "dry fruits",  20  )
                         ||
						constructor  


class chocolates
{

// Method
constructor(  company , flavour , price  ){

	  // product  variable's | class variable's  object allocate's memory
      this.company 
      this.flavour
	  this.price

}
	
}


// { product data stored in RAM HEAP memory }
// customer buy's your product's by calling method constructor and giving data

var Ramesh = new chocolates( "dairy milk", "dry fruits",  20  )
                         ||
						constructor  

// Each customer will be allocated dedicated memory for product variables and data


class chocolates
{

// Method
constructor(  company , flavour , price  ){

	  // product  variable's | class variable's  object allocate's memory
      this.company  = company
      this.flavour  = flavour
	  this.price    =  price

}
	
}


// { product data stored in RAM HEAP memory }
// customer buy's your product's by calling method constructor and giving data

var Ramesh = new chocolates( "dairy milk", "dry fruits",  20  )
                         ||
						constructor  

// Each customer will be allocated dedicated memory for product variables and data


var Suresh = new chocolates( "5 star", "plain cholcoate",  10  )
                         ||
						constructor  


" SRP : single responsblity principle "


class chocolates
{

// Method

constructor(  company , flavour , price  ){
    this.company  = company
      this.flavour  = flavour
	  this.price    =  price
}

checkproduct( ){

  var available = false
	  
   // Based on the customer data the below code for a product dairy milk
	 if (  this.company == "dairy milk" )
	 {
         if (     this.flavour == "dry fruits"  )
         {
			     available = true
                 
                 document.writeln("dairy milk avaialble")
         }
	 }

   // Based on the customer data the below code for a product 5 star
	 if ( this.company == "5 star" )
	 {
		 if ( this.flavour == "nuts penats"  )
         {
			     available = true
                 
                   document.writeln("5 star avaialble")
         }
 	 }
}

orderdetails ( ){
document.writeln(this.company)
}
}

var Ramesh = new chocolates( "dairy milk", "dry fruits",  20  )
Ramesh.checkproduct()
Ramesh.orderdetails()

var Suresh = new chocolates( "5 star", "plain cholcoate",  10  )
Suresh.checkproduct()
Suresh.orderdetails()


//  Set ,Get and  Logic 


// Method of class : Same line of code for all product's , methods : we differentiate code
// for different products  if else if 


<script>
class chocolates
{
// Method
constructor(  company , flavour , price  ){
    this.company  = company
      this.flavour  = flavour
	  this.price    =  price
      this.quantity =  ""
       this.offer    = undefined
}

setchangeproduct( company , flavour , price  ){

      this.company  = company
      this.flavour  = flavour
	  this.price    =  price
}

getcompanydetails( ){

return this.company

}

logic( ){

if ( this.company == "dairy milk"  && this.flavour == "dry fruits" && this.price == 20  )
{
   this.quantity = "15 mg + 5 mg "  
   
    document.writeln("20 mg ")
}

else if ( this.company == "5 star"  && this.flavour == "plain cholcoate" && this.price == 10  )
{
   this.quantity = "10 mg + 2 mg "  
   
   document.writeln("12 mg ")
}

else {
  document.writeln("product not matching")
}

}

checkproduct( ){
  var available = false
   // Based on the customer data the below code for a product dairy milk
	 if (  this.company == "dairy milk" )
	 {
         if (     this.flavour == "dry fruits"  )
         {
			     available = true
                 
                 document.writeln("dairy milk avaialble")
         }
	 }

   // Based on the customer data the below code for a product 5 star
	 else if ( this.company == "5 star" )
	 {
		 if ( this.flavour == "plain cholcoate"  )
         {
			     available = true
                 
                   document.writeln("5 star avaialble")
         }
 	 }

	 // no code for other product's
}

orderdetails ( ){
document.writeln("order details " +this.company)
}

}

// customer excuting code will differ's

var Ramesh = new chocolates( "dairy milk", "dry fruits",  20  )
Ramesh.checkproduct() // customer excuting code will differ's based on product choose data
Ramesh.logic()        // customer excuting code will differ's based on product choose data
Ramesh.orderdetails()

var Suresh = new chocolates( "5 star", "plain cholcoate",  10  )
Suresh.setchangeproduct( "munch", "cholcoate",  30 )
company = Suresh.getcompanydetails()
document.writeln(company)
Suresh.logic()
Suresh.checkproduct()
Suresh.orderdetails()

</script>

// Library  VS OOPS 

// Library function Allocate Memory | Function call
// return value  { string , number , boolean }
// Validation if to check return value's

function Random( ){
return  0
}

ret = Random( )
document.writeln(ret)

Return = Math.random()    // Function return value
document.writeln(Return)


// Library function Allocate Memory | Function call
// return value  { object address location }
// Validation if to check return value's

let date = new Date()  // Date class where it is present in file .js

           // new function return address location of memory  

if (date == undefined ) {
}

ret = date.getFullYear()  // Method return value

ret = date.getMonth()

document.writeln(ret)

if ( ret  >11 ) {

}

document.writeln(ret)

document.writeln(  date.getMonth() )

document.writeln(  date.getDate() )

d.setFullYear(2020);


var company = new String( "jvt" )

ret = company.charAt(0)

document.writeln(ret )

var salary = new Number( 89808989)

document.writeln(Number.isNaN(salary) )

document.writeln(company )

var oops = new Boolean( 89808989)

document.writeln(oops )



// Data Structure


var lang = ["C", "Cpp", "Java"];

           //  new Array ( "C", "Cpp", "Java" ) // Array class where it is present in file .js


// 1Customer Data of a product chocolates

var chocolates = new Array( "dairy milk", "dry fruits",  20  )

chocolates.push(  "5 star", "plain cholcoate",  10 ) 
//  2Customer Data of a product chocolates

document.writeln(chocolates )

chocolates[0] = "munch"

document.writeln(chocolates )

chocolates.sort()

document.writeln(chocolates )