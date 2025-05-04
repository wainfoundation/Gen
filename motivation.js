// Motivation Message System
// Displays motivational messages every 10 seconds based on subscription plan

// Define motivational messages for each subscription status
const motivationalMessages = {
  nonSubscribed: [
    "Ready to transform your habits? Subscribe to Gen’s Basic plan for just 3 Pi/month!",
    "Join a global community and boost your productivity. Get started with Gen today!"
  ],
  Basic: [
    "You’re doing great with Gen’s Basic plan! Keep tracking those habits!",
    "Want mood-based suggestions? Upgrade to Pro for smarter task management."
  ],
  Pro: [
    "Amazing work with Gen Pro! Leverage mood-based suggestions to stay on track.",
    "Unlock personalized AI coaching with Premium for only 12 Pi/month!"
  ],
  Premium: [
    "You’re a Gen Premium star! Maximize your analytics dashboard for deeper insights.",
    "Keep shining with exclusive community events and early feature access!"
  ]
};

// Initialize message display
function initMotivationMessages() {
  const messageContainer = document.getElementById('motivational-banner');
  if (!messageContainer) {
    console.warn('Motivational banner container not found.');
    return;
  }

  // Get user subscription status (demo: assumes user.metadata.subscriptionPlan)
  // In production, fetch from server-side API after Pi authentication
  const user = window.user || { metadata: { subscriptionPlan: null } };
  const plan = user.metadata.subscriptionPlan || 'nonSubscribed';

  // Select messages based on plan
  const messages = motivationalMessages[plan] || motivationalMessages.nonSubscribed;
  let currentIndex = 0;

  // Function to display next message
  function showNextMessage() {
    messageContainer.textContent = messages[currentIndex];
    messageContainer.classList.remove('fade-out');
    messageContainer.classList.add('fade-in');

    // Trigger fade-out before next message
    setTimeout(() => {
      messageContainer.classList.remove('fade-in');
      messageContainer.classList.add('fade-out');
    }, 8000); // Start fade-out 2 seconds before next message

    currentIndex = (currentIndex + 1) % messages.length;
  }

  // Initial message
  showNextMessage();

  // Cycle messages every 10 seconds
  setInterval(showNextMessage, 10000);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initMotivationMessages);
