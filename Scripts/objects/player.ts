module objects{
    export class Player extends objects.GameObject{
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++

        constructor(imageString:string ){
            super(imageString);

            this.start();
        }

                /**
         * Checks if the object has reached its boundaries
         * 
         * @private
         * @method checkBounds
         * @returns void
         */
        private _checkBounds():void{
            //check top bounds    
            if(this.y >= (480 - (this.height * 0.5))){
                this.y = (480 - (this.height * 0.5));
            }

            //check bottom bounds
            if (this.y <= (0 + (this.height * 0.5))){
                this.y = (0 + (this.height * 0.5));
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
            this.x = 0 + this.width * 0.8;
        }

        public update():void{
            this._position = new Vector2(this.x, this.y);
            this.y = core.stage.mouseY;
            this._checkBounds();
        }
    }
}