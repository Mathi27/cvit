document.getElementById('donateUPI').addEventListener('click', function() {
    document.getElementById('upiModal').style.display = 'block';
});

document.getElementById('donateLink').addEventListener('click', function() {
    // window.location.href = 'https://formbuilder.ccavenue.com/live/city-union-bank/the-children-of-indus-valley'; // Replace with your actual donation link
    window.open('https://formbuilder.ccavenue.com/live/city-union-bank/the-children-of-indus-valley', '_blank').focus();
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('upiModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('upiModal')) {
        document.getElementById('upiModal').style.display = 'none';
    }
});
