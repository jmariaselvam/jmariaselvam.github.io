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
    'bioPic': 'images/bio_pic.jpg',
    'skills': [
        'HTML5',
        'JavaScript',
        'CSS3',
        'Java'
    ],
	'display': function() {
		var HEADER_ID = '#header';
		$(HEADER_ID).prepend(HTMLheaderRole.replace(DATA_PLACEHOLDER, this.role));
		$(HEADER_ID).prepend(HTMLheaderName.replace(DATA_PLACEHOLDER, this.name));

		var TOP_CONTACTS_ID_SELECTOR = '#topContacts';
		$(TOP_CONTACTS_ID_SELECTOR).append(HTMLmobile.replace(DATA_PLACEHOLDER, this.contacts.mobile));
		$(TOP_CONTACTS_ID_SELECTOR).append(HTMLemail.replace(DATA_PLACEHOLDER, this.contacts.email));
		$(TOP_CONTACTS_ID_SELECTOR).append(HTMLgithub.replace(DATA_PLACEHOLDER, this.contacts.github));
		$(TOP_CONTACTS_ID_SELECTOR).append(HTMLtwitter.replace(DATA_PLACEHOLDER, this.contacts.twitter));
		$(TOP_CONTACTS_ID_SELECTOR).append(HTMLlocation.replace(DATA_PLACEHOLDER, this.contacts.location));

		$(HEADER_ID).append(HTMLbioPic.replace(DATA_PLACEHOLDER, this.bioPic));
		$(HEADER_ID).append(HTMLwelcomeMsg.replace(DATA_PLACEHOLDER, this.welcomeMessage));

		var SKILLS_ID = '#skills';
		if (this.skills && this.skills.length > 0) {
			$(HEADER_ID).append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$(SKILLS_ID).append(HTMLskills.replace(DATA_PLACEHOLDER, skill));
			});
		}

		var FOOTER_CONTACTS_ID_SELECTOR = '#footerContacts';
		$(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLmobile.replace(DATA_PLACEHOLDER, this.contacts.mobile));
		$(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLemail.replace(DATA_PLACEHOLDER, this.contacts.email));
		$(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLgithub.replace(DATA_PLACEHOLDER, this.contacts.github));
		$(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLtwitter.replace(DATA_PLACEHOLDER, this.contacts.twitter));
		$(FOOTER_CONTACTS_ID_SELECTOR).append(HTMLlocation.replace(DATA_PLACEHOLDER, this.contacts.location));
	}
};

var education = {
    'schools': [
        {
            'name': 'National University Of Ireland',
            'location': 'Maynooth',
            'degree': 'B.Sc.',
            'majors': [
                'CS',
                'Physics'
            ],
            'dates': 1998,
			'url': 'http://www.nuim.com'
        },
        {
            'name': 'Loyola College',
            'location': 'Chennai',
            'degree': 'B.Sc.',
            'majors': [
                'Statistics'
            ],
            'dates': 1994,
			'url': 'http://www.nuim.com'
        }
    ],
    'onlineCourses': [
    	{
			'title': 'Front-End Developer',
			'school': 'Udacity',
			'date': 2016,
			'url': 'http://www.udacity.com'
    	}
    ],
	'display': function() {
		var EDUCATION_ID_SELECTOR = '#education';
		var EDUCATION_ENTRY_LAST_CLASS_SELECTOR = '.education-entry:last';

		if (this.schools && this.schools.length > 0) {
			this.schools.forEach(function(school) {
				$(EDUCATION_ID_SELECTOR).append(HTMLschoolStart);

				var schoolNameFragment = HTMLschoolName.replace(DATA_PLACEHOLDER, school.name);
				var schoolDegreeFragment = HTMLschoolDegree.replace(DATA_PLACEHOLDER, school.degree);
				$(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(schoolNameFragment.concat(schoolDegreeFragment));
				$(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(HTMLschoolDates.replace(DATA_PLACEHOLDER, school.dates));
				$(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(HTMLschoolLocation.replace(DATA_PLACEHOLDER, school.location));
				$(EDUCATION_ENTRY_LAST_CLASS_SELECTOR).append(HTMLschoolMajor.replace(DATA_PLACEHOLDER, school.majors));
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
		},
		{
			'employer': 'Ferranti Computer Systems',
			'title': 'Software Engineer',
			'location': 'Antwerp',
			'dates': '2004 - 2007',
			'description': 'Various internal product development in Java, Oracle'

		}
	],
	'display': function() {
		var WORK_EXPERIENCE_ID = '#workExperience';
		var WORK_ENTRY_LAST_CLASS_SELECTOR = '.work-entry:last';

		if (this.jobs && this.jobs.length > 0) {
			this.jobs.forEach(function(job) {
				$(WORK_EXPERIENCE_ID).append(HTMLworkStart);

				var employerFragment = HTMLworkEmployer.replace(DATA_PLACEHOLDER, job.employer);
				var jobTitleFragment = HTMLworkTitle.replace(DATA_PLACEHOLDER, job.title);
				$(WORK_ENTRY_LAST_CLASS_SELECTOR).append(employerFragment.concat(jobTitleFragment));
				$(WORK_ENTRY_LAST_CLASS_SELECTOR).append(HTMLworkDates.replace(DATA_PLACEHOLDER, job.dates));
				$(WORK_ENTRY_LAST_CLASS_SELECTOR).append(HTMLworkLocation.replace(DATA_PLACEHOLDER, job.location));
				$(WORK_ENTRY_LAST_CLASS_SELECTOR).append(HTMLworkDescription.replace(DATA_PLACEHOLDER, job.description));
			});
		}
	}
};

var projects = {
    'projects': [
        {
            'title': 'Bokeh',
            'date': '2015',
            'description': 'Bokeh Project for making your favourite bouquets',
            'images': ['http://lorempixel.com/400/200/nature', 'http://lorempixel.com/400/200/nature']
        },
		{
            'title': 'Sunflower',
            'date': '2015',
            'description': 'Sunflower Project for making your own oil',
            'images': ['http://lorempixel.com/400/200/animals', 'http://lorempixel.com/400/200/animals']
		}
    ],
	'display': function() {
		var PROJECTS_ID_SELECTOR = '#projects';
		var PROJECTS_ENTRY_LAST_CLASS_SELECTOR = '.project-entry:last';

		if (this.projects && this.projects.length > 0) {
			this.projects.forEach(function(project) {
				$(PROJECTS_ID_SELECTOR).append(HTMLprojectStart);

				$(PROJECTS_ENTRY_LAST_CLASS_SELECTOR).append(HTMLprojectTitle.replace(DATA_PLACEHOLDER, project.title));
				$(PROJECTS_ENTRY_LAST_CLASS_SELECTOR).append(HTMLprojectDates.replace(DATA_PLACEHOLDER, project.date));
				$(PROJECTS_ENTRY_LAST_CLASS_SELECTOR).append(HTMLprojectDescription.replace(DATA_PLACEHOLDER, project.description));

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