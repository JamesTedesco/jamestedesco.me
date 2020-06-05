main()

function main() {

    // size portrait on mobile
    sizePortraitOnMobile()

    // nudge the user if they're not scrolling
    checkInitialScroll()

    // check if a form has been submitted on load
    checkSubmissionStatus()
    successStatus()

    console.log('inside, thanks')
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

    // test if hit mobile breakpoint
    if (window.innerWidth > 540) { return }

    console.log('small screen')

    // find wrapper height
    let introWrapper = document.getElementById('intro-wrapper')
    let boxHeight = introWrapper.offsetHeight
    let computedStyles = getComputedStyle(introWrapper)
    let marginLeft = parseInt(computedStyles.marginLeft)
    let marginRight = parseInt(computedStyles.marginRight)
    let wrapperHeight = boxHeight + marginLeft + marginRight

    // get window height
    let windowHeight = window.innerHeight


    console.log(wrapperHeight, windowHeight, windowHeight-wrapperHeight)


    let correctedHeight = windowHeight - wrapperHeight
    let portrait = document.getElementById('portrait')
    portrait.style.height = correctedHeight


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
