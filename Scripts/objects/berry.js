var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Berry object used in the game
     *
     * @export
     * @class Berry
     * @extends createjs.Bitmap
     */
    var Berry = (function (_super) {
        __extends(Berry, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Berry
         *
         * @constructor
         * @param imageString
        */
        function Berry(imageString) {
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
        Berry.prototype._reset = function () {
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
        Berry.prototype._checkBounds = function () {
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
        Berry.prototype.start = function () {
            this._reset();
            this._dx = 5; //5 px per frame left
        };
        /**
         * This method updates the object properties every
         * time its called
         *
         * @public
         * @method update
         * @returns void
         */
        Berry.prototype.update = function () {
            this._position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this._checkBounds();
        };
        return Berry;
    }(objects.GameObject));
    objects.Berry = Berry;
})(objects || (objects = {}));
//# sourceMappingURL=berry.js.map