document.addEventListener('DOMContentLoaded', function () {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const openLoginBtn = document.getElementById('open-login-modal');
    const closeLoginBtn = document.getElementById('close-login-modal');
    const openSignupBtn = document.getElementById('open-signup-modal');
    const closeSignupBtn = document.getElementById('close-signup-modal');
    const backToLoginBtn = document.getElementById('back-to-login');
    const getStartedBtn = document.getElementById('get-started-btn');
    const heroSection = document.querySelector('.hero-section');
    const servicesSection = document.querySelector('.services');
    const assessmentsPage = document.getElementById('assessments-page');
    const serviceBoxes = document.querySelectorAll('.service-box');
    const dashboardLink = document.getElementById('dashboard-link');
    const dashboardPage = document.getElementById('dashboard-page');
    
    // To-do list related variables
    const taskList = document.getElementById('tasksList');
    const taskInput = document.getElementById('newTask');
    const addTaskBtn = document.getElementById('addBtn');

    // Open login modal
    openLoginBtn.addEventListener('click', function () {
        loginModal.classList.add('show');
    });

    // Close login modal
    closeLoginBtn.addEventListener('click', function () {
        loginModal.classList.remove('show');
    });

    // Open signup modal from login modal
    openSignupBtn.addEventListener('click', function () {
        loginModal.classList.remove('show');
        signupModal.classList.add('show');
    });

    // Close signup modal
    closeSignupBtn.addEventListener('click', function () {
        signupModal.classList.remove('show');
    });

    // Switch back to login modal
    backToLoginBtn.addEventListener('click', function () {
        signupModal.classList.remove('show');
        loginModal.classList.add('show');
    });

    // Switch to Assessments Page when clicking "Get Started"
    getStartedBtn.addEventListener('click', function () {
        heroSection.style.display = 'none';  // Hide the hero section
        servicesSection.style.display = 'none';  // Hide the services section
        assessmentsPage.style.display = 'block';  // Show the assessments page
    });

    // Add hover and click event listeners for service boxes
    serviceBoxes.forEach(box => {
        box.addEventListener('click', function () {
            // Remove active class from all service boxes
            serviceBoxes.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked box
            this.classList.add('active');
        });
    });

    // Show the Dashboard when clicking on "Dashboard"
    dashboardLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all other sections
        heroSection.style.display = 'none';
        servicesSection.style.display = 'none';
        assessmentsPage.style.display = 'none'; // Hide the assessments page

        // Display the dashboard page
        dashboardPage.style.display = 'block';
    });

    // Add new to-do functionality
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item
            const newTaskItem = document.createElement('li');
            newTaskItem.innerHTML = `<input type="checkbox"> <span>${taskText}</span>`;
            taskList.appendChild(newTaskItem);

            // Attach the strike-through and delete functionality
            addTaskCompletionListener(newTaskItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert("Please enter a task");
        }
    });

    // Function to handle task completion
    function addTaskCompletionListener(taskItem) {
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const taskText = taskItem.querySelector('span');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                // Apply strike-through effect
                taskText.style.textDecoration = 'line-through';
                taskText.style.color = '#888';  // Make text gray for a "completed" look

                // Delay removal for 1 second to show completion
                setTimeout(() => {
                    taskItem.remove();
                }, 1000);
            }
        });
    }

    // Apply the task completion listener to existing items
    document.querySelectorAll('.tasks-list li').forEach(addTaskCompletionListener);
});
