// Function to toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');
  
  // Save preference in localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, check if user has a saved theme preference
(function () {
  const userTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();