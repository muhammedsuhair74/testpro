class player
{
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	introduce()
	{
		console.log('hi i am '+ this.name);
	}
}
class newplayer extends player{
	constructor(name,age)
	{
		super(name,age)
	
	}
	introduce()
	{
		console.log("hi my name is "+ this.name+" and of age "+this.age);
	}
}
const a=new player("suahir",23);
const b=new newplayer();
.introduce();