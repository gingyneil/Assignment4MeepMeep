module scenes {
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _desert:objects.Desert;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _roadCoy: createjs.Bitmap;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);

            // Add Image 
            this._roadCoy = new createjs.Bitmap(core.assets.getResult("roadCoy"));
            this._roadCoy.x = 210;
            this._roadCoy.y = 50;
            this.addChild(this._roadCoy);
            
            // Add Menu Label
            this._menuLabel = new objects.Label(
                "Meep Meep", "60px","Consolas", "#000000",
                320, 240, true
                );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 220, 420, true
            )
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);



            // add this scene to the global scene container
            core.stage.addChild(this);
            
            // add the instructionButton
            this._instructionsButton = new objects.Button("instructionsButton", 420, 420,true )
            
            // Instruction button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick,this)
            this.addChild(this._instructionsButton);
        }

        public Update():void {
            // scene updates happen here...
            this._desert.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
         private _instructionsButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.INSTRUCTIONS;
            core.changeScene();
        }
    }
}