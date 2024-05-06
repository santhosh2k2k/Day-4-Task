const resume = {
    "basicInfo": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "workExperience": [
      { "company": "Cognizant", "position": "Developer" },
      { "company": "Amazon", "position": "Senior Developer" }
    ],
    "skills": ["JavaScript", "React", "Node.js"]
  };
  
  // Using a for loop to iterate over an array
  for (let i = 0; i < resume.workExperience.length; i++) {
    console.log(resume.workExperience[i].company);
  }
  
  // Using for...in to iterate over the properties of an object
  for (let key in resume.basicInfo) {
    console.log(`${key}: ${resume.basicInfo[key]}`);
  }
  
  // Using for...of to iterate over the values of an iterable (like an array)
  for (let skill of resume.skills) {
    console.log(skill);
  }
  
  // Using forEach to iterate over an array
  resume.skills.forEach(skill => {
    console.log(skill);
  });