module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _desert:objects.Desert;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

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
            // Add Ocean Background
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);

            


            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "60px","Consolas", "#000000",
                320, 180, true
                );
            this.addChild(this._gameOverLabel);

            // add the start button
            this._restartButton = new objects.Button(
                "restartButton", 320, 420, true
            )
            this.addChild(this._restartButton);

            this._finalScoreLabel = new objects.Label("SCORE: " + core.score, "60px", "Consolas", "#000000", 320, 240, true);
            this.addChild(this._finalScoreLabel);
            
            if (core.score > core.highScore){
                core.highScore = core.score;
            }
            this._highScoreLabel = new objects.Label("HIGH SCORE: " + core.highScore, "60px", "Consolas", "#000000", 320, 50,true);
            this.addChild(this._highScoreLabel);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._desert.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.lives = 10;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}