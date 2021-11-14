# Creative coding with p5.riso
Codepub x Codeexcursion: workshop on creative coding

## Folder structure
This is a small overview of what you will find in this repository.

```
.
├── assets/                 # Images you can load in -- you can also use a URL to any image on the internet 
├── dependencies/           # built and bundled files and index.html 
│           ├── p5.js       # The p5 library
│           └── p5.riso.js  # The riso library including colors
├── examples/               # dependencies 
│           ├── circles.js  # Riso circle art
│           ├── squares.js  # Riso squares art
│           └── x.js        # Have a look, maybe you find something you like
├── README.md               # this file
├── index.html              # the entry point to all your content
```

## Working with p5.riso
For more on the p5.riso library, check out [this website](https://antiboredom.github.io/p5.riso/#ex).

### Local development
To work with riso locally, all you need is included in this repository. Open a terminal and follow this guide to make it work:

**Dependencies**
Unless you already have a running version of node, please start by installing the right distribution for your system from this website https://nodejs.org/en/download/. If you are using a Windows computer, we highly recommend using Git Bash as your terminal for the below commands to work as expected, check it out here: https://git-scm.com/downloads. 

You can check this by running:
```
node -v
```

Download the source code:

```
git clone git@github.com:netlight/codepub-creative-coding.git
```

Navigate to the folder you just downloaded:

```
cd codepub-creative-coding
```

To run the code in your browser, you need to make sure that you have a local server (a server on running on your computer) available:
```
npm install -g http-server
``` 

Now you can start your server by typing:

```
http-server
```

Or use one of the options described by the p5 creators here: https://github.com/processing/p5.js/wiki/Local-server

To see your art, open a browser and type in 
```
localhost:8080
```
Now your content should be showin in your browser, great work! 

#### Troubleshooting
The riso library will keep on redrawing your riso objct on the canvas unless you specify other behviour. For your computer and the web editor this is very heavy both on your CPU and your memory. If your browser keeps freezing or you can see a big increase in CPU/Memory usage this is probably the reason. For most cases you want to create something static without the need for continuous redrawing, remember to include:
```
noLoop();
```
after you draw your riso object to the canvas. Check out the [`several-objects.js`](https://github.com/netlight/codepub-creative-coding/blob/workshop/work-in-progress/examples/several-objects.js#L73) file, for an example of how to include this. 

### Web-editor based development
To try out the different samples, simply paste them (from the `examples` folder directly into the online editor found here: https://editor.p5js.org/1wo2494ta1/sketches/gcOJsHdR2

## Resources

* Read more about Riso here: https://antiboredom.github.io/p5.riso/ 
* Check out the Riso repository on Github: https://github.com/antiboredom/p5.riso

### The Riso.p5.js cheat sheet:
_Use this when you are in doubt of how to use certain function_

![Cheat sheet](https://pbs.twimg.com/media/Dy9-5PWUcAEvI3s.jpg)
