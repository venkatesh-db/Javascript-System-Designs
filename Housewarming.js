

// DEsign 1

var place = "indiranagar"
var floor = 3
var housebulit= 2400
var hname ="babu"
console.log( "my house details:",place,floor,housebulit)

// Design 2

class invitation
{
     constructor( )
     {
      this.date="2-6-2022"
      this.location="indrianagar"
      this.time="6 am "
      }
}

var pallavi= new invitation()
var priyanka=new invitation()
var geethika=new invitation()

class families
{
        constructor( )
	    {
        this.father= "rama"
        this.mother="seetha"
        this.brother="abhniva"
        this.sister="preethi"
		}
}

// Design 3 

class family
{
    constructor( f , m, s, b )
	{
         this.father = f
         this.mother=m
         this.brother =b
         this.sister=s
    }
}
var gowda= new family("rama","seetha","parvathi","hanuman")
var chowdary=new family("james bond","preethi","naughty","fighter")
var chowdarys=new family("super man","wonderwomen","iran man","shark")


// Design 4

class publicc
{
    constructor( stop , f )
	{
        this.busstop =stop
        this.families =f 
        if ( this.busstop == "indirangar" )
		{
           this.ticket = 30
		}
        if ( this.busstop == "jeevanbheema nagar" )
		{
          this.ticket = 40
		}
	}
}

var bmtc= new publicc ("indirangar",gowda)

class privatec
{
      constructor( d , f )  
	 {
      this.distance =d
      this.families =f 

     if (this.distance == 12 )
	{
       this.petrol = 500
	}
     if ( this.distance == 13 )
	{
           this.petrol = 600
	}
}

}

var bmw= new privatec( 12,chowdarys )

var guests= [gowda ,chowdary ,chowdarys]

function  blessings(f, b )
{
      console.log("family name",f,b)
}

function gifts( f, g ) {
      const notegift = new Map()
      notegift.set(f, g);
     console.log(notegift )
}

function  photos( selfie )
{
     console.log(" group photo",selfie[0].brother )
}

function house( relatives ){
     
     for (i in relatives ){
          //var bless=prompt("enter ur blessing")
          var bless ="rich"
          blessings(i,bless)
          //var g=prompt("enter ur gift")
          var g="smile"
          gifts( i, g)
	 }
}

house([gowda ,chowdary ,chowdarys])
photos([gowda ,chowdary ,chowdarys])


function food (  p )
{

  if (p == "veg"){
   function  veg() {
        var menu=["sweet1","sweet2","idly","vada","pangal","panner"]    
        console.log(menu)
   
  }
  return veg
  }
  else 
	{
    function  nonveg() {
         var menu=["fish","chicken","mutton","kabab","sea food","egg"]    
          console.log(menu)
   
    }
    return nonveg
	}
}

var gf=food("veg")
gf()
var gf1=food("veg1")
gf1()
console.log(gf,gf1)
