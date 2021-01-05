class Food{
    constructor(){
        
        feedDog = createButton('feedDog');
        addFood = createButton('addFood');
        this.bottleImg = loadImage("milk.png");
    }


    display(){
        var x=80, y=100;
        addFood.position(600,20);
        addFood.mousePressed(add);
        feedDog.position(650,20);
        feedDog.mousePressed(feed);
        imageMode(CENTER);
        image(this.bottleImg, 700, 1000, 70, 70);

        if(this.foodStock != 0 ){
            for(var i=0; i < this.foodStock; i++){
                if(i % 10 == 0){
                    x=80;
                    y=y+50;
                }

                else if(i % 20 == 0){
                    x=80;
                    y=y+100;
                }

                else if(i % 30 == 0){
                    x=80;
                    y=y+150;
                }
                image(this.bottleImg,x,y,50,50);
                //please explain the co-relation between line 10,17-18 and 22
                x=x+30
            }
        }

    }
    
}