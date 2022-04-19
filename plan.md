#We're moving to GitHub!!!
# Every good website begins as an idea, and this is a genius one ~~so that I can claim that I've revised CS even though we only do Python~~ ~~to avoid revising for the second half of mocks~~ ~~to procrastinate on work~~ which will take a while to bring to life!

##### It's good for attempting to teach myself and practice HTML and CSS. I was planning on not using JS originally but discovered that my tickbox ideas would be virtually impossible without JS unfortunately. Now, to add that JS tag and expand my horizons! Ew, that sounds too cheesy.
---
### Aim: To make a GCSE calendar which people can use to find their exam dates and possibly links to their spec. Accessible for mobile as a stretch (though that will probably be coded into the design e.g. click instead of hover to see details)
### Plan: 
1) First, find out how to build a calendar. I can play around with the design later in CSS but I am a complete beginner at CSS and HTML. I do however have some useful *cheatsheets* for HTML and CSS ;) which means that I can try to have a go after rechecking those again.

2) Find out exam boards and subjects from people. I gather that History is Edexcel, so I'm pretty sure RS is AQA, since I remember 2 humanities being AQA and one being Edexcel.

3) Actually attempt to write it. It might not be perfect, but I will avoid asking the CS teachers for help just because I want to do this on my own, using my own wits to find solutions: rather than blindly copy-pasting code from online, *actually* understanding how that code works and why they've used it. It doesn't matter that I might not know the details, but basic understanding from reading stuff off w3schools or Mozilla docs is better than blind copying for me, and will be more helpful for when I want to debug this.

Also, as Tom Scott once said "Programming is not remembering exact words or syntax: it is breaking down a problem, working out how to solve it, and then fixing all the inevitable bugs in your solution." So, trying to teach myself code, while searching it up to find solutions to my problem is good. In fact, hearing that inspired me to finally properly begin this project, and got rid of any qualms I had about searching code or teaching myself these languages.

## Discoveries while making this/notes:

D : 15/2/22 12:23 - I remembered how to do HTML comments (with the help of google). You use <!- - --> (had to put a space after a dash so it actually showed which is interesting. I suspect it might be a situation like the header tags where it shows up when I'm coding it but not when viewing as an external person)
note: could try to make something for current date and make it active, but would only work when reaches may/june
- ### may starts sunday, june starts wednesday
- going to use sunday as first day because it works

~~WHY IS THE HEADING NOT CENTERED ON MOBILE?????~~
Now it is centered

Fixed side cramps, but not the vertical one. WHY ~~IS THE TABLE~~ ARE THE UPPY DOWNYS SO CRAMPED????? AAAAAAAAAHHHHHHHH!
not sure if i should make link and arrow to side for june or to do both may and june on same page just one above the other?

pro for same: can easily see all exams, can show all and hide all for both months. (2)

con for same: could be cramped, may be less smooth and take long to load. (2)

pro for different: smooth, what viewer would expect, less likely to be cramped, can be seperately loaded up for when needed.(4)

con for different: need to load two pages, I need to work on two repls (I think) or at least two different mini-projects, can't show all exams on same page with ease, **don't think my idea for tagging would work.** (4)

gonna do same because last one could be dealbreaker. having said that (ceci dit - see, I'm revising - memory retrieval!), might not work even on the same page.

~~details+tickbox to select exam board after subject?~~ started, but not set up to show/hide dates

calendar done, now onto the tickboxes

but wait **i should ~~probably~~ remember to shade out holidays clearly.** meh, low priority now, people know their holidays. perhaps leave as note at top - only done dates which aren't part of month, note at top which I might make sticky
tickboxes: use input, but find a way to select/deselect all in a month or all in both months, show/hide text



comment copied from my js file - I absolutely love the let way of declaring variables because it makes me feel like a mathematician beginning to write an elaborate proof for a conjecture previously unsolved: I will prove that 1=2; Let a = 2b... :) i forgot what i wanted to do now :(

to do so far:
- make tickboxes hide and show stuff on dates
- nest tickboxes in dropdown list and sticky it or maybe use border-left/right and flexbox/grid to make horizontal list and sticky that as one box as illustrated below with indents (though very abstractly)
- STICKY SOME LINKS TO SIDE!!! I WAS WONDERING HOW TO PUT SPEC LINKS AND IVE REALISED STICKYING SHOULD WORK!!! - revision, spec links and advanced info (freesciencelessons, hegarty and other stuff - primrose kitten? etc)
    -  | . . . . . . . . . |
    -  | . . . . . . . . . | 
- work out whether history students do History A or B (both of their papers are on the same dates and have similar titles but just so I can link the correct spec/advanced info (if any))
- make a show all/hide all perhaps - **low priority**
- highlight current date (hence why there is a js console output of two numbers, representing the month and date)

AQA = Science, English, Geography, RS
Edexcel = Languages, History, Maths, Music
OCR = CS and PE

how to put- boxes grid or flex into area, with date. fix to size of td?, colour boxes with colours eg bio green, chem red etc, reference id of bi for bio, ch for chem, etc and put id on boxes??? if boxes selected, toggle hidden areas, otherwise default to hidden

maajo and juun are scrapped for now, i'll work on making this mobile first and responsive with the tips and feedback i've gotten - bootstrap messed with my design but it looks streamlined
