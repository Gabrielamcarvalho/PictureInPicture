const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media strem, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch (error){
        //catch error
        console.log('Error', error);
    }
}
button.addEventListener('click', async() => {
//Disable Button
button.disabled = true;
//start picture in picture
await videoElement.requestPictureInPicture();
//reset button
button.disabled = false;
});
//On Load
selectMediaStream();