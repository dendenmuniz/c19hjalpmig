# Group Project - C19 Hjälp mig

C19 Hjälp mig is an application to help us pass through this pandemic situation in a better way. 
During this time that we need social distancing and avoid go out, specially people more vulnerable - [group risk](https://www.who.int/news-room/q-a-detail/q-a-coronaviruses).
With this in mind, we create this website where people who need help can connect to people who can help. 
A person can help a neighbor or someone else doing groceries, going to the pharmacy, collect a pack in the post/box, or even take a pet to go for a walk.
Our intention is to connect people, further our values in society, and help go out this situation better then we got in.

## Our Values

* Cooperation - United we stand.
* Community - "We cannot live only for ourselves. A thousand fibers connect us with our fellow men." – Herman Melville
* Support - “Sometimes the only thing you could do for people was to be there.” – Terry Pratchett
* Shelter - “Everyone is in need of shelter from the storm, be the shelter, be kind.” – Luffina Lourduraj
* Kindness - “Sometimes it takes only one act of kindness and caring to change a person’s life.” – Jackie Chan

## Mission

Our website, *C-19 Hjälp mig*, exists to generate a greater sense of community, allowing people to be kind and support each other at a time when cooperation is so necessary, but also to allow those in need to remain in a shelter to be safe.

## MileStones

- [x] First Sprint  --- (Apr 27 - May 3)
- [x] Create the application structure
- [x] Build website 
- [x] Development guidelines
- [x] Site description
- [x] Login


- [x] Second Sprint --- (May 4 - May 10)
- [x] Sign Up 
- [x] User profile 
- [x] User Dashboard/Landing page 
- [x] View Help Request - By Requester  
- [x] Help Request View Pannel
- [x] Help Request Creation
- [x] View Help Request - All Request
 
- [x] Third Sprint --- (May 11 - May 17)
- [x] User Dashboard/Landing page - Improvments
- [x] FAQ
- [x] Gallery
- [x] Contact us
- [x] User profile - Bug fix
- [x] User Dashboard/Landing page - Improvments
- [x] Help request creation and view - Improvments 
- [x] Request picker (task) - Helper - Improvments  
 

- [x] Fourth Sprint + Demo planning --- (May 18 - May 20)
- [x] Chat system Part 1 - Send Message  BackEnd
- [x] Chat system Part 2 - Receive Message  BackEnd
- [x] Chat system Part 3 - Message List BackEnd
- [x] Chat system Part 4 - Front End
- [x] Polish and fix buds in Front End
- [x] Validation on Create/Edit request
- [x] Presentation ppt
- [x] Readme.md

- [x] Expo --- (May 20 - Afternoon)

## Getting Started

Instructions to run a local copy for development. Deployment notes show how to run the application as a standalone.

### Prerequisites

- Install `docker` and `docker-compose`.
- Install `Nodejs`.
- Install a proper IDE/Text editor fo Java and Javascript. IntelliJ community edition is recommended for Java development but doesn't work very well with JavaScript. It's therefore recommended to use VS Code or any other JavaScript-friendly IDE when working with frontend code.

### Starting the database

To start the database open the terminal and `cd` your way in to the project root folder. You can just simply run
`docker-compose up` to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.

### Starting the backend server

Open the root folder in IntelliJ and import all the gradle dependencies (this has to be done only once of course).
 
Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at `src/main/java/se/kth/sda6/skeleton/SkeletonApplication.java` to start the web server.

### Starting the frontend development server

To install the project dependencies for the frontend, open the terminal and make sure that the current directory is `frontend`. You can then run `npm install` to install all the dependencies needed for the project (This has to be done only once).

To start the frontend server run `npm start` from the `frontend` directory. Make sure that database and backend server are also running so that the frontend can interact with the backend.
When working on the frontend, open the `frontend` folder in your favorite Javascript IDE.  

## Built With

This web application is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:

<ul>
    <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
    <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
    <li><a href="https://reactjs.org">React</a></li>
    <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
    <li><a href="https://github.com/axios/axios">Axios</a></li>
</ul>

## Authors

Denise Muniz - @dendenmuniz
Gayathri Geetha - @gayathri_geetha
Mohamed Traore - @mohamed_traore
Nadeesani Navaratne - @nadeesani_navaratne
Sadat Hossain Chowdhury - @mohammad_sadat_hossain_chowdhury
Shakir Ahmed Zahedi -  @shakir_ahmed_zahedi