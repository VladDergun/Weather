const leftScrollButton = document.getElementById("left");
const rightScrollButton = document.getElementById("right");
const scrollableArea = document.getElementById("hours-scoll-center");

scrollableArea.addEventListener('scroll', function () {
    // Check if the scrollable area has reached the leftmost position
    if (scrollableArea.scrollLeft === 0) {
        leftScrollButton.style.display = 'none'; // Hide left button
    } else {
        leftScrollButton.style.display = 'block'; // Show left button
    }

    // Check if the scrollable area has reached the rightmost position
    if (scrollableArea.scrollLeft + scrollableArea.clientWidth === scrollableArea.scrollWidth) {
        rightScrollButton.style.display = 'none'; // Hide right button
    } else {
        rightScrollButton.style.display = 'block'; // Show right button
    }
});

function scrollLeft() {
    scrollableArea.scrollBy({
        left: -215,
        behavior: 'smooth'
    });
}

function scrollRight() {
    scrollableArea.scrollBy({
        left: 215,
        behavior: 'smooth'
    });
}
function rotateLine() {

}
leftScrollButton.addEventListener("click", scrollLeft);
rightScrollButton.addEventListener("click", scrollRight);

let isGrabbed = false;
let grabStartX = 0;
let scrollLeftStart = 0;

const itemContainer = scrollableArea;

// Mouse event listeners
itemContainer.addEventListener('mousedown', handleGrabStart);
itemContainer.addEventListener('mouseleave', handleGrabEnd);
itemContainer.addEventListener('mouseup', handleGrabEnd);
itemContainer.addEventListener('mousemove', handleGrabMove);

// Touch event listeners
itemContainer.addEventListener('touchstart', handleTouchStart);
itemContainer.addEventListener('touchend', handleTouchEnd);
itemContainer.addEventListener('touchmove', handleTouchMove);

function handleGrabStart(e) {
    isGrabbed = true;
    grabStartX = e.pageX - itemContainer.offsetLeft;
    scrollLeftStart = itemContainer.scrollLeft;
}

function handleGrabEnd() {
    isGrabbed = false;
}

function handleGrabMove(e) {
    if (!isGrabbed) return;
    const mouseX = e.pageX - itemContainer.offsetLeft;
    const scrollX = mouseX - grabStartX;
    itemContainer.scrollLeft = scrollLeftStart - scrollX;
}

function handleTouchStart(e) {
    const touch = e.touches[0];
    isGrabbed = true;
    grabStartX = touch.pageX - itemContainer.offsetLeft;
    scrollLeftStart = itemContainer.scrollLeft;
}

function handleTouchEnd() {
    isGrabbed = false;
}

function handleTouchMove(e) {
    if (!isGrabbed || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const touchX = touch.pageX - itemContainer.offsetLeft;
    const scrollX = touchX - grabStartX;
    itemContainer.scrollLeft = scrollLeftStart - scrollX;
}
