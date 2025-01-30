"use strict";
const get = (selector, multiple = false) => multiple ? document.querySelectorAll(selector) : document.querySelector(selector);

// hamburger menu
const hamburgerButton = get('.nav-button');
hamburgerButton.addEventListener('click', (e) => {
    e.stopPropagation();
    // toggle hamburger menu
    get('.top-line').classList.toggle('rotate');
    get('.middle-line').classList.toggle('blur');
    get('.bottom-line').classList.toggle('rotate');

    // toggle the overlay and nav menu
    get('.nav-overlay').classList.toggle('open');
    get('.nav-menu').classList.toggle('open');

    document.addEventListener('click', (event) => {
        event.stopPropagation();

        if (!get('.nav-menu').contains(event.target)) {
            get('.top-line').classList.remove('rotate');
            get('.middle-line').classList.remove('blur');
            get('.bottom-line').classList.remove('rotate');

            // remove the overlay and nav menu
            get('.nav-overlay').classList.remove('open');
            get('.nav-menu').classList.remove('open');
        }
    });
});

// Open search modal
get('.search-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    get('.modal-overlay').classList.toggle('hidden');

    //Close search modal
    get('.search-close').addEventListener('click', (e) => {
        e.stopPropagation();
        get('.modal-overlay').classList.add('hidden');
    });
});

// click outside the search modal container to close the modal
document.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!get('.modal-container').contains(event.target)) {
        get('.modal-overlay').classList.add('hidden');
    }
});

//Marquee
const marqueeCopy = get('.footer-autoscroll').cloneNode(true);
get(".footer-slider").appendChild(marqueeCopy);

// Accordion
const tabContainer = get('.faq-outer');
get('.question-block', true).forEach((q, i) => q.setAttribute('data-tab', `${i + 1}`));
get('.answer-block', true).forEach((q, i) => q.setAttribute('data-tab', `${i + 1}`));

tabContainer.addEventListener('click', e => {
    e.stopPropagation();
    const clicked = e.target.closest('.question-block');
    if (!clicked) return;

    const answerBlock = get(`.answer-block[data-tab='${clicked.dataset.tab}']`);
    const isActive = clicked.classList.contains('active');

    // Remove active state from all
    get('.question-block', true).forEach((q) => q.classList.remove('active'));
    get('.answer-block', true).forEach((a) => a.classList.remove('open'));
    clicked.querySelector('.plus-icon').classList.remove('rotate-icon');

    // If the clicked question was NOT already active, open it
    if (!isActive) {
        clicked.classList.add('active');
        answerBlock.classList.add('open');
        clicked.querySelector('.plus-icon').classList.add('rotate-icon');
    }
});

// tabs
const tabImageContainer = get('.tabs');
get('.tab-panel', true).forEach((t, i) => t.setAttribute('data-tab', `${i + 1}`));
get('.tab-link', true).forEach((tl, i) => tl.setAttribute('data-tab', `${i + 1}`));

tabImageContainer.addEventListener('click', e => {
    e.stopPropagation();
    const clicked = e.target.closest('.tab-link');
    if (!clicked) return;
    const imageBlock = document.querySelector(`.tab-panel[data-tab='${clicked.dataset.tab}']`);

    // tabs
    get('.tab-panel', true).forEach((q) => q.classList.remove('active'));
    get('.tab-link', true).forEach((q) => q.classList.remove('current'));

    if (clicked) {
        imageBlock.classList.add('active');
        clicked.classList.add('current');
    }
});


