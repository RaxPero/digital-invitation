const page = document.querySelector('.page');
const coverScreen = document.getElementById('coverScreen');
const invitationScreen = document.getElementById('invitationScreen');
const envelope = document.getElementById('envelope');
const backButton = document.getElementById('backButton');

function openInvitation() {
  page.classList.add('opened');
  invitationScreen.classList.add('show');
  invitationScreen.setAttribute('aria-hidden', 'false');
  coverScreen.setAttribute('aria-hidden', 'true');
  envelope.setAttribute('aria-expanded', 'true');
  window.setTimeout(() => {
    invitationScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    backButton.focus({ preventScroll: true });
  }, 150);
}

function closeInvitation() {
  invitationScreen.classList.remove('show');
  invitationScreen.setAttribute('aria-hidden', 'true');
  coverScreen.setAttribute('aria-hidden', 'false');
  page.classList.remove('opened');
  envelope.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  envelope.focus({ preventScroll: true });
}

envelope.addEventListener('click', openInvitation);
envelope.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openInvitation();
  }
});
backButton.addEventListener('click', closeInvitation);
