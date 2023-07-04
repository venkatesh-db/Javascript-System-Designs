
class nickname {

  constructor() {

    if (this.constructor === nickname) {
      throw new Error('Class "nickname" cannot be instantiated')
    }
    this.actualname = ''

  }

  nicknames() {
    throw new Error('Method "teasing()" must be implemented.')
  }

}

//const fruit = new Fruit() <-- ERROR

/**
 * Concrete  Class Fruit.
 */

class parents  extends nickname {
  constructor( ) {
    super()

  }
  nicknames(t) {
	this.nname =t
    console.log('Hello nicknames():', this.nname )
  }

}

const kishore = new parents()
kishore.nicknames("kit")

const venkatesh = new parents()
venkatesh.nicknames("venki")


class job extends nickname 
{

constructor( ) {
    super()

  }
  nicknames(t) {
	this.nn =t
    console.log('Hello nicknames():', this.nn ,this.actualname)
  }

}

const shravanth = new job()
shravanth.nicknames("superman")
