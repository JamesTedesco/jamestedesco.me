main()

function main() {

    // size portrait on mobile
    sizePortraitOnMobile()

    // load portrait when it's ready
    loadPortrait()

    // nudge the user if they're not scrolling
    checkInitialScroll()

    // check if a form has been submitted on load
    checkSubmissionStatus()
    successStatus()

}

// indicate successful submission of contact form
function successStatus() {

    // add event listener to form
    document
        .getElementById('form')
        .addEventListener('submit', (evt) => {

            // mark success if form submitted
            localStorage.setItem('submission', 'success')
        })
}

// check if form was successfully submitted
function checkSubmissionStatus() {
    var status = localStorage.getItem('submission')

    // if appropriate, show success animation
    if (status == 'success') {

        // remove local storage item
        localStorage.removeItem('submission')

        // notify success
        let successMsg = document.getElementById('successMsg')
        successMsg
            .classList
            .add('reveal-msg')

        // hide success msg after 10 seconds
        setTimeout(() => {
            successMsg
                .classList
                .remove('reveal-msg')
        }, 6000)
    }
}


function sizePortraitOnMobile() {

    window.addEventListener('resize', reportWindowSize);
    window.addEventListener('load', reportWindowSize)

    function reportWindowSize() {
        // get window height from event
        let windowHeight = window.innerHeight
        let windowWidth = window.innerWidth


        let header = document.getElementById('home')
        let headerHeight = header.offsetHeight

        if (headerHeight > windowHeight) {
            // console.log('header height exceeds window height')
        }





        // if bigger than mobile, remove inline style
        if (windowWidth < 730) {

            console.log('small screen')

            // find wrapper height
            let introWrapper = document.getElementById('intro-wrapper')
            let boxHeight = introWrapper.offsetHeight
            let computedStyles = getComputedStyle(introWrapper)
            let marginLeft = parseInt(computedStyles.marginLeft)
            let marginRight = parseInt(computedStyles.marginRight)
            let wrapperHeight = boxHeight + marginLeft + marginRight


            let correctedHeight = windowHeight - wrapperHeight
            let portrait = document.getElementById('portrait')
            portrait.style.height = correctedHeight

        } else {
            console.log('larger screen')
            let portrait = document.getElementById('portrait')

            portrait.removeAttribute('style')
        }
    }
}


function headerTooTall() {

}



function checkInitialScroll() {

    // prevent listener if already loaded past splash screen
    // if (window.location.href != "https://www.jamestedesco.me/") { return }

    console.log('recognized location')

    // listener type, function receiving notification, param options
    window.addEventListener("scroll", runOnScroll, { passive: true });


    // find arrow element
    let arrow = document.getElementById('nudge-arrow')


    // set default state
    let hasScrolled = false

    function runOnScroll(evt) {
        // indicate when scrolling has occured
        hasScrolled = true

        // reset arrow state if possible
        arrow.classList.remove('reveal-arrow')
    };


    window.setTimeout(() => {

        // nudge user after waiting
        if (hasScrolled == false) {
            // show down-arrow
            arrow.classList.add('reveal-arrow')

        }
    }, 8000)
}


// reveals picture all at once rather than allowing a staggered load.
function loadPortrait() {

    let img = document.getElementById('portrait')

    // check status every tenth of a second
    let portraitInterval = window.setInterval(() => {
        console.log('The portrait is ready:', img.complete)
        if (img.complete) {
            img
                .classList
                .add('visible')

            clearInterval(portraitInterval)
            console.log('Portrait loaded!')
        }
    }, 50)
}