const courses = [
    { code: 'WDD130', name: 'Web Fundamentals', credits: 3, completed: true },
    { code: 'WDD231', name: 'Web Frontend Development', credits: 3, completed: false },
    { code: 'CSE110', name: 'Programming Building Blocks', credits: 3, completed: true },
    { code: 'CSE210', name: 'Software Design', credits: 3, completed: false }
];

function displayCourses(filteredCourses) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseCard.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
        container.appendChild(courseCard);
        totalCredits += course.credits;
    });

    document.getElementById('total-credits').textContent = totalCredits;
}

function filterCourses(category) {
    if (category === 'all') {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.code.startsWith(category));
        displayCourses(filtered);
    }
}

displayCourses(courses);
