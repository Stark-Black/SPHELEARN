
const video = document.getElementById('video');
const progressBar = document.getElementById('progress-bar');


function updateProgressBar() {
    const progressPercentage = (video.currentTime / video.duration) * 100; 
    progressBar.style.width = progressPercentage + '%'; 

   
    if (progressPercentage >= 50) {
        progressBar.style.backgroundColor = 'green';
    } else {
        progressBar.style.backgroundColor = 'rgba(124, 192, 197, 1)';
    }
}


video.addEventListener('timeupdate', updateProgressBar);
