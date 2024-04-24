const tabsContainer = document.getElementById('pills-tab');
const tabs = tabsContainer.querySelectorAll('.tab');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let currentTabIndex = 0;
const numTabsToShowDesktop = 6; // Number of tabs to show on desktop and tablet
const numTabsToShowMobile = 1; // Number of tabs to show on mobile

// Function to show/hide tabs based on current index
function showTabs() {
    tabs.forEach((tab, index) => {
        if (index >= currentTabIndex && index < currentTabIndex + getCurrentNumTabsToShow()) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });

    // Display or hide the previous arrow
    if (currentTabIndex > 0) {
        prevArrow.style.display = 'block';
    } else {
        prevArrow.style.display = 'none';
    }

    // Display or hide the next arrow
    if (currentTabIndex + getCurrentNumTabsToShow() < tabs.length) {
        nextArrow.style.display = 'block';
    } else {
        nextArrow.style.display = 'none';
    }
}

// Function to show/hide tabs based on current index
function showTabs() {
    tabs.forEach((tab, index) => {
        if (index >= currentTabIndex && index < currentTabIndex + getCurrentNumTabsToShow()) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });

    // Display or hide the previous arrow
    if (currentTabIndex > 0) {
        prevArrow.style.display = 'block';
    } else {
        prevArrow.style.display = 'none';
    }

    // Display or hide the next arrow
    if (currentTabIndex + getCurrentNumTabsToShow() < tabs.length) {
        nextArrow.style.display = 'block';
    } else {
        nextArrow.style.display = 'none';
    }
}

// Function to get the current number of tabs to show based on viewport size
function getCurrentNumTabsToShow() {
    if (window.innerWidth < 768) { // Mobile viewport width
        return numTabsToShowMobile;
    } else { // Desktop and tablet viewport width
        return numTabsToShowDesktop;
    }
}

// Function to set the active tab index
function setActiveTabIndex(index) {
    currentTabIndex = index;
    showTabs();
}

// Initial setup
let activeTabElement = document.querySelector('.nav-link.active'); // Get the active tab element
let activeTabIndex = Array.from(tabs).indexOf(activeTabElement.parentElement); // Get its index among the tabs
if (activeTabIndex !== -1) {
    setActiveTabIndex(Math.max(0, activeTabIndex - 3)); // Ensure it's shown as the 4th tab
} else {
    setActiveTabIndex(Math.max(0, tabs.length - getCurrentNumTabsToShow()));
}

// Event listener for next arrow click
nextArrow.addEventListener('click', () => {
    if (currentTabIndex + getCurrentNumTabsToShow() < tabs.length) {
        currentTabIndex += 1;
        showTabs();
    }
});

// Event listener for previous arrow click
prevArrow.addEventListener('click', () => {
    if (currentTabIndex > 0) {
        currentTabIndex -= 1;
        showTabs();
    }
});

// Event listener for window resize to handle responsive changes
window.addEventListener('resize', () => {
    showTabs();
});



// JavaScript to make header sticky after 5 scrolls
window.addEventListener('scroll', function () {
    var table = document.getElementById('myTable');
    var headers = table.getElementsByClassName('sticky-header')[0];
    var scrollPos = window.scrollY;
    var contentHeight = table.getBoundingClientRect().height;
    if (scrollPos > 5 * contentHeight) {
        headers.classList.add('sticky-header-scroll');
    } else {
        headers.classList.remove('sticky-header-scroll');
    }
});
