class barco {
constructor(x,y,width,height,barco_position){

this.width=width
this.height=height
this.barco_position=barco_position
this.body=Bodies.rectangle(x,y,width,height)
this.image=loadImage("bar.png")
World.add(world,this.body)

}

show(){
var angle =this.body.angle

var pos= this.body.position

push();
imageMode(CENTER)
translate(pos.x,pos.y)
rotate (angle)
image (this.image,0,this.barco_position,this.width,this.height)
pop();
}


















}