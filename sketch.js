const Engine=Matter.Engine
const World = Matter.World;
const Bodies= Matter.Bodies;
var engine;
var world;
var chao
var pchao
var fundo
var torre
var imgtorre
var ptorre
var canhao1
var bola1
var novoangulo
var velocidadev
var matrizb=[]
var barc
var matrizba=[]
var imgbarco
function preload (){
fundo=loadImage("background.gif")
imgtorre=loadImage("tower.png")
imgbarco=loadImage("bar.png")
}






function setup(){
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
angleMode(DEGREES)
pchao={
  isStatic:true
  }
  chao=Bodies.rectangle(0,height-1,width*2,10,pchao)
  World.add(world,chao)




  ptorre={

    isStatic:true
  }
  torre=Bodies.rectangle(160,350,160,310,ptorre)
  World.add(world,torre)

canhao1=new Canhao(180,110,130,100,15)
barc=new barco(width-79,height -10,170,170,-80)



}
function draw()
{
background(fundo);
Engine.update((engine))

rectMode(CENTER)
rect(chao.position.x,chao.position.y,width*2,10)
push()
imageMode(CENTER)
image(imgtorre, torre.position.x,torre.position.y,160,310)
pop()

for (var i = 0; i < matrizb.length; i++) {
  mostrabola(matrizb[i]);
}
 
 canhao1.show()
mostrarbarcos()




}



function keyReleased(){
if (keyCode==32){
matrizb[matrizb.length-1].shoot()

}

}

function keyPressed(){
if(keyCode==32){
  bola1=new bola(canhao1.x,canhao1.y)
Matter.Body.setAngle(bola1.body,canhao1.angle)
matrizb.push(bola1)

}


}
function mostrabola(bola1){

if(bola1){

  bola1.show()
}
}

function mostrarbarcos(){

if(matrizba.length>0){
  
  
  
if (matrizba[matrizba.length-1]==undefined||matrizba[matrizba.length-1].body.position.x<width-300){

var posicoes=[-40,-60,-70,-20]
var posicaoale=random(posicoes)
var barc=new barco(width,height -100,170,170,posicaoale)

matrizba.push(barc)  
for (var i = 0; i < matrizba.length; i++) {

 if(matrizba[i]==true){
  Matter.Body.setVelocity(matrizba[i].body,{
    x:-2,y:0
   })
matrizba[i].show()

 }
  





}
}


}
else{
  barc=new barco(width-79,height -10,170,170,-80)
matrizba.push(barc)

}


}















































































































