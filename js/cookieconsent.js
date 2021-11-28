
function enableGoogleAnalytics() {
    window['ga-disable-G-BTTE6EDM0Z'] = false;
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BTTE6EDM0Z', { 'anonymize_ip': true });
}

function disableGoogleAnalytics () {
    // disable google analytics, existing cookies will not be deleted
    // existing cookies will neither be updated nor sent to google
    // see: https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
    window['ga-disable-G-BTTE6EDM0Z'] = true;
  }

let cookieconsent_status = 'deny';

function hasStatusChanged(newStatus) {
    return newStatus !== cookieconsent_status;
}

window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#383b75"
        },
        "button": {
            "background": "#f1d600"
        }
    },
    type: 'opt-in',
    onInitialise: function (status) {
        if (status !== 'allow') {
            disableGoogleAnalytics();
        } else {
            enableGoogleAnalytics();
            cookieconsent_status = status;
        }
    },
    onStatusChange: function(status, chosenBefore) {
        let consented = status === 'allow';
        if (!hasStatusChanged(consented)) {
            return;
        }
        cookieconsent_status = status;
        if (consented) {
            enableGoogleAnalytics();
        } else {
            disableGoogleAnalytics();
        }
    },
});