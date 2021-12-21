// Sample code from matter.js site

myWidth = window.innerWidth;
myHeight = window.innerHeight;

var myCanvas = document.getElementById('canvas');

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    canvas: myCanvas,
    element: document.body,
    engine: engine,
    options: {
        width: myWidth,
        height: myHeight,
        background: 'transparent',
        wireframes: true,
        showAngleIndicator: false
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(600, 700, 810 , 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);