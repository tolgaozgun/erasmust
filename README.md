<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tolgaozgun/erasmust">
    <!--<img src="images/logo.png" alt="Logo" width="80" height="80">-->
  </a>

  <h3 align="center">Erasmust</h3>

  <p align="center">
    Bilkent's Erasmus and Exchange application for incoming and outgoing students! 
    <br />
    <a href="https://github.com/tolgaozgun/erasmust"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tolgaozgun/erasmust">View Demo</a>
    ·
    <a href="https://github.com/tolgaozgun/erasmust/issues">Report Bug</a>
    ·
    <a href="https://github.com/tolgaozgun/erasmust/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
      </ul>
    </li>
    <!--<li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>-->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!---[![Product Name Screen Shot][product-screenshot]](https://example.com)-->


Erasmust is a project to simplify the Erasmus and Exchange application processes of Bilkent University students. 
This project aims to move every step of the application to a web environment that will make the process remarkably easier 
for everyone involved. 

Erasmust will basically consist of 2 different user logins. The first type of login will represent students, and the login will be assumed to be validated using SRS system. The other type of login will be assumed as AIRS login. AIRS login will apply to academic members, deans, rector, student affairs staff, and sysadmins. Users in the AIRS category will have bureaucratic roles according to their status. Bureaucratic processes such as approval and rejection of papers in the system will be carried out through these roles.

Applications to Erasmus/Exchange will be done from the system so that students' exchange points will be calculated and placements
will be made automatically. After exchange coordinators approve the placements, students will be able to view previously accepted
courses from the school that they have been placed to. They will also be able to create, fill and send pre-approval forms through the system.

Course and erasmus coordinators will be able to view the pre-approval forms and sign them. Staff will have a to-do list 
that will show all the applications they are responsible for and their current status. After the student returns and the host 
school send the transcript of the student, coordinators will be able to create course transfer forms and send to related people.

Perks of Erasmust:
* Minimize the number of mails sent during the application process.
* Eliminate forms printed on paper and digitalize every document.
* Reduce the time spent when manually pairing students with schools.


Must Have Features:
* User login with data fetched from SRS/AIRS
* Pre-approval forms filled through the system to be revived by the course coordinator. If a course has already been approved previously it is approved directly without review. 
* Course transfer and exemption forms.
* To-do list for admin users.
* Syllabus upload or fetch system so that the staff won't have to open multiple links for just one application.
* E-signature system that will sign the papers virtually.
   
Optional Featues:
* Erasmus and Exchange applications done from Erasmust so that total points of students can be calculated directly.
* Direct messaging feature so that students can get instant feedback from instructors/coordinator.
* Similar asked question suggestion to prevent repetitively asked questions.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Technologies

We are planning to use the following technologies to build Erasmust.

* [![React][React.js]][React-url]
* [![Spring][Spring.io]][Spring-url]
* [![Jenkins][Jenkins.io]][Jenkins-url]
* [![Docker][Docker.com]][Docker-url]
* [![Kubernetes][Kubernetes.io]][Kubernetes-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED 
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
<!--
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES 
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>-->



<!-- ROADMAP 
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>-->



<!-- CONTRIBUTING -->
## Contributing

As this is our school project, contributions are currently not accepted.

If you have a suggestion that would make this better, please submit a request on issues tab.
<!--
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Eylül Badem [@eylulbadem](https://github.com/eylulbadem)

Yahya Eren Demirel [@Yeahya35](https://github.com/Yeahya35)

Tolga Özgün [@tolgaozgun](https://github.com/tolgaozgun) - tolgaozgunn@gmail.com

Barış Yıldırım - [@BarisYildirim6](https://github.com/BarisYildirim6)

Nisa Yılmaz [@nisayilmaz](https://github.com/nisayilmaz) 

Emirhan Büyükkonuklu - [@ebuyukkonuklu](https://github.com/ebuyukkonuklu)

Project Link: [https://github.com/tolgaozgun/erasmust](https://github.com/tolgaozgun/erasmust)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Resources

These are the resources we have used or are planning to use during the development of the project.

* [Choose an Open Source License](https://choosealicense.com)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
* [Best-README-Template] (https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Spring.io]: https://img.shields.io/static/v1?style=for-the-badge&message=Spring&color=6DB33F&logo=Spring&logoColor=FFFFFF&label=
[Spring-url]: https://spring.io/
[Jenkins.io]: https://img.shields.io/static/v1?style=for-the-badge&message=Jenkins&color=D24939&logo=Jenkins&logoColor=FFFFFF&label=
[Jenkins-url]: https://jenkins.io/
[Docker.com]: https://img.shields.io/static/v1?style=for-the-badge&message=Docker&color=2496ED&logo=Docker&logoColor=FFFFFF&label=
[Docker-url]: https://www.docker.com/
[Kubernetes.io]: https://img.shields.io/static/v1?style=for-the-badge&message=Kubernetes&color=326CE5&logo=Kubernetes&logoColor=FFFFFF&label=
[Kubernetes-url]: https://kubernetes.io/