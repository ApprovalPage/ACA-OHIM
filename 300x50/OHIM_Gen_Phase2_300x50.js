(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SUBHEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191E4A").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(121.175,35.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191E4A").s().p("AgPA6QgIgEgGgFQgFgGgEgIQgDgHAAgJQAAgJADgHQAEgHAFgGQAGgGAIgDQAHgDAIAAQAJAAAGADQAGAFAEAFIAAgzIARAAIAAB3IgRAAIAAgMQgEAGgGAFQgGADgJAAQgIAAgHgDgAgLgDQgGADgEAGQgDAGAAAHQAAAIAEAFQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDADgGQADgGAAgHQAAgIgDgFQgDgGgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(114.525,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_2.setTransform(105.4393,32.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191E4A").s().p("AgXApIAAhPIAQAAIAAAJQAFgFAFgDQAFgDAIAAIAIABIgGARQgDgBgDAAQgGAAgEACQgEADgCAEQgDAFAAAFIAAAtg");
	this.shape_3.setTransform(98.35,32.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_4.setTransform(90.5393,32.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#191E4A").s().p("AgKAoIgdhPIASAAIAVA8IAWg8IASAAIgdBPg");
	this.shape_5.setTransform(81.625,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#191E4A").s().p("AgTAlQgKgGgFgKQgFgJAAgMQAAgIADgHQADgIAFgGQAGgFAIgEQAGgDAIAAQALAAAJAGQAJAFAFAKQAGAKAAAKQAAAJgEAIQgDAHgFAGQgGAGgHADQgHADgIAAQgKAAgJgFgAgLgVQgGAEgCAGQgDAFAAAGQAAAHADAGQADAGAFADQAFAEAGAAQAGAAAGgEQAFgDADgGQADgGAAgHQAAgGgDgGQgDgFgFgEQgGgDgGAAQgGAAgFADg");
	this.shape_6.setTransform(72.7,32.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191E4A").s().p("AgPAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAKAAAIAFQAJAEAFAIIgPAIQgDgEgFgCQgEgCgFAAQgGAAgFADQgFAEgDAGQgDAFAAAGQAAAHADAGQADAGAFADQAGAEAFAAQAFAAAEgDQAFgCADgDIAPAIQgFAHgJAFQgIAEgKAAQgKAAgJgFg");
	this.shape_7.setTransform(64.125,32.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#191E4A").s().p("AgTAlQgHgFgFgHQgEgHAAgJIAAgxIARAAIAAAtQAAAFACAEQADAFAEACQAFADAEAAQAFAAAFgDQAEgCADgFQACgEAAgFIAAgtIARAAIAABPIgQAAIgBgJQgEAFgGADQgGADgGAAQgJAAgHgEg");
	this.shape_8.setTransform(52.05,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191E4A").s().p("AgTAlQgKgGgFgKQgFgJAAgMQAAgIADgHQADgIAFgGQAGgFAHgEQAIgDAHAAQALAAAJAGQAJAFAFAKQAGAKAAAKQAAAJgEAIQgDAHgFAGQgGAGgGADQgIADgIAAQgKAAgJgFgAgLgVQgFAEgDAGQgDAFAAAGQAAAHADAGQADAGAFADQAGAEAFAAQAGAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgFgGgEQgFgDgGAAQgGAAgFADg");
	this.shape_9.setTransform(43.35,32.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191E4A").s().p("AgXA8IAPgoIgdhPIASAAIATA5IAUg5IASAAIgrB3g");
	this.shape_10.setTransform(34.425,34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#191E4A").s().p("AgJA0IAAg+IgNAAIAAgQIANAAIAAgZIAPAAIAAAZIARAAIAAAQIgRAAIAAA+g");
	this.shape_11.setTransform(23.425,31.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_12.setTransform(16.1393,32.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#191E4A").s().p("AgQA5QgIgDgGgGQgGgHgDgHIAPgHQACAFAEAEQADAEAFACQAEADAGAAQADgBAGgCIAIgDIAFgIQACgDABgFIAAgNQgFAFgGAFQgGADgIAAQgHAAgIgDQgHgEgGgFQgGgGgDgHQgDgHAAgJQAAgJADgHQADgIAGgGQAGgGAHgDQAIgDAHAAQAIAAAGADQAGAFAFAFIAAgLIAQAAIAABRQAAAIgEAIQgDAGgGAFQgFAFgJADQgHADgHAAQgJAAgHgEgAgLgpQgFAEgEAGQgDAGAAAHQAAAHADAGQAEAFAFADQAFAEAHAAQAGAAAFgEQAGgDACgFQADgGAAgHQAAgHgDgGQgCgGgGgEQgFgDgGAAQgHAAgFADg");
	this.shape_13.setTransform(6.6,34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#191E4A").s().p("AgUAlQgJgGgFgKQgFgJAAgMQAAgIADgHQADgIAFgGQAGgFAIgEQAGgDAIAAQALAAAJAGQAJAFAFAKQAGAKAAAKQAAAJgEAIQgDAHgFAGQgFAGgIADQgHADgIAAQgKAAgKgFgAgLgVQgGAEgDAGQgCAFAAAGQAAAHACAGQAEAGAFADQAFAEAGAAQAGAAAGgEQAFgDADgGQADgGAAgHQAAgGgDgGQgDgFgFgEQgGgDgGAAQgGAAgFADg");
	this.shape_14.setTransform(93.5,13.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#191E4A").s().p("AgJA0IAAg+IgNAAIAAgRIANAAIAAgZIAPAAIAAAZIARAAIAAARIgRAAIAAA+g");
	this.shape_15.setTransform(86.225,11.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_16.setTransform(75.1393,13.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#191E4A").s().p("AgXApIAAhPIARAAIAAAJQADgFAGgDQAFgDAHAAIAJABIgGARQgDgBgDAAQgFAAgFACQgDADgDAEQgDAFABAFIAAAtg");
	this.shape_17.setTransform(68.05,13.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_18.setTransform(60.2393,13.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#191E4A").s().p("AAUA8IAAguQgBgFgCgFQgCgEgFgCQgEgDgGAAQgEAAgEADQgFACgCAEQgDAFAAAFIAAAuIgRAAIAAh3IARAAIAAAxQAEgGAGgCQAGgDAGgBQAJAAAHAFQAHAFAFAGQAEAHAAAJIAAAyg");
	this.shape_19.setTransform(51.5,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_20.setTransform(38.7393,13.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#191E4A").s().p("AgYApIAAhPIARAAIAAAJQAFgFAEgDQAGgDAIAAIAJABIgHARQgDgBgEAAQgFAAgEACQgDADgDAEQgDAFAAAFIAAAtg");
	this.shape_21.setTransform(31.65,13.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#191E4A").s().p("AgKAVIAFgpIAQAAIgLApg");
	this.shape_22.setTransform(26.7,8.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_23.setTransform(20.8893,13.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#191E4A").s().p("AATA4IgThJIgSBJIgTAAIgdhvIARAAIAVBRIAVhRIAOAAIAVBRIAVhRIASAAIgdBvg");
	this.shape_24.setTransform(9.225,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUBHEAD, new cjs.Rectangle(0,0,157.5,42.4), null);


(lib.OHIM_Logoyellow_Englishai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// OHIM_Logo-yellow_English.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUA8QgagxgIhEIACgCIAjAAQAEA0AQAtIACAAQAOgnAEg6IAeAAIACACQgIBEgaAxg");
	this.shape.setTransform(337.975,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAuQgQgRAAgdQAAgdAQgQQAPgQAcAAQAdAAAPAQQAQAQAAAdQAAAdgQARQgQAQgcAAQgbAAgQgQgAgWAAQAAArAWAAQALAAAGgLQAGgLAAgVQAAgqgXAAQgWAAAAAqg");
	this.shape_1.setTransform(325.025,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAwQgVgQABgfQgBgdATgQQARgRAeAAQAWAAANAFIAAAYIgEAAQgIgKgTAAQghAAAAArQAAAUAJALQAHALAOAAIACAAIAAggIgLAAIAAgSIAuAAIAAA8IgCADQgTAGgUAAQgaAAgQgOg");
	this.shape_2.setTransform(311.75,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAPIgCgDIAAgYIACgCIAbAAIACACIAAAYIgCADg");
	this.shape_3.setTransform(303.3,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BYIAAivIB0AAIAAAbIhBAAIAAAqIA0AAIAAAbIg0AAIAAA0IBCAAIAAAbg");
	this.shape_4.setTransform(293.275,49.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBYIgNguQgEgOgIgFQgHgEgRAAIAABFIgzAAIAAivIA3AAQAbAAANABQAVADAMAJQARAMAAAYQAAARgKAMQgJAKgQAFIAAACQAUAHAIAXIARAuIAAAEgAgagGIALABQAeAAAAgcQAAgRgMgFQgHgFgWAAg");
	this.shape_5.setTransform(276.625,49.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBYIgEgqIgyAAIgFAqIgrAAIgDgCQAFgvANgtQANgwASghIA/AAQASAiANAvQAOAuAEAuIgDACgAgaATIAqAAQgIgogMgiIgCAAQgNAlgHAlg");
	this.shape_6.setTransform(257.3,49.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBDQgXgXAAgsQAAgrAXgXQAXgYAsAAQAbAAASAJIAAAiIgDAAQgOgPgWAAQgqAAAAA+QAAAfALAQQAKAQAVAAQAVAAAPgPIADAAIAAAiQgSAJgbAAQgrAAgYgYg");
	this.shape_7.setTransform(239.375,49.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBYIAAhPIg3AAIAABPIgzAAIAAivIAzAAIAABFIA3AAIAAhFIAzAAIAACvg");
	this.shape_8.setTransform(221.525,49.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBYIAAiUIgsAAIAAgbICLAAIAAAbIgsAAIAACUg");
	this.shape_9.setTransform(203.775,49.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BYIAAivIAzAAIAACUIA+AAIAAAbg");
	this.shape_10.setTransform(191.65,49.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBYIgFgqIgyAAIgEAqIgsAAIgCgCQAFgvANgtQANgwASghIA/AAQASAiAOAvQANAuAEAuIgCACgAgZATIApAAQgJgogMgiIgCAAQgMAlgGAlg");
	this.shape_11.setTransform(174.45,49.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6BYIAAivIB0AAIAAAbIhBAAIAAAqIA0AAIAAAbIg0AAIAAA0IBCAAIAAAbg");
	this.shape_12.setTransform(157.675,49.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBYIAAhPIg3AAIAABPIgzAAIAAivIAzAAIAABFIA3AAIAAhFIAzAAIAACvg");
	this.shape_13.setTransform(139.9,49.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBxIg7h9QgLgYgFgYIgBAAQACAZAAAXIAAB9IgtAAIAAjgIBQAAIA8B9QAKAUAFAaIACAAQgDgTAAgbIAAh9IAtAAIAADgg");
	this.shape_14.setTransform(262.5,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhRBWQgdgfAAg3QAAg3AcgdQAdgfA1AAQA2AAAdAfQAcAeAAA2QAAA3gdAfQgdAeg1AAQg0AAgdgegAgfg7QgLAVAAAmQAAAnAMAVQALAVATgBQAUABALgVQAMgVAAgnQAAgmgLgVQgMgUgUgBQgTABgMAUg");
	this.shape_15.setTransform(236.725,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag8BaQgmgeABg7QgBg2AjgfQAhgfA4AAQAoAAAZALIAAAsIgGAAQgHgJgPgFQgPgGgOAAQg/AAAABSQAAAmAQAVQAOATAbAAIAFAAIAAg7IgVAAIAAgjIBXAAIAABxIgGAGQgjALglAAQgyAAgfgag");
	this.shape_16.setTransform(211.25,23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBxIAAjgICTAAIAAAjIhSAAIAAA1IBCAAIAAAjIhCAAIAABBIBUAAIAAAkg");
	this.shape_17.setTransform(190.3,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdBxIgRg8QgFgSgKgGQgJgFgVAAIAABZIhBAAIAAjgIBFAAQAkAAAPABQAbAEAQAMQAWAPgBAfQAAAVgMAPQgLAOgVAGIAAACQAYAIALAeIAXA7IAAAGgAghgIIANABQAmAAABgjQAAgVgPgHQgKgGgbAAg");
	this.shape_18.setTransform(168.5,23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhRBWQgdgfgBg3QABg2AcgeQAdgfA1AAQA2AAAdAfQAcAeAAA2QAAA3gdAfQgdAeg1AAQg0AAgdgegAgfg7QgLAVAAAmQgBAnAMAVQAMAVATgBQAUABALgVQAMgVAAgnQAAgmgMgVQgKgUgVgBQgUABgLAUg");
	this.shape_19.setTransform(142.75,23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004E88").s().p("AlDEbIgBgBQgMgWgHgSQgQgsAAgoQABgmARgpQATgqAAgUQAIjFgBgOQgJg+ACgSQADgNAuAIQAxAJAJAgQAKAhANAKQAIAGAQAAQAIABAfgIQAjgJAPgBQAMgBArABQAkACAKgEQAKgDAYgLQAagLAagDIBVgHQA8gFAsADQAPAEAZAcQAVAYACAGQAAAIgmBdIgJAYQgDAOAGAJQAEAIAMAOQAKAOgHAWQgKAkAKDgg");
	this.shape_20.setTransform(35.9746,37.3108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004E88").s().p("AgUG2QgvgvhBgfQgmgShJgYIgogNQhJgZgjgjIB7AAIAFADIAmAMQBIAXAmARQBCAeAxAtQA0gvBDgfQAngRBKgYQAvgPAWgJIAJgEQAlgRAQgZQATgfABg3IAAnxIr8AAIAAA3Ig9AAIAAh1IN1AAIAAIvQAABFgaAsQgZArg3AbIgNAFQgXAKgzARQhJAWgoAUQhBAfgzAyIgVAVg");
	this.shape_21.setTransform(63.95,45.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF4A2").s().p("AhzE4QgmgRhIgXIgmgMIgFgDQgzgUgXgeQgdgmAAhAIgKlaIAAiQIL7AAIAAHxQAAA3gTAfQgQAZglARIgJAEQgWAJgwAPQhJAYgnARQhDAfg0AvQgxgthCgeg");
	this.shape_22.setTransform(63.975,44.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#192040").s().p("AzBFgQAkgqAAhNIAApJMAjoAAAQAxABAjAiQAjAjAAAxIAAHTQAAAxgjAjQgjAjgxgBg");
	this.shape_23.setTransform(233.175,35.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,91.9);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAEgEAEQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(114.1,44.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBLIgYgqIgQATIAAAXIgVAAIAAiVIAVAAIAABdIAkgrIAbAAIgiAoIAjA7g");
	this.shape_1.setTransform(107.275,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAzIAAg4QAAgHgDgGQgEgFgFgDQgFgDgHAAQgGAAgFADQgGADgDAFQgDAGAAAHIAAA4IgVAAIAAhiIAVAAIAAAKQAFgGAHgEQAIgDAIAAQALgBAJAGQAKAFAEAKQAGAIAAAMIAAA9g");
	this.shape_2.setTransform(96.5,39.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBEIAAhjIATAAIAABjgAgHgwQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_3.setTransform(88.6,38.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBLIAAg6QAAgGgDgGQgDgFgGgCQgFgEgHAAQgFAAgGAEQgGACgDAFQgDAGAAAGIAAA6IgVAAIAAiVIAVAAIAAA9QAFgHAIgDQAHgEAIAAQALAAAJAGQAKAFAEAJQAGAIAAAMIAAA+g");
	this.shape_4.setTransform(81.05,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_5.setTransform(71.9,38.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAuQgJgFgGgKQgFgJAAgLIAAg9IAVAAIAAA4QAAAHADAFQADAGAGADQAGADAFAAQAHAAAFgDQAFgDAEgGQADgFAAgHIAAg4IAVAAIAABjIgVAAIAAgLQgFAGgIAEQgHADgIAAQgLAAgJgFg");
	this.shape_6.setTransform(58.25,40.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgGgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAIgEQAJgFAKAAQAOAAALAIQALAHAHAMQAHAMAAANQAAALgEAKQgEAJgGAHQgIAIgIAEQgKAEgKAAQgNAAgLgHgAgOgaQgGAEgEAHQgEAIAAAHQAAAJAEAHQAEAIAGAEQAHAEAHAAQAIAAAHgEQAGgFAEgHQAEgHAAgJQAAgHgEgIQgDgHgIgEQgGgFgIAAQgHAAgHAFg");
	this.shape_7.setTransform(47.35,39.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBLIASgyIgkhjIAWAAIAYBHIAZhHIAWAAIg1CVg");
	this.shape_8.setTransform(36.225,42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYAzIAAg4QAAgHgDgGQgDgFgGgDQgFgDgHAAQgGAAgFADQgGADgDAFQgDAGAAAHIAAA4IgVAAIAAhiIAVAAIAAAKQAFgGAHgEQAIgDAIAAQALgBAJAGQAJAFAGAKQAFAIAAAMIAAA9g");
	this.shape_9.setTransform(20.6,39.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_10.setTransform(8.875,39.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBLIAAg6QAAgGgDgGQgDgFgGgCQgFgEgHAAQgFAAgGAEQgGACgDAFQgDAGAAAGIAAA6IgVAAIAAiVIAVAAIAAA9QAFgHAHgDQAIgEAIAAQALAAAJAGQAJAFAGAJQAFAIAAAMIAAA+g");
	this.shape_11.setTransform(-2.25,37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIAUAAIAAAgIAVAAIAAAVIgVAAIAABOg");
	this.shape_12.setTransform(-11.4,38.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_13.setTransform(-25.3625,39.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBLIAAiVIAUAAIAACVg");
	this.shape_14.setTransform(-33.15,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBIQgHgFgFgIIAAAPIgVAAIAAiVIAVAAIAABAQAFgHAHgFQAIgFAKAAQAOAAAMAHQAMAHAHAMQAHALAAAPQAAALgEAJQgEAKgHAHQgHAHgKAEQgJAEgLAAQgKAAgIgEgAgPgEQgGAEgEAHQgEAIAAAJQAAAJAEAHQAEAHAGAFQAHAEAIAAQAIAAAHgEQAIgFAEgHQAEgHAAgJQAAgJgEgIQgEgHgIgEQgHgEgIAAQgIAAgHAEg");
	this.shape_15.setTransform(-41.225,37.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_16.setTransform(-53.675,39.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBIQgKgEgHgHQgHgHgEgKQgEgJAAgLQAAgLAEgKQAEgIAHgHQAHgIAKgEQAJgEAKAAQALAAAIAFQAIAFAFAHIAAhAIAUAAIAACVIgUAAIAAgPQgFAIgIAFQgIAEgLAAQgKAAgJgEgAgOgDQgHADgFAHQgEAIAAAJQAAAJAEAHQAFAIAHAEQAHAEAIAAQAIAAAHgEQAHgEADgIQAEgHAAgJQAAgJgEgIQgEgHgGgDQgHgFgIAAQgIAAgHAFg");
	this.shape_17.setTransform(-65.925,37.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAzIAAhiIAUAAIAAAKQAFgGAHgEQAIgDAIAAIAMABIgIAVIgIgBQgHAAgGADQgEADgEAFQgDAGAAAHIAAA4g");
	this.shape_18.setTransform(-75,39.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAGgHAKgEQAIgFAKAAQAOAAALAIQAMAHAGAMQAHAMAAANQAAALgEAKQgEAJgGAHQgHAIgJAEQgKAEgKAAQgNAAgLgHgAgOgaQgHAEgDAHQgEAIAAAHQAAAJAEAHQAEAIAGAEQAHAEAHAAQAIAAAHgEQAGgFAFgHQADgHAAgJQAAgHgDgIQgFgHgHgEQgGgFgIAAQgHAAgHAFg");
	this.shape_19.setTransform(-84.85,39.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTBMIAAhOIgMAAIAAgVIAMAAIAAgWQAAgJAEgGQAEgHAHgEQAGgEAIAAQAGAAAGACQAFADAFAFIgPAOIgDgCIgEgBQgEAAgCACQgDADAAAEIAAAWIAcAAIAAAVIgcAAIAABOg");
	this.shape_20.setTransform(-93.825,37.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTBMIAAhOIgMAAIAAgVIAMAAIAAgWQAAgJAEgGQAEgHAHgEQAGgEAIAAQAGAAAGACQAFADAFAFIgPAOIgDgCIgEgBQgEAAgCACQgDADAAAEIAAAWIAcAAIAAAVIgcAAIAABOg");
	this.shape_21.setTransform(-100.875,37.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_22.setTransform(-110.575,39.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_23.setTransform(139.8375,15.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAzIAAhjIAVAAIAAALQAEgGAHgEQAIgDAIAAQAGgBAFACIgHAVIgIgCQgHABgGADQgEADgEAGQgCAFAAAHIAAA4g");
	this.shape_24.setTransform(131,15.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgGgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAIgEQAJgFAKAAQAOAAALAIQALAHAHAMQAHAMAAANQAAALgEAKQgEAJgGAHQgIAIgIAEQgKAEgKAAQgNAAgLgHgAgOgaQgGAEgEAHQgEAIAAAHQAAAJAEAHQAEAIAGAEQAHAEAHAAQAIAAAHgEQAGgFAEgHQAEgHAAgJQAAgHgEgIQgDgHgIgEQgGgFgIAAQgHAAgHAFg");
	this.shape_25.setTransform(121.15,15.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA6AzIAAg4QAAgGgDgGQgDgGgGgDQgFgDgHgBQgGABgGADQgFADgDAGQgDAFAAAHIAAA4IgUAAIAAg4QAAgHgDgFQgEgGgFgDQgGgDgGgBQgHABgFADQgGADgDAGQgDAGAAAGIAAA4IgVAAIAAhjIAVAAIAAALQAFgGAIgEQAHgDAJAAQALAAAJAFQAIAFAFAIQAFgIAJgFQAJgFALAAQALAAAJAFQAJAFAGAJQAFAKAAALIAAA9g");
	this.shape_26.setTransform(106.875,15.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAA1QgIgBgIgDQgHgCgGgFQgFgFgDgGIARgHIAFAFIAIAEIAIACQAFAAAEgCQAEgBACgDQADgDAAgDQAAgFgDgCIgHgEIgJgDQgJgCgIgEQgIgDgFgFQgFgHAAgIQAAgKAFgHQAFgHAJgEQAIgEAJAAQAMAAAKAFQAKAGAFAIIgQAKIgFgFIgHgEIgHgCIgJABQgEACgDADQgCADAAAEQAAAFADACIAIADIAIADQAJADAIAEQAIADAFAGQAEAGAAAIQAAAKgFAHQgGAHgJAEQgIADgJAAIgBAAg");
	this.shape_27.setTransform(88.675,15.9281);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBEIAAhjIAUAAIAABjgAgHgwQgDgDAAgFQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_28.setTransform(82.15,14.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_29.setTransform(69.5375,15.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAIgEQAJgFAKAAQAMAAAKAGQALAGAHAJIgSALQgFgFgFgDQgGgDgGAAQgHAAgHAFQgGAEgEAHQgEAIAAAHQAAAJAEAHQAEAHAGAFQAHAEAHAAQAGAAAGgDQAGgDAEgEIASAKQgHAJgLAGQgKAGgMAAQgNAAgLgHg");
	this.shape_30.setTransform(58.9,15.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAYAzIAAg4QAAgHgDgFQgDgGgGgDQgFgDgHgBQgGABgFADQgGADgDAGQgDAFAAAHIAAA4IgVAAIAAhjIAVAAIAAALQAFgGAHgEQAIgDAIAAQALAAAJAFQAJAFAGAJQAFAKAAALIAAA9g");
	this.shape_31.setTransform(48.5,15.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_32.setTransform(36.775,15.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdAzIAAhjIAUAAIAAALQAGgGAGgEQAIgDAIAAQAGgBAGACIgIAVIgIgCQgHABgFADQgFADgDAGQgEAFAAAHIAAA4g");
	this.shape_33.setTransform(27.7,15.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAuQgJgFgGgKQgFgJAAgLIAAg9IAVAAIAAA4QAAAHADAFQADAGAGADQAFADAGAAQAHAAAFgDQAFgDAEgGQADgFAAgHIAAg4IAVAAIAABjIgVAAIAAgLQgFAGgHAEQgIADgIAAQgLAAgJgFg");
	this.shape_34.setTransform(18.2,16.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAA1QgIgBgIgDQgHgCgGgFQgFgFgDgGIARgHIAFAFIAIAEIAIACQAFAAAEgCQAEgBACgDQADgDAAgDQAAgFgDgCIgHgEIgJgDQgJgCgIgEQgIgDgFgFQgFgHAAgIQAAgKAFgHQAFgHAJgEQAIgEAJAAQAMAAAKAFQAKAGAFAIIgQAKIgFgFIgHgEIgHgCIgJABQgEACgDADQgCADAAAEQAAAFADACIAIADIAIADQAJADAIAEQAIADAFAGQAEAGAAAIQAAAKgFAHQgGAHgJAEQgIADgJAAIgBAAg");
	this.shape_35.setTransform(8.575,15.9281);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAYAzIAAg4QAAgHgDgFQgEgGgFgDQgFgDgHgBQgGABgFADQgFADgEAGQgDAFAAAHIAAA4IgVAAIAAhjIAVAAIAAALQAFgGAIgEQAHgDAIAAQALAAAJAFQAKAFAEAJQAGAKAAALIAAA9g");
	this.shape_36.setTransform(-1.05,15.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJBEIAAhjIATAAIAABjgAgHgwQgDgDAAgFQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_37.setTransform(-8.95,14.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAYBLIAAg6QAAgGgDgGQgEgFgFgDQgFgDgHAAQgGAAgFADQgFADgEAFQgDAGAAAGIAAA6IgVAAIAAiVIAVAAIAAA9QAFgGAIgEQAHgEAIAAQALAAAJAFQAKAGAEAJQAGAIAAAMIAAA+g");
	this.shape_38.setTransform(-21.3,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_39.setTransform(-30.45,14.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJBLIAAiVIAUAAIAACVg");
	this.shape_40.setTransform(-36.25,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_41.setTransform(-44.525,15.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_42.setTransform(-55.9125,15.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAYBLIAAg6QAAgGgDgGQgDgFgGgDQgFgDgHAAQgGAAgFADQgFADgEAFQgDAGAAAGIAAA6IgVAAIAAiVIAVAAIAAA9QAFgGAHgEQAIgEAIAAQALAAAJAFQAJAGAGAJQAFAIAAAMIAAA+g");
	this.shape_43.setTransform(-66.8,13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVBIQgKgFgHgHQgHgIgEgJIATgJQADAGAEAFQAEAFAGADQAGACAGAAQAFAAAHgCQAFgCAFgDQAEgEADgEQACgFAAgGIAAgRQgEAIgIAEQgHAFgLAAQgJAAgKgEQgKgEgGgIQgHgHgFgIQgDgKAAgLQAAgLADgJQAFgKAHgHQAGgHAKgEQAKgEAJAAQALAAAHAEQAIAFAEAIIAAgPIAVAAIAABmQABAKgFAJQgFAJgGAGQgIAGgJAEQgKADgKAAQgKAAgKgEgAgOgzQgHAEgEAIQgEAHAAAJQAAAJAEAIQAEAGAHAEQAHAFAIAAQAIAAAGgFQAHgEADgHQAEgHAAgJQAAgJgEgHQgDgHgHgFQgGgEgIAAQgIAAgHAEg");
	this.shape_44.setTransform(-83.6,18.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAYAzIAAg4QAAgHgDgFQgEgGgFgDQgFgDgHgBQgGABgFADQgFADgEAGQgDAFAAAHIAAA4IgVAAIAAhjIAVAAIAAALQAFgGAIgEQAHgDAIAAQALAAAJAFQAKAFAEAJQAGAKAAALIAAA9g");
	this.shape_45.setTransform(-94.65,15.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJBEIAAhjIATAAIAABjgAgHgwQgDgDAAgFQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_46.setTransform(-102.55,14.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIAUAAIAAAgIAVAAIAAAVIgVAAIAABOg");
	this.shape_47.setTransform(-108.25,14.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_48.setTransform(-115.3,14.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_49.setTransform(-124.4625,15.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaBDQgNgFgJgKQgJgLgFgNQgGgNAAgPQAAgPAGgNQAFgNAKgKQAKgJAMgGQANgFAMgBQAQAAAOAIQAPAHAKAOIgSAKQgIgIgJgFQgKgFgKAAQgIAAgJAEQgJAEgHAHQgGAHgEAKQgEAJAAAKQAAALAEAJQAEAJAGAIQAHAHAJAEQAIAEAJAAQAIAAAHgCQAGgDAGgEQAGgFAEgGQAFgGACgIIgdAAIAAgSIA2AAQAAAPgFANQgGANgJAKQgKAKgMAGQgNAFgOAAQgNAAgNgFg");
	this.shape_50.setTransform(-137.7229,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(-152,0,304,52), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.OHIM_Logoyellow_Englishai("synched",0);
	this.instance.setTransform(49.35,12.8,0.278,0.278,0,0,0,177.6,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(0,0,98.7,25.6), null);


// stage content:
(lib.OHIM_Gen_Phase2_300x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,358];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_358 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(358).call(this.frame_358).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,24.9991,1,0.1968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// HEAD
	this.instance = new lib.HEAD();
	this.instance.setTransform(61,46.1,0.88,0.88,0,0,0,78.7,50.1);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({regX:78.8,x:219.45,alpha:1},18,cjs.Ease.quintOut).wait(63).to({alpha:0},13).to({_off:true},1).wait(122).to({_off:false,regX:78.7,x:61,alpha:0.1016},0).to({regX:78.8,x:219.45,alpha:1},18,cjs.Ease.quintOut).wait(73).to({alpha:0},13).to({_off:true},1).wait(19));

	// SUBHEAD
	this.instance_1 = new lib.SUBHEAD();
	this.instance_1.setTransform(-85.3,30,1,1,0,0,0,78.7,26);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({x:86.7},18,cjs.Ease.quintOut).wait(82).to({alpha:0},13).to({_off:true},1).wait(113).to({_off:false,x:-85.3,alpha:1},0).to({x:86.7},18,cjs.Ease.quintOut).wait(1));

	// LOGO
	this.instance_2 = new lib.LOGO();
	this.instance_2.setTransform(221.4,29.4,1.36,1.36,0,0,0,49.4,12.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).wait(100).to({alpha:0},13).to({_off:true},1).wait(113).to({_off:false,alpha:1},0).wait(19));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191E4A").s().p("A3bD/IAAn9MAu3AAAIAAH9g");
	this.shape_1.setTransform(150,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97E6EB").s().p("A3bD/IAAn9MAu3AAAIAAH9g");
	this.shape_2.setTransform(150,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},113).to({state:[{t:this.shape_1}]},114).to({state:[{t:this.shape_2}]},113).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-14,24.5,314.5,26.5);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 50,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;