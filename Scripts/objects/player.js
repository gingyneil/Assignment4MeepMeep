var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++
        function Player(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        /**
 * Checks if the object has reached its boundaries
 *
 * @private
 * @method checkBounds
 * @returns void
 */
        Player.prototype._checkBounds = function () {
            //check top bounds    
            if (this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 - (this.height * 0.5));
            }
            //check bottom bounds
            if (this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns void
         */
        Player.prototype.start = function () {
            this.x = 0 + this.width * 0.8;
        };
        Player.prototype.update = function () {
            this._position = new objects.Vector2(this.x, this.y);
            this.y = core.stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map