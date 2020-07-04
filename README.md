# Test App in Vue.js

Some notes about why I did this project like this:

### axios.js
The idea is to have any library for making requests to the Internet. Today is Axios but maybe later I can have FETCH or any other. One change is needed to this file.

### api.js
Some companies locate all the functions to the server in one file and that's what I did here. 
If a change is needed, I just need to modify this one file.
Other companies separate even more in different files, depending on what sections of the server they want to call. I can do both. I just selected this way of doing it because this is an example. It does not mean that I don't know how to work with any other file structure.

### App.vue
I placed the router here because that's what was asked. For other projects you can mix both the router call and HTML code. I did this for this example but it does not mean that I don't know how to work with both router and HTML code in a template.

### Home.vue
I wanted to show 2 things here:
1. I tried to show that I how to encapsulate as much as possible the functionality of any component (or function). In this case I use <Carousel /> to encapsulate functionality. Everything can be even more encapsulated? Of course. But this is just a demo. 
2. I tried to show that I avoid making HTTP calls from here. What I do is to call functions from api.js because if I leave calls to the server here and there, it's going to be very difficult to maintain in the future when any parameter or function name on the server changes.

##### Router
I call the router directly from here. But I know that some companies put all the routing calls in a file like I did for api.js. What I did here it doesn't mean that I don't know how to organize even better a unique router configuration file for the entire project. It's for this example only. Please if you want me to show how deep I can go with file separation, just let me know.

##### Lazy Loading
Talking about routing. I also know that with lazy loading we take advantages of speed and data loading on client side. Lazy loading help us to optimize loading times on client side. 

### Video.vue
Here I'm using the Carousel component (3rd party component). I know that this can be separated into another component which will only show the <img /> for each slide. I didn't do that because this is a simple example and because I guess that you want to see if I know how to Bind events back to the parent component and I think that with this you can see it. Please let me know if you still want to see how I separate even more this componentent into smaller parts. I can do that...

##### Video Player
All the functions to manipulate the Video Player are located inside common/video.js 
This is just one way to show how the code can be divided to specific functions.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```
NOTE: Test unit is running with --watch to reload automatically

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
