dojo.require("SonicZoom");

var audio=uow.getAudio().then(function(a)
{
	audio=a;
});

//initialize function, called when page loads.
function init(){
	var gameheight = 480;
	var gamewidth = 640;
	
	audio.defaultCaching = true;
	
    game = new SonicZoom({canvas_id:"worldCanvas", height:gameheight, width:gamewidth, audio:audio, debug:true});
}

dojo.ready(init);
