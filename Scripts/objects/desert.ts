module objects {
    /**
     * This is the Desert object used in the game
     * 
     * @export
     * @class Desert
     * @extends createjs.Bitmap
     */
    export class Desert extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++
        private _dx:number;

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++
        /** 
         * Creates an instance of Desert
         * 
         * @constructor
         * @param imageString
        */
        constructor(imageString: string){
            super(core.assets.getResult(imageString))

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
        private _reset():void{
            this.x = 0;    
        }

        /**
         * Checks if the object has reached its boundaries
         * 
         * @private
         * @method checkBounds
         * @returns void
         */
        private _checkBounds():void{
            if(this.x <= -2240){
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
            this._dx = 5; //5 5 px per frame left
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
            this.x -= this._dx;
            this._checkBounds();
        }
    }
}