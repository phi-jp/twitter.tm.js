/*
 * phi
 */


// 定数
var SCREEN_WIDTH    = 480;
var SCREEN_HEIGHT   = 720;

tm.main(function() {
    var app = tm.app.CanvasApp("#world");
    app.fitWindow();
    // app.enableStats();
    
    var tweetButton = tm.twitter.TweetButton("http://tmlife.net");
    tweetButton.x = 240;
    tweetButton.y = 100;
    app.currentScene.addChild(tweetButton);
    
    app.run();
});





