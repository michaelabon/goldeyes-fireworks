const today = new Date();

function isSameDate(today, candidate) {
    return (
        today.getFullYear() === candidate.getFullYear() &&
        today.getMonth() === candidate.getMonth() &&
        today.getDate() === candidate.getDate()
    );
}


const fireworksDates = [
    new Date('2024-08-30T12:00:00-06:00'),
]

announceFireworks = () => {
    document.getElementById('answer').innerHTML = "<p>Yes, Waterfront Drive is <strong><em>closed</em></strong> today.</p> <p>Your evening commute will be disrupted.</p>";
    document.querySelector('body').classList.add('yes');
}

// Compare today to the candidate
for (let fireworksDate of fireworksDates) {
    if (isSameDate(today, fireworksDate)) {
        announceFireworks()
        break;
    }
}

// If the query params include ?closed=1 then call announceFireworks()
if ((new URLSearchParams(window.location.search)).get('closed')) {
    announceFireworks();
}
