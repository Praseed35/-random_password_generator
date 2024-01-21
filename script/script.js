function generatePassword() {
    var length = document.getElementById('passwordLength').value;
    var numPasswords = document.getElementById('numPasswords').value;

    length = parseInt(length);
    numPasswords = parseInt(numPasswords);

    if (isNaN(length) || length <= 0 || isNaN(numPasswords) || numPasswords <= 0) {
        alert("Please enter valid positive numbers for password length and number of passwords.");
        return;
    }

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    var passwordsOutput = document.getElementById('passwordsOutput');
    var passwordInfo = document.getElementById('passwordInfo');

    passwordsOutput.innerHTML = '';
    passwordInfo.innerText = '';

    for (var j = 0; j < numPasswords; j++) {
        var password = '';
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        var passwordContainer = document.createElement('div');
        passwordContainer.className = 'text-center'; // Added this class
        passwordContainer.innerHTML = `<input type="text" value="${password}" readonly class="password-output-input">`;
        
        var copyButton = document.createElement('button');
        copyButton.innerText = 'Copy';
        copyButton.className = 'copy-button';
        copyButton.addEventListener('click', function() {
            copyToClipboard(this.parentElement.querySelector('.password-output-input'));
        });

        passwordContainer.appendChild(copyButton);
        passwordsOutput.appendChild(passwordContainer);
    }

    // Display the passwords after generating them
    passwordsOutput.style.display = 'block';
    passwordInfo.innerText = `Generated ${numPasswords} passwords with length ${length}.`;
}

function copyToClipboard(element) {
    element.select();
    document.execCommand('copy');
    // Removed the alert
}