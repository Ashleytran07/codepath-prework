# Pre-work - *Memory Game*

Memory Game is a Light & Sound Memory game to apply for CodePath's FTL Program. 

Submitted by: Ashley Tran

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/generated-spiky-experience 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ x ] Created a progress bar in addition to timer countdown
- [ x ] Changed the background from solid to an animated ombre

## Video Walkthrough (GIF)

Win Game | player completes patterns without sacrificing more than 3 strikes:
![](https://i.imgur.com/Pja5N9E.gif)

Lose Game | player uses more than 3 strikes:
![](https://i.imgur.com/QecnbJd.gif)

Run Out of Time | player goes over 20 second countdown and loses game:
![](https://i.imgur.com/v5qBoVH.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Animated background:
    https://csshint.com/css-animated-backgrounds/ by Manuel Pinto
    
Countdown timer: 
    https://www.w3schools.com/jsref/met_win_setinterval.asp 
    
Progress Bar:  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval_progressbar 

Hidden Information: 
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden 
    
Frequencies: 
    http://www.musicmasterworks.com/WhereMathMeetsMusic.html
    
———HTML + CSS colors———
Text colors: https://www.w3schools.com/html/html_styles.asp 
Colors: https://www.rapidtables.com/web/css/css-color.html 
Text Formatting: https://www.w3schools.com/html/html_formatting.asp 
More Typography: https://sharkcoder.com/typography/fonts 
Text/Element Alignment: https://programmersportal.com/how-to-center-h1-in-css/ 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

There were two main challenges I faced when creating my submission: creating the timer countdown and ensuring that the restarting of the game worked like it was supposed to. Given that I had no prior experience with HTML, JavaScript, or CSS, I knew that I wanted to take a shot at implementing all of the optional features so that I could develop my skills.
One of those tasks was creating a countdown timer. The initial countdown took me a good chunk of time as I was still trying to figure out how the progress and timeLeft variable worked. However, I wanted to spice it up more—after reviewing the W3Schools source on the countdown, I saw that they demoed a progress bar. I wanted to implement it because I knew that it would be easier for users to see it while they were playing the game. The hardest part about implementing my time bar was making sure that the time aligned with my time bar. 
Secondly, I realized after playing the game many times that my start button did not reset after I finished one round of the game. I found that I was flipping the add and remove “hidden” to the wrong buttons. After thoroughly understanding what each part of the code meant, I was able to rearrange them to work like it is supposed to. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

As someone who does not have much expertise when it comes to working on programs with a team, my main question after completing my submission is: How do teams work together on bigger projects with so many variables? If my computer science courses have taught me anything, it is that code can be expressed in many different ways because everyone thinks uniquely. When I think about how to develop software in a company—on a larger scale, with more team members, I wonder how everyone’s functions and minds mesh together to perform and execute tasks conveniently together. With this question, I also want to consider how I can use the skills that I learned through this project and program to collaborate with others effectively and efficiently. Good communication is one of the most essential components of a successful project—I want to know how to develop these skills so that I can be better prepared for my career in software development. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

One of the last optional features was to attach an image to the buttons when clicked. As someone who strived to learn about these languages, I really looked forward to having a try at executing all of the features. I thought it would be cool to implement a ripple effect on the buttons but I ran out of time to do so. I would also like to create rounds so that players could take note of how long they’ve been playing. And with that, a leaderboard would be a very fun feature as it would allow for a bigger collection of users to get competitive with each other and see each other’s scores. I know that in order to do this, I would have to implement a screen at the start of every game to collect the name of our players and use a map to store their scores. The key would be their name and their value would be their score; we would then use this data to display it on the leaderboard after the end of every game. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/54e4b14c39fc4bf7ab5663b18fe1fd13)


## License

    Copyright Ashley Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
