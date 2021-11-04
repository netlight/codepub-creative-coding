# Creative coding with p5.riso
Codepub x Codeexcursion: workshop on creative coding

## Folder structure
This is a small overview of what you will find in this repository.

```
.
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

### Web-editor based development
To try out the different samples, simply paste them (from the `examples` folder directly into the online editor found here: https://editor.p5js.org/1wo2494ta1/sketches/gcOJsHdR2

## Resources

Read more about Riso here: https://antiboredom.github.io/p5.riso/   or check out the Riso repository on Github: https://github.com/antiboredom/p5.riso

