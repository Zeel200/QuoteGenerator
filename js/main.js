document.getElementById('shareButton').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Your Page Title',
                text: 'Check out this awesome content!',
                //url: 'https://yourwebsite.com',
            });
            console.log('Content shared successfully');
        } catch (error) {
            console.log('Error sharing content: ', error);
        }
    } else {
        alert('Web Share API is not supported in your browser.');
    }
});
