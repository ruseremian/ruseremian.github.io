var sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', function() {
    sidebar.classList.add('expanded');
});

sidebar.addEventListener('mouseout', function() {
    sidebar.classList.remove('expanded');
});

AOS.init({
    duration: 1200, // You can adjust the animation duration here
});
