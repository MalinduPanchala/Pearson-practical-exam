# Pearson-practical-exam
Practical exam for Pearson internship

Before launch the project, go to the "Backend" folder and open the "exam" java project folder with preferred java IDE (I have tried both eclipse IDE and IntelliJ IDE),
and open the project as maven project if IDE prompts. Then you can run "ExamApplication.java" in src/main/java/ and inside com.practical.exam package and it will launch the API

If you prefer to use command line then, navigate to the project's root folder Backend/exam and run "maven install"/"maven clean install" to install maven dependencies.
Then run "mvn spring-boot:run" to launch the springboot application and it will show the springboot cli with exucution messages. 

From both ways, the application will launch in the port 8080 in "http://127.0.0.1"/"localhost" and the base url for the API is http://127.0.0.1:8080/rest/v2/countries/
And the H2 database can be accessed by "http://localhost:8080/h2". This database will be refreshed everytime the project restarts. So the saved data will be lost with relaunching 
the API

API can be directly accessed with postman API software and to use that, you can use "http://127.0.0.1:8080/rest/v2/countries/" url and this API have POST method to insert,
PUT method to update, DELETE method to delete, and GET methode to retrieve data. To update and delete API url needs to have the ID number of the record.
ex:-"http://127.0.0.1:8080/rest/v2/countries/1" this url will update the record with id: 1 with given data from PUT method and will delete the record with DELETE method

After that open Frontend folder in the root folder in a terminal and navigate inside the frontend/pearson-practical and then enter command "npm i" and run.
This will install all the neccessary node modules. After installing node modules then you can launch the app from running "ng serve --i" and this will launch the app 
on port 4200 in "http://127.0.0.1" or "localhost". For more information about laucnhing this angular app,
see https://github.com/MalinduPanchala/Pearson-practical-exam/tree/main/Frontend/pearson-practical

The app has a simple interface to manage data. There is a floating action button in the bottom-right to add a new Country. It will open up a dialog box and you can enter name 
in the input field and submit. Submitted data will be displayed in the table. Each record has update and delete buttons and you can perfom update and delete with them.
The data in the table can be sorted by the name by clicking "Name" in the header and can be viewed data in seperate pages and navigate between them from paginator bar.

A brief overview can be seen by clicking the info button on the top-right corner. These are all the oprations this app performs.

Thank you for the this oppertunity!
