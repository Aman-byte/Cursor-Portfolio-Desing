const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
setTimeout(() => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
}, 100);
});

document.addEventListener('mouseout', () => {
cursor.style.display = 'none';
});

document.addEventListener('mouseover', () => {
cursor.style.display = 'block';
});