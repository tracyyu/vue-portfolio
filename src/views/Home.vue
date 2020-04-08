<template>
  <div class="home-view-container">
    <HomeSection />
    <AboutMeSection />
    <PortfolioSection v-bind:projects="projects" />
    <DesignProcessSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '../components/HomeSection';
import AboutMeSection from '../components/AboutMeSection';
import PortfolioSection from '../components/PortfolioSection';
import DesignProcessSection from '../components/DesignProcessSection';
import ContactSection from '../components/ContactSection';

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutMeSection,
    PortfolioSection,
    DesignProcessSection,
    ContactSection
  },
  data () {
    return {
      projects: [{
        title: `Initiative Project`,
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/Initiative-project.png'],
        summary: `Dungeons and Dragons Game Tracker for Game Masters`,
        detailedDescription: `A web application designed for game masters of Dungeon and Dragons to track and manage current and previous initiatives for different campaigns. 
                              Its responsive and easy-to-use design allows beginning or advance game masters to make quick edits and customize existing players or monsters 
                              without disrupting game play. Built with React, CSS, and Firebase.`,
        githubLink: 'https://github.com/theinitiativeproject/The-Initiative-Project-public',
        category: 'frontend'
      },{
        title: `Rent N' Share`,
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/Rent-N-Share.png', 'https://portfolio-vue-ty.s3.amazonaws.com/FEC_Reviews_Condensed.png'],
        summary: `Fronetnd Web App of the Product Page of RenttheRunway`,
        detailedDescription: ` A frontend-focused, mockup web application for retail ecommerce RenttheRunway that allows clients to browse and rent one-time or monthly subscription of designer apparel.
                              A microservice architecutre app built using React, CSS modules, and Sass with images hosting on AWS.`,
        githubLink: 'https://github.com/tracyyu/rentTheRunwayReviewsService',
        category: 'frontend'
      },{
        title: 'Sharebnb Legacy',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/sharebnb-legacy.png'],
        summary: 'Sharebnb Calendar Component Databse Optimization.',
        detailedDescription: `Re-architected the legacy backend of a hospitality marketplace Microservice to support production-level traffic. Scope of work required a refactoring of certain frontend React components and life-cycle methods for fetching data. 
                              Overhauled the legacy NoSQL architecture improving query times by 100ms by eliminating the ORM layer opting for raw MYSQL with partition tables and indexing on listing ids.`,
        githubLink: 'https://github.com/sdctargaryen/Reservation-Checkout/',
        category: 'backend'
      },{
        title: 'Rose Edition',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/Rose-Edition.png'],
        summary: 'UCLA CS group project focus on optimally sorting data efficiently',
        detailedDescription: `A dual E-commerce/ Logistic web app prototype for company Rose Edition showcasing both side of their businesses and combining both platforms into one user friendly platform.`,
        githubLink: 'https://github.com/tracyyu/UCLA-CS-145-Cuisiner',
        category: 'frontend'
      },{
        title: 'Shutterscope',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/shutterscope-preview.png'],
        summary: 'Protoypte FrontPage WEb Design using AngularJS Framework to ',
        detailedDescription: `Freontend Web Design of a travel app focused on allowing users to document their travel photos 
                              and blog to share with other like-minded travelers looking for advice on popular travel destinations`,
        githubLink: 'https://github.com/tracyyu/UCLA-CS-145-Cuisiner',
        category: 'frontend'
      },{
        title: 'InspoDiary',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/inspodiary.png'],
        summary: 'Inspire everyday & Share it with someone.',
        detailedDescription: `A tumblr/yelp/instagram/travel social media site that have users journal their ideas, thoughts, tip, and hacks they come up with or from hearsay.
                                  Website incorporates CSS, HTML, Javascript, and AngularJS to create dynamic webpage to provide a much more fluid experience.`,
        githubLink: 'https://github.com/tracyyu/InspoDiary',
        category: 'web'
      },{
        title: 'Dr. Jie Zheng Lab',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/labdesign.png', 'https://portfolio-vue-ty.s3.amazonaws.com/lab-contact-page.png'],
        summary: 'A biomolecular lab focusing on drug discovery under Jules Stein Institute.',
        detailedDescription: `Dr. Jie Zheng Lab</a> is a website incorporating Javascript, SCSS and Bootstrap to showcase past and current research projects and updated lab documentations.
                                  The website is designed to be simple and easy to maneuver, so the focus is solely on the information displayed. This website could be used as template for future websites and all components are made in teh same style, and can be easily integrated for future projects.`,
        githubLink: 'http://htmlpreview.github.io/?https://github.com/tracyyu/Dr.Zheng-Lab-Design/blob/master/Jie_Zhang_Lab/index.html',
        category: 'web'
      },{
        title: 'FlyPath Simulator',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/flightpath.png'],
        summary: 'Flight tracker Demo for Teledyne to project flightpatterns.',
        detailedDescription: `A web application designed during my internship at Teledyne that incorporates "real-time" flight data recorded on their flight recorder and displays to into an application for their clients.
                                  The XML parser takes a JSON file and parse the information in python and displayed using HTML, CSS, and  Bootstrap on a Django framework. The application was expected to be presented at Teledyne's annual Fall Conference.`,
        githubLink: 'https://github.com/tracyyu/FlightSimulator',
        category: 'backend'
      },{
        title: 'Revolving Images',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/gallery.png'],
        summary: '3D sliding image displayer.',
        detailedDescription: `A mixture of CSS, HTML, and Javascript to play around with 3D divs to display images. A different take on an image gallery.
                                  Can click on left and right image to rotate the gallery instead of the buttons.`,
        githubLink: 'https://htmlpreview.github.io/?https://github.com/tracyyu/revolvingImages/blob/master/index.html',
        category: 'web'
      },{
        title: 'Cuisiner Database',
        images: ['https://portfolio-vue-ty.s3.amazonaws.com/kaggle.png', 'https://portfolio-vue-ty.s3.amazonaws.com/kaggle-preview.png'],
        summary: 'UCLA CS group project focus on optimally sorting data efficiently',
        detailedDescription: `'Project is based on the Kaggle Competition, what is cooking? Where we are given 
                              a database of ingredients and cuisines and must sort all the databse on
                              request of the user in the most efficient time and method. The project 
                              focused on the different concepts and database sorting algorithms to determine which method
                               would be the optimal choice in dealing with large amounts of data.`,
        githubLink: 'https://github.com/tracyyu/UCLA-CS-145-Cuisiner',
        category: 'backend'
      }]
    }
  },
  computed: {},
  methods: {}
}
</script>
