var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
//bio section
var bio = {
	"Name" : "Bola Harding",
	"Role" : "Full Stack Developer",
	"Contactinfo": [
	{
		"mobile" : "817/987-0490",
		"email" : "bamharding@hotmail.com",
		"github": "janedoe",
		"twitter": "@bhardingk",
		"locations": "Grand Prairie, TX"
	}
	],
	"Skills" : [
		"SQL", "ASP","Ajax", "jQuery","JavaScript", "Python", "HTML", "CSS", "VBA", "Microsoft Office + Access", "Organizational", "analytical",  "management skills "
		]

};
var focusarea = {
	"areafocus": [
	{
	"title": "WEB DEVELOPMENT",
	"years":"2 years plus",
	"description":"Report's Database and ASP to create and add new reports to Portal and giving necessary access to user."
	},
	{
	"title": "DATABASE DEVELOPMENT",
	"years":"10 years plus",
	"description":"Data Warehouse. Design and manage Access databases using visual basic to assemble, " + 
		"assess and analyze data according to the business environment; Troubleshoot and test system functionality;"
	},
	{
	"title": "DATA MANAGEMENT",
	"years":"10 years plus",
	"description":"Work on cross-functional teams in the evaluation, selection, and implementation of software products " +
	"that assisted in resolving business needs; Measure database boundaries by understanding cause and effect relationship " +
		" Research, organize, define and integrate data, people and system to improve or identity procedures as it relates to data;" 
	},
	{
	"title": "Data Analyst",
	"years":"10 years plus",
	"description":"Write and generate SQL queries in support of organization reporting needs. "+
	"Develops trend analysis, Interpret, manipulate, process, and analyze data according to management needs. Utilize different " +
	"data mining tools and produced adhoc reports to compose reports that anticipate problems and unusual situation"
 
	},	
	{
	"title": "TRAINING",
	"years":"7 years",
		"description":"	Collaborate with Information Technology department to develop and implement database training manuals " +
		"Train staff member on the functionality of the database; data standard processes to ensure data integrity"
 
	},
	{
	"title": "ADMINISTRATIVE",
	"years":"8 years",
	"description":"Supporting mid management and executives; Proficient with the MS Office Suite; Customer Service, Retail & call center"
 
	},
		]
}
//employment section
var employment = {
	"jobs": [
		{
			"Employer": "YP.com - formely part of AT & T",
			"Title":"Specialist, Sales Operations",
			"Dates": "2008 - Present",
			"Location": "Dallas, TX",
			"Description": "Report\'s Database and ASP to create and add new reports to Portal and giving necessary access to user " +
							"This site is a central location allowing for reports and historical to be viewed by vast majority thus " +
							"scaling back on emails and the interrupting the reports owner " +
							"Ensure the Online tools are properly functioning. Use ASP to change or fix any program errors, and enhance " +
							"the tool to increase richness of the data for analysis"
			
		
		},
		{
			"Employer": "AT& T /YP.com",
			"Title":"Sales Planning Analyst Manager",
			"Dates": "2006 -2008 - temp position",
			"Location": "Dallas, TX",
			"Description": "AT & T Corporate Data Warehouse	Design and manage Access databases using visual basic to assemble, assess and " + 
							"analyze data according to the business environment; Maintain existing databases; Write and generate SQL queries " +
							"in support of organization reporting needs Business Objects, OLSM, CSS understanding of Internet products and sales processes" 
		},

		{
			"Employer": "EDS -Kelly Services",
			"Title":"Accounting Assistant/Account Manager",
			"Dates":"2004 -2006  temp position",
			"Location": "Dallas, TX",
			"Description": "Manage customer account by  conducting account reviews; Process Invoices for payment; Research and reconcile customer " +
							"and fixed assets accounts; Review requests for internal services and assist in preparing  financial forecasts; " +
							"Run queries, and scripts;  upload data, assist help desk operators;  distribute mail"
		},
		{
			"Employer": "United Way Capital Area",
			"Title":"Database Administrator",
			"Dates": "2002 - 2003",
			"Location": "Austin, TX",
			"Description": "Developed and implement a database using VBA for access for tracking speaking engagement; Prepared and analyze campaign data " +
							"to identify & support fund-raising efforts by producing adhoc reports and utilizing  data mining tools; Create and " +
							"generate SQL queries in support of departmental reporting needs;	Managed the development of data standard processes " + 
							"to ensure data integrity; Develop and implement database training manual; Trained staff members"
		},
		{
			"Employer": "AllTemps 1",
			"Title":"Assistant Office Manager/Recruiter",
			"Dates": "2001 - 2002",
			"Location": "Austin, TX",
			"Description": "Assisted manager in operating a temporary service in job placement, Recruited, interviewed and assessed potential clients " +
							"Produced weekly reports and tabulated time-sheets to regional office on recruitment and placement status"
		},
		{
			"Employer": "Texas Association of School Board",
			"Title":"Data Analyst II",
			"Dates": "2000 - 2001",
			"Location": "Austin, TX",
			"Description": "Developed and managed Access databases using VBA for tracking insurance activities;Trained and determined user access " + 
							"to new and existing staff on functionality of the company-wide database;Composed report that identified mistakes which " +
							"empowered other to inquire or research validity of data"
		},
		{
			"Employer": "CITY OF AUSTIN",
			"Title":"Business Counselor Associate",
			"Dates": "1996 - 2000",
			"Location": "Austin, TX",
			"Description": "Developed and implemented VBA Access databases for tracking women/minority contract participation;Establish weekly baseline " +
							"data and trend analysis reports for manager to present to city council; Produced reports that monitored and  identified " + 
							"situations that had the potential  to escalate into contractual disputes; Collaborated with City\'s " +
							"Information System Department in testing and evaluating  a new city-wide database"
		}
	]
};

var  education = {
	"schools": [
		{
			"Name": "Austin Community College",
		 	"Location": "Austin, TX",
		 	"Major": "OST/CIS",
		 	"Degree":  "69++ hours",
		 	"Dates": "3 years"
		},
		{
			"Name": "Udacity",
			"Location": "Dallas, TX",
			"Major": "Frontend Web Developer",
			"Degree": "Nano-Degree",
			"Dates": "Current"
		}
	],
	"onlineClasses":[
	{
			"Name":"Intro to Computer Science -Python",
			"Title": "Certificate",
			"School": "Udacity",
			"Dates": "Sept 2014",
			"url":"https://www.udacity.com"

	}]
};

var projects = {
	"creations":[
	{
	"Title":  "Web Develpement",
	"Dates":   "2012",
	"Description":  "Online tool for  input their data using ASP and Java",
	"Image":["images/Portal.png",	"images/Portal1.png"
		]						
	},
	{
	"Title":  "DATABASE DEVELOPMENT",
	"Dates":   "2012",
	"Description":"Excel VBA to allow user to retreive and enter data from database",
	"Image": ["images/workbookVBA.png", "images/VBACODING.png"
	]
	}				
]
}

var name = bio.Name;
var FormattedName= HTMLheaderName.replace("%data%", name);

var role = bio.Role;
var FormattedRole = HTMLheaderRole.replace("%data%", role);

$("#title-title").prepend(FormattedRole);
$("#title-logo").prepend(FormattedName);

//Top Contact
function contactsdisplay(){
	for (contact in bio.Contactinfo) {

	var FormattedMobile=HTMLmobile.replace("%data%", bio.Contactinfo[contact].mobile);
	$("#topContacts").append(FormattedMobile);

	var FormattedEmail =HTMLemail.replace("%data%", bio.Contactinfo[contact].email);
	$("#topContacts").append(FormattedEmail);

	var FormattedLocation =HTMLlocation.replace("%data%", bio.Contactinfo[contact].locations);
	$("#topContacts").append(FormattedLocation);

	var formattedGithub = HTMLgithub.replace("%data%", bio.Contactinfo[contact].github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.Contactinfo[contact].twitter);
	$("#topContacts").append(formattedTwitter);
}
}
contactsdisplay();
//focus area loop 
function displayfocusarea(){
	for(areas in focusarea.areafocus){
	$("#talent").append(HTMLfocusareaStart);
var formattedfocusName = HTMLfocusareaTitle.replace("%data%",focusarea.areafocus[areas].title);
var formattedfocusDates = HTMLfocusareaDates.replace("%data%",focusarea.areafocus[areas].years);
 	$(".focusarea-entry:last").append(formattedfocusName + formattedfocusDates);
var formattedfocusDescription = HTMLfocusareaDescription.replace("%data%",focusarea.areafocus[areas].description);
 	$(".focusarea-entry:last").append(formattedfocusDescription); // end loops through school 

}
}
displayfocusarea();



if(bio.Skills.length>0) {
	$("#header-sub3").append(HTMLskillsStart);
for(var i =0; i<bio.Skills.length; i++)
{
var FormattedSkills = HTMLskills.replace("%data%", bio.Skills[i]);
$("#header-sub3").append(FormattedSkills);
}
}
// loops through education - school
function displayEducation(){
	for(school in education.schools){
	$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].Name);
 	$(".education-entry:last").append(formattedSchoolName);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].Degree);
 	$(".education-entry:last").append(formattedSchoolDegree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].Dates);
 	$(".education-entry:last").append(formattedSchoolDates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].Location);
 	$(".education-entry:last").append(formattedSchoolLocation);}
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].Major);
 	$(".education-entry:last").append(formattedSchoolMajor); // end loops through school 

}

displayEducation();
//loops through online school
function displayEducationOnline(){
	for(courses in education.onlineClasses){
		$("#educationonline").append(HTMLschoolStartOnline);
		var formattedonlineName = HTMLonlineName.replace("%data%",education.onlineClasses[courses].Name);
 		$(".educationonline-entry:last").append(formattedonlineName);
 		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[courses].School);
 		$(".educationonline-entry:last").append(formattedHTMLonlineSchool);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[courses].Title);
 		$(".educationonline-entry:last").append(formattedonlineTitle);
 		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineClasses[courses].Dates);
 		$(".educationonline-entry:last").append(formattedonlineDates);
		var formattedHTMLonlineURL= HTMLonlineURL.replace("%data%",education.onlineClasses[courses].url).replace('#',education.onlineClasses[courses].url);
 		$(".educationonline-entry:last").append(formattedHTMLonlineURL)
}  //end of loop on onlineschool
}

displayEducationOnline();

function displayWork(){
	for(job in employment.jobs){
	$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%",employment.jobs[job].Employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%",employment.jobs[job].Title);
 	$(".work-entry:last").append(formattedEmployer + formattedworkTitle);
var formattedworkDates = HTMLworkDates.replace("%data%",employment.jobs[job].Dates);
 	$(".work-entry:last").append(formattedworkDates);
var formattedworkLocation = HTMLworkLocation.replace("%data%",employment.jobs[job].Location);
	$(".work-entry:last").append(formattedworkLocation);
 var formattedworkDescription = HTMLworkDescription.replace("%data%",employment.jobs[job].Description);
$(".work-entry:last").append(formattedworkDescription); // loops through work
 }
}	


displayWork();




projects.display = function(){
	for(project in projects.creations){
	$("#projects").append(HTMLprojectStart);
var formattedprojectTitle =HTMLprojectTitle.replace("%data%", projects.creations[project].Title);
	$(".project-entry:last").append(formattedprojectTitle);
var formattedprojectDates =HTMLprojectDates.replace("%data%", projects.creations[project].Dates);
	$(".project-entry:last").append(formattedprojectDates);
var formattedprojectDescription =HTMLprojectDescription.replace("%data%", projects.creations[project].Description);
	$(".project-entry:last").append(formattedprojectDescription);
if (projects.creations[project].Image.length > 0){
	for (image in projects.creations[project].Image){
		var formattedprojectImage =HTMLprojectImage.replace("%data%", projects.creations[project].Image[image]);
	$(".project-entry:last").append(formattedprojectImage);

	var formattedprojectImage2 =HTMLprojectImage2.replace("%data%", projects.creations[project].Image[image]);
	$(".project-entry:last").append(formattedprojectImage2);

		}
	};
}	
}
projects.display();


$("#mapDiv").append(googleMap)