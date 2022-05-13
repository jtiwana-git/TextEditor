const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event. DONE
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element. DONE
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });

// TODO: Add an handler for the `appinstalled` event. DONE
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});
