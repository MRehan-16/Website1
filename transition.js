const findPathBtn = document.getElementById('findPathBtn');
const pageWrapper = document.getElementById('pageWrapper');

findPathBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Trigger fade-out animation
  pageWrapper.classList.add('fade-out');

  // After animation ends, redirect
  setTimeout(() => {
    window.location.href = "Instruction.html"; // your instruction page
  }, 600); // matches CSS transition duration
});
