module objects {
    /**
     * This is the Enemy object used in the game
     * 
     * @export
     * @class Enemy
     * @extends createjs.Bitmap
     */
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++
        private _dx:number;
        private _dy:number;

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++
        /** 
         * Creates an instance of Berry
         * 
         * @constructor
         * @param imageString
        */
        constructor(imageString: string){
            super(imageString);

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
        private _reset():void{
            this._dx = Math.floor((Math.random() * 5) + 10); 
            this._dy = Math.floor((Math.random() * 4) - 2);
            this.x = this.width + 660; //

            //get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.height * 0.5))) + (this.height * 0.5));
        }

        /**
         * Checks if the object has reached its boundaries
         * 
         * @private
         * @method checkBounds
         * @returns void
         */
        private _checkBounds():void{
            if(this.x <= -(480 + (this.width * 0.5))){
                this._reset();
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public
         * @method start
         * @returns void
         */
        public start():void{
            this._reset();
        }


        /**
         * This method updates the object properties every 
         * time its called
         * 
         * @public
         * @method update
         * @returns void
         */
        public update():void{
            this._position = new Vector2(this.x, this.y);
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        }
    }
}