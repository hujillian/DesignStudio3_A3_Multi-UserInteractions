let startTime;

AFRAME.registerComponent('start-experience', {
    init : function(){
        console.log("scene loaded");
        // default state is display:none, and we change to display:block when scene is loaded
        // otherwise the code will run before the scene has loaded
        document.querySelector('#instructions').style.display = 'block';
        document.querySelector('#user-gesture-button').style.display = 'block';
    }
});