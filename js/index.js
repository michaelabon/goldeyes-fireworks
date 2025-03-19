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
  new Date('2024-09-06T12:00:00-06:00'),
  new Date('2025-05-20T22:00:00-06:00'),
  new Date('2025-06-06T22:00:00-06:00'),
  new Date('2025-06-27T22:00:00-06:00'),
  new Date('2025-07-11T22:00:00-06:00'),
  new Date('2025-07-25T22:00:00-06:00'),
  new Date('2025-08-08T22:00:00-06:00'),
  new Date('2025-08-29T22:00:00-06:00'),
]

announceFireworks = () => {
  document.getElementById('answer').innerHTML = "<p>Yes, Waterfront Drive is <strong><em>closed</em></strong> today.</p> <p>Your evening commute will be disrupted.</p>";
  document.querySelector('body').classList.add('yes');
}

// Make a big warning if today is a fireworks day
for (let fireworksDate of fireworksDates) {
  if (isSameDate(today, fireworksDate)) {
    announceFireworks()
    break;
  }
}

// Find the nearest date in the future
for (let fireworksDate of fireworksDates) {
    if (today < fireworksDate) {
        const localizedFireworksDate = new Intl.DateTimeFormat("en-CA", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(fireworksDate)
        const localizedDateDistance = new Intl.RelativeTimeFormat("en-CA").format(Math.floor((fireworksDate - today) / (1000 * 60 * 60 * 24)), 'day');
        document.getElementById('next').innerHTML = `<p>The next closure will be ${localizedDateDistance} on ${localizedFireworksDate}.</p>`;
        break;
    }
}


// If the query params include ?closed=1 then call announceFireworks()
if ((new URLSearchParams(window.location.search)).get('closed')) {
  announceFireworks();
}
