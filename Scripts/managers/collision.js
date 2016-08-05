var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (player, other) {
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
                    if (other.name === "berry") {
                        createjs.Sound.play("meep");
                        core.score += 100;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map