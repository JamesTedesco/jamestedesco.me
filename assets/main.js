main()

function main() {
    // check if a form has been submitted on load
    checkSubmissionStatus()
    successStatus()
    checkInitialScroll()

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




function checkInitialScroll() {

    // prevent listener if already loaded past splash screen
    // if (window.location.href != "https://www.jamestedesco.me/") { return }

    console.log('recognized location')

    // listener type, function receiving notification, param options
    window.addEventListener("scroll", runOnScroll, { passive: true });

    let hasScrolled = false
    // what should we do when scrolling occurs
    function runOnScroll(evt) {

        hasScrolled = true
    };

    // if user hasn't scrolled in 8 seconds, give nudge
    window.setTimeout(() => {

        if (hasScrolled == false) {
            let arrow = document.getElementById('nudge-arrow')
            console.log(arrow)

            // show down-arrow
            arrow.classList.add('reveal-arrow')
        } else {
            console.log('keep on cruisin\' babe')
        }
    }, 2000)




}  
