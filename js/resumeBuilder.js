//Placeholder used by all objects. Not using const keyword as it's not fully supported by all browsers
var DATA_PLACEHOLDER = '%data%';

// Data Structures in Object literal notation
var bio = {
    'name': 'Justin Mariaselvam',
    'role': 'Software Developer',
    'contacts': {
        'mobile': '0447 64 45 46',
        'email': 'justin.mariaselvam@gmail.com',
        'github': 'mariaselvam',
        'twitter': '@justin',
        'location': 'Sint-Niklaas, Belgium'
    },
    'welcomeMessage': 'Welcome to my online resume',
    'biopic': 'images/bio_pic.jpg',
    'skills': [
        'HTML5',
        'JavaScript',
        'CSS3',
        'Java'
    ],
    'display': function() {
        var HEADER_ID = '#header';
        // We are going to attach the Bootstrap navbar to the header
        $(HEADER_ID).prepend(navBar)
            .prepend(HTMLheaderRole.replace(DATA_PLACEHOLDER, this.role))
            .prepend(HTMLheaderName.replace(DATA_PLACEHOLDER, this.name));

        var TOP_CONTACTS_ID_SELECTOR = '#topContacts';
        $(TOP_CONTACTS_ID_SELECTOR).append(HTMLmobile.replace(DATA_PLACEHOLDER, this.contacts.mobile))
            .append(HTMLemail.replace(DATA_PLACEHOLDER, this.contacts.email))
            .append(HTMLgithub.replace(DATA_PLACEHOLDER, this.contacts.github))
            .append(HTMLtwitter.replace(DATA_PLACEHOLDER, this.contacts.twitter))
            .append(HTMLlocation.replace(DATA_PLACEHOLDER, this.contacts.location));

        $(HEADER_ID).append(HTMLbioPic.replace(DATA_PLACEHOLDER, this.biopic))
            .append(HTMLwelcomeMsg.replace(DATA_PLACEHOLDER, this.welcomeMessage));

        var SKILLS_ID = '#skills';
        if (this.skills && this.skills.length > 0) {
            $(HEADER_ID).append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                $(SKILLS_ID).append(HTMLskills.replace(DATA_PLACEHOLDER, skill));
            });
        }

        var FOOTER_CONTACTS_ID_SELECTOR = '#footerContacts';
        $(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLmobile.replace(DATA_PLACEHOLDER, this.contacts.mobile))
            .append(HTMLemail.replace(DATA_PLACEHOLDER, this.contacts.email))
            .append(HTMLgithub.replace(DATA_PLACEHOLDER, this.contacts.github))
            .append(HTMLtwitter.replace(DATA_PLACEHOLDER, this.contacts.twitter))
            .append(HTMLlocation.replace(DATA_PLACEHOLDER, this.contacts.location));
    }
};

var education = {
    'schools': [{
        'name': 'National University Of Ireland',
        'location': 'Maynooth',
        'degree': 'B.Sc.',
        'majors': [
            'CS',
            'Physics'
        ],
        'dates': 1998,
        'url': 'https://www.maynoothuniversity.ie'
    }, {
        'name': 'Loyola College',
        'location': 'Chennai',
        'degree': 'B.Sc.',
        'majors': [
            'Statistics'
        ],
        'dates': 1994,
        'url': 'http://www.loyolacollege.edu'
    }],
    'onlineCourses': [{
        'title': 'Front-End Developer',
        'school': 'Udacity',
        'date': 2016,
        'url': 'http://www.udacity.com'
    }],
    'display': function() {
        var EDUCATION_ID_SELECTOR = '#education';
        var EDUCATION_ENTRY_LAST_CLASS_SELECTOR = '.education-entry:last';

        if (this.schools && this.schools.length > 0) {
            this.schools.forEach(function(school) {
                $(EDUCATION_ID_SELECTOR).append(HTMLschoolStart);

                var schoolNameFragment = HTMLschoolName.replace(DATA_PLACEHOLDER, school.name);
                var schoolDegreeFragment = HTMLschoolDegree.replace(DATA_PLACEHOLDER, school.degree);
                $(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(schoolNameFragment.concat(schoolDegreeFragment))
                    .append(HTMLschoolDates.replace(DATA_PLACEHOLDER, school.dates))
                    .append(HTMLschoolLocation.replace(DATA_PLACEHOLDER, school.location))
                    .append(HTMLschoolMajor.replace(DATA_PLACEHOLDER, school.majors));
            });
        }

        if (this.onlineCourses && this.onlineCourses.length > 0) {
            $(EDUCATION_ID_SELECTOR).append(HTMLonlineClasses);

            this.onlineCourses.forEach(function(course) {
                $(EDUCATION_ID_SELECTOR).append(HTMLschoolStart);

                var onlineTitleFragment = HTMLonlineTitle.replace(DATA_PLACEHOLDER, course.title);
                var onlineSchoolFragment = HTMLonlineSchool.replace(DATA_PLACEHOLDER, course.school);
                $(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(onlineTitleFragment.concat(onlineSchoolFragment))
                    .append(HTMLonlineDates.replace(DATA_PLACEHOLDER, course.date))
                    .append(HTMLonlineURL.replace(DATA_PLACEHOLDER, course.url));
            });
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Vision Consulting',
        'title': 'Senior Java Consultant',
        'location': 'Zele',
        'dates': '2007 - Present',
        'description': 'On-site consulting for various clients for Java, Oracle and Adobe related technologies'
    }, {
        'employer': 'Ferranti Computer Systems',
        'title': 'Software Engineer',
        'location': 'Antwerp',
        'dates': '2004 - 2007',
        'description': 'Various internal product development in Java, Oracle'

    }],
    'display': function() {
        var WORK_EXPERIENCE_ID = '#workExperience';
        var WORK_ENTRY_LAST_CLASS_SELECTOR = '.work-entry:last';

        if (this.jobs && this.jobs.length > 0) {
            this.jobs.forEach(function(job) {
                $(WORK_EXPERIENCE_ID).append(HTMLworkStart);

                var employerFragment = HTMLworkEmployer.replace(DATA_PLACEHOLDER, job.employer);
                var jobTitleFragment = HTMLworkTitle.replace(DATA_PLACEHOLDER, job.title);
                $(WORK_ENTRY_LAST_CLASS_SELECTOR).append(employerFragment.concat(jobTitleFragment))
                    .append(HTMLworkDates.replace(DATA_PLACEHOLDER, job.dates))
                    .append(HTMLworkLocation.replace(DATA_PLACEHOLDER, job.location))
                    .append(HTMLworkDescription.replace(DATA_PLACEHOLDER, job.description));
            });
        }
    }
};

var projects = {
    'projects': [{
        'title': 'Bokeh',
        'dates': '2015',
        'description': 'Bokeh Project for making your favourite bouquets',
        'images': ['images/flower.jpg', 'images/winter.jpg']
    }, {
        'title': 'Animals',
        'dates': '2015',
        'description': 'Support adorable animals',
        'images': ['images/dog.jpg', 'images/kitty.jpg']
    }],
    'display': function() {
        var PROJECTS_ID_SELECTOR = '#projects';
        var PROJECTS_ENTRY_LAST_CLASS_SELECTOR = '.project-entry:last';

        if (this.projects && this.projects.length > 0) {
            this.projects.forEach(function(project) {
                $(PROJECTS_ID_SELECTOR).append(HTMLprojectStart);

                $(PROJECTS_ENTRY_LAST_CLASS_SELECTOR).append(HTMLprojectTitle.replace(DATA_PLACEHOLDER, project.title))
                    .append(HTMLprojectDates.replace(DATA_PLACEHOLDER, project.dates))
                    .append(HTMLprojectDescription.replace(DATA_PLACEHOLDER, project.description));

                project.images.forEach(function(image) {
                    $(PROJECTS_ENTRY_LAST_CLASS_SELECTOR).append(HTMLprojectImage.replace(DATA_PLACEHOLDER, image));
                });
            });
        }
    }
};

function enableGoogleMap() {
    $('#map-div').append(googleMap);
}

bio.display();
education.display();
work.display();
projects.display();
enableGoogleMap();