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
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    scrollableArea.scrollBy({
        left: 200,
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

itemContainer.addEventListener('mousedown', (e) => {
    isGrabbed = true;
    grabStartX = e.pageX - itemContainer.offsetLeft;
    scrollLeftStart = itemContainer.scrollLeft;
});

itemContainer.addEventListener('mouseleave', () => {
    isGrabbed = false;
});

itemContainer.addEventListener('mouseup', () => {
    isGrabbed = false;
});

itemContainer.addEventListener('mousemove', (e) => {
    if (!isGrabbed) return;
    const mouseX = e.pageX - itemContainer.offsetLeft;
    const scrollX = mouseX - grabStartX;
    itemContainer.scrollLeft = scrollLeftStart - scrollX;
});
