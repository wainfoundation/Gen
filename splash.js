// splash.js
document.addEventListener('DOMContentLoaded', () => {
  // Redirect to index.html after 3 seconds
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 3000);

  // Ensure loader is visible
  const loader = document.querySelector('.loader');
  loader.style.opacity = '1';

  // Accessibility: Announce loading state
  const announceLoading = () => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.left = '-9999px';
    announcement.textContent = 'Loading Gen, please wait...';
    document.body.appendChild(announcement);
  };
  announceLoading();
});
