module managers{
    export class Collision {
        constructor(){

            this.start();
        }

        public start():void{

        }

        public update():void{

        }

        public check(player:objects.GameObject, other:objects.GameObject){
            //Check to see if object is colliding
            
            if (objects.Vector2.distance(player.position, other.position) < player.halfHeight + other.halfHeight) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    //If player collides with enemy
                    if (other.name === "enemy") {
                        createjs.Sound.play("hurt");
                        core.lives -= 1;
                    }
                
                    //If player collides with berry
                    if(other.name === "berry"){
                        createjs.Sound.play("meep");
                        core.score += 100;
                    }
                }
            }

            else {
                other.isColliding = false;
            }
        }


    }
}