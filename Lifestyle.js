
class traditional 
{
  
  constructor()
  {
    
  }
  
  handsomelook()
  {
    console.log("looks good");
  }
  
}

class causal 
{
  
    constructor()
  {
    
  }
  
}

class  suits
{
  
}

 class dressing 
{
          trad()
	  {
	   throw new Error('Method "trad()" must be implemented.')
	  }
         
	 casual()
	   {
	   throw new Error('Method "cas()" must be implemented.')
	  }

         suits()
	   {
	   throw new Error('Method "suits()" must be implemented.')
	  }
}

class lifestyle extends  dressing
{
           trad()
          {
              return new traditional();
          }
      
         casual()
       {
            return new causal();
       }
       
      suits()
	   {
	       return new suits();
	       }
        
  
}


  var venkatesh = new lifestyle();
    
   var pongaldress=  venkatesh.trad();
  
  pongaldress. handsomelook();
  
