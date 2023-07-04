
class hurting {

  constructor() {

    if (this.constructor === hurting) {
      throw new Error('Class "hurting" cannot be instantiated')
    }
    this.color = 'shortguy'

  }

  teasing() {
    throw new Error('Method "teasing()" must be implemented.')
  }

   disrespect()
	{
	   throw new Error('Method "disrespect()" must be implemented.')
	}

    gossips()
	{
	  throw new Error('Method "gossips()" must be implemented.')
	}

}

//const fruit = new Fruit() <-- ERROR

/**
 * Concrete  Class Fruit.
 */

class college  extends hurting {
  constructor( ) {
    super()

  }
  teasing(t) {
	this.teasing =t
    console.log('Hello hurting():', this.teasing ,this.color)
  }

   disrespect(r)
	{
	   this.res= r
	}

}

const kishore = new college()
kishore.teasing("bad eyes")

const venkatesh = new college()
kishore.disrespect("poor guy")


class job extends hurting 
{

constructor( ) {
    super()

  }
  teasing(t) {
	this.teasing =t
    console.log('Hello hurting():', this.teasing ,this.color)
  }

   disrespect(r)
	{
	   this.res= r
	}


}

const shravanth = new job()
shravanth.disrespect("less salary")
