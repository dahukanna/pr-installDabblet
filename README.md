# Instructions for Reveal Version 2 slides of awesome!
Using [reveal.js](http://lab.hakim.se/reveal-js) from [GitHub](https://github.com/hakimel/reveal.js/) + IBM Theme from [Una Kravets - FED](https://w3-connections.ibm.com/profiles/html/profileView.do?userid=341972c0-8be8-1033-8f47-ac5876bd6d0c)
 
0. Install Node.js. 
1. Install Yeoman, Grunt, and Bower: 'npm install -g grunt bower yo'.
2. Install the Reveal generator and create a new project (https://www.npmjs.com/package/generator-reveal), following this documentation (https://github.com/slara/generator-reveal)
3. ~~Create a new project, following the documentation here - (https://github.com/slara/generator-reveal)~~ Don't need this step any more, as the directory and file structure has already been generated in this repository.
4. Run bower install 'git@git.design.ibm.com:uakravet/ibm-design-theme-for-reveal-js.git --save' to install the IBM Reveal theme.
5. ~~Copy 'bower_components/ibm-reveal/templates/_index.html' to your templates folder that was generated.~~ Don't need this step any more, as the file has already been copied to the template directory.
6. ~~Update the <title> in the copied '_index.md' file to the name of your presentation.~~ Don't need this step any more, as the file has already been updated.
7. Follow the Reveal Generator instructions for creating new slides, running locally, and deploying - (https://github.com/slara/generator-reveal).
8. To see changes in your browser as you edit, type the following in the Terminal within your project directory - '$ grunt serve'. Select 'CTRL + C' to exit.
9. To build a distribution directory, type the following in the Terminal within your project directory - '$ grunt dist'.