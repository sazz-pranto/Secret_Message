const { hash } = window.location; // extracting the hash property off of the url, it contains the hashed information
const message = atob(hash.replace('#', ''));  // decoded message

if(message) {
    document.querySelector('#message-form').classList.add('hide'); // removes the message form
    document.querySelector('#message-show').classList.remove('hide'); // shows the decoded message card
    document.querySelector('h1').innerHTML = message;
}
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // prevents the browser from submitting the form

    document.querySelector('#message-form').classList.add('hide'); // removes the message form
    document.querySelector('#link-form').classList.remove('hide'); // shows the link form

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value); // btoa converts string to base64 character

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;  // adds the current location of the file with the encrypted message
    linkInput.select();  // selects the input value automatically
});

