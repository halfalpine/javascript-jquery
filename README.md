# javascript-jquery
for The Odin Project

Project description can be found here:
http://www.theodinproject.com/web-development-101/javascript-and-jquery?ref=lnav



What made it work? Here is a list of stuff I had to google to solve the problem:
JS: appendTo() #container instead of container
CSS: Realized that #container was inheriting CSS properties from div; created .bricks to avoid conflicts within div elements
JS: Realized that .bricks is a class and not a function 
JS: Figured out that using 'this' necessary so that all .bricks aren't selected at once.
CSS: Realized that my inline-block div elements have white-space allotted to them; changed container font to 0px FTW
CSS: Fixed broken .bricks property disrupted due to an extraneous ) at the end of the previous category
JS: Got stuck with dynamic creation of the second button. Resolved by posting my first question ever on Stack Overflow. Learned how to pass the correct argument to the .after command. Now I better understand the importance of checking documentation.
JS: Rewrote the script so that mousing over the boxes changes the class of the divs, not the css itself.
JS: "Solved" the fact that hover wouldn't work after hitting the "reset" button by adding another hover function inside the "reset" function.

I also really learned the value of commenting out individual lines as part of the debuggin process!