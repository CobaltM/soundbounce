

/* injected into app.soundbounce.org */
var actualCode = '(' + function() {


        window.spotifyBrowserApi = {
            getVersion: function () {
                return 'ChromeExtension0.1';
            },
            playTrack: function (trackId, position) {
                console.log('spotifyBrowserApi.playTrack ',trackId,position);
                chrome.runtime.sendMessage("mjndakefgffimaecklbkcadckoacmaaj", {action: "play", trackId:trackId, position:position});
                console.log('done spotifyBrowserApi.playTrack ',trackId,position);
            },
            pauseTrack: function () {
                chrome.runtime.sendMessage("mjndakefgffimaecklbkcadckoacmaaj", {action: "pause"});
            },
            starTrack: function (trackId){

            },
            openUrl: function (url){
                window.open(url);
            },
            openInSpotify: function(trackId){
                //gui.Shell.openExternal("spotify:track:"+trackId+"?action=browse");
            }
        };


    } + ')();';


var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

