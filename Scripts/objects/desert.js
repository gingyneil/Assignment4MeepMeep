var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Desert object used in the game
     *
     * @export
     * @class Desert
     * @extends createjs.Bitmap
     */
    var Desert = (function (_super) {
        __extends(Desert, _super);
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Desert
         *
         * @constructor
         * @param imageString
        */
        function Desert(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method_reset
         * @returns void
         */
        Desert.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * Checks if the object has reached its boundaries
         *
         * @private
         * @method checkBounds
         * @returns void
         */
        Desert.prototype._checkBounds = function () {
            if (this.x <= -2240) {
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
        Desert.prototype.start = function () {
            this._reset();
            this._dx = 5; //5 5 px per frame left
        };
        /**
         * This method updates the object properties every
         * time its called
         *
         * @public
         * @method update
         * @returns void
         */
        Desert.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Desert;
    }(createjs.Bitmap));
    objects.Desert = Desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map