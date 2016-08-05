var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Enemy object used in the game
     *
     * @export
     * @class Enemy
     * @extends createjs.Bitmap
     */
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Berry
         *
         * @constructor
         * @param imageString
        */
        function Enemy(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method_reset
         * @returns void
         */
        Enemy.prototype._reset = function () {
            this._dx = Math.floor((Math.random() * 5) + 10);
            this._dy = Math.floor((Math.random() * 4) - 2);
            this.x = this.width + 660; //
            //get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.height * 0.5))) + (this.height * 0.5));
        };
        /**
         * Checks if the object has reached its boundaries
         *
         * @private
         * @method checkBounds
         * @returns void
         */
        Enemy.prototype._checkBounds = function () {
            if (this.x <= -(480 + (this.width * 0.5))) {
                this._reset();
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
        Enemy.prototype.start = function () {
            this._reset();
        };
        /**
         * This method updates the object properties every
         * time its called
         *
         * @public
         * @method update
         * @returns void
         */
        Enemy.prototype.update = function () {
            this._position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map