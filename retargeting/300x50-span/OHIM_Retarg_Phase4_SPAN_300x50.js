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
	this.shape.graphics.f("#191E4A").s().p("AgFA3QgDgDAAgEQAAgEADgCQACgCADgBQAEABACACQADACAAAEQAAAEgDADQgCACgEAAQgDAAgCgCgAgGAVIAAhNIANAAIAABNg");
	this.shape.setTransform(115.375,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191E4A").s().p("AgTAlQgKgGgFgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAHgEQAIgDAHAAQALAAAJAGQAJAFAGAKQAFAKAAAKQAAAJgEAIQgDAHgFAGQgGAGgGADQgIADgIAAQgKAAgJgFgAgLgVQgFAEgDAGQgDAFgBAGQABAHADAGQADAGAFADQAGAEAFAAQAGAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgFgGgEQgFgDgGAAQgGAAgFADg");
	this.shape_1.setTransform(109.4,32.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E4A").s().p("AgYApIAAhPIARAAIAAAJQAFgFAEgDQAGgDAIAAIAJABIgHARQgDgBgEAAQgFAAgEACQgDADgDAEQgDAFAAAFIAAAtg");
	this.shape_2.setTransform(102.3,32.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_3.setTransform(94.4893,32.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#191E4A").s().p("AATApIAAgtQAAgFgCgFQgDgEgEgDQgEgCgGAAQgEAAgFACQgEADgDAEQgCAFAAAFIAAAtIgRAAIAAhPIARAAIAAAJQAEgFAGgDQAGgDAGAAQAJAAAIAEQAGAFAFAHQAEAHAAAJIAAAxg");
	this.shape_4.setTransform(85.75,32.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_5.setTransform(76.7893,32.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_6.setTransform(64.0893,32.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191E4A").s().p("AgPA6QgIgEgGgFQgFgGgEgIQgDgHAAgJQAAgJADgHQAEgHAFgGQAGgGAIgDQAHgDAIAAQAJAAAGADQAGAFAEAFIAAgzIARAAIAAB3IgRAAIAAgMQgEAGgGAFQgGADgJAAQgIAAgHgDgAgLgDQgGADgEAGQgDAGAAAHQAAAIAEAFQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDADgGQADgGAAgHQAAgIgDgFQgDgGgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_7.setTransform(54.475,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#191E4A").s().p("AgSA0QgJgFgFgJQgFgIAAgLIARAAQAAAGADAFQADAFAFACQAEADAFAAQAGAAAFgDQAFgCACgFQADgFAAgGQAAgFgCgFQgDgFgFgDQgFgCgIAAIgcAAIALg3IA2AAIAAAQIgoAAIgEAXIAJAAQALAAAIAEQAJAGAFAHQAFAIAAALQAAAIgDAHQgDAHgFAFQgFAFgHADQgHADgIAAQgJAAgJgFg");
	this.shape_8.setTransform(41.275,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191E4A").s().p("AgBA4IAAhfIgNAAIAEgQIAZAAIAABvg");
	this.shape_9.setTransform(34.2,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191E4A").s().p("AgIA8IAAh3IARAAIAAB3g");
	this.shape_10.setTransform(26.5,30.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_11.setTransform(20.2893,32.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#191E4A").s().p("AgPA6QgIgEgGgFQgFgGgEgIQgDgHAAgJQAAgJADgHQAEgHAFgGQAGgGAIgDQAHgDAIAAQAJAAAGADQAGAFAEAFIAAgzIARAAIAAB3IgRAAIAAgMQgEAGgGAFQgGADgJAAQgIAAgHgDgAgLgDQgGADgEAGQgDAGAAAHQAAAIAEAFQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDADgGQADgGAAgHQAAgIgDgFQgDgGgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_12.setTransform(10.675,30.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#191E4A").s().p("AAAAqIgMgDQgGgCgFgEQgEgDgDgFIAOgHQABADADACIAGADIAHABIAHgBIAFgDQACgCAAgDQAAgEgCgCIgGgDIgHgCIgOgFQgGgCgEgFQgEgEAAgHQAAgIAEgGQAEgFAHgDQAHgDAHAAQAJAAAIAEQAIAEAEAHIgNAIQgBgDgCgCIgGgDIgGgBIgHABQgDABgCACQgCADAAADQAAAEACABIAGADIAHADIAOAFQAGACAEAFQAEAFgBAGQAAAIgEAGQgFAFgHADQgGADgHAAIgBAAg");
	this.shape_13.setTransform(121.7528,13.1536);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_14.setTransform(113.8893,13.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#191E4A").s().p("AgJA0IAAg+IgNAAIAAgRIANAAIAAgZIAPAAIAAAZIARAAIAAARIgRAAIAAA+g");
	this.shape_15.setTransform(106.625,11.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#191E4A").s().p("AATApIAAgtQABgFgDgFQgDgEgEgDQgFgCgFAAQgEAAgFACQgEADgDAEQgCAFAAAFIAAAtIgRAAIAAhPIARAAIAAAJQAEgFAGgDQAGgDAGAAQAJAAAHAEQAIAFAEAHQAEAHAAAJIAAAxg");
	this.shape_16.setTransform(99.5,13.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#191E4A").s().p("AgPAnQgIgDgFgGQgGgGgEgIQgDgIAAgIQAAgIADgIQADgHAGgGQAGgGAHgDQAIgDAIAAQAIAAAHAEQAGAEAFAGIgBgMIARAAIAABPIgRAAIgBgLQgDAGgGAEQgGADgIAAQgIAAgIgDgAgLgVQgGADgEAGQgDAGAAAGQAAAIAEAFQADAGAGAEQAFADAGAAQAHAAAGgDQAFgEADgGQADgGAAgHQAAgGgDgGQgDgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_17.setTransform(90.175,13.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#191E4A").s().p("AgTAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAJAAAIAEQAIAEAFAGQAFAHADAJQADAIgBAJIg9AAQABAGADAEQADAEAFADQAEADAFAAQAGAAAFgDQAFgDADgGIARAEQgFALgJAHQgKAGgMAAQgKAAgJgFgAAXgGQgBgFgDgFQgEgFgEgDQgFgCgGAAQgFAAgEACQgFADgDAFQgEAFgBAFIAtAAIAAAAg");
	this.shape_18.setTransform(77.2893,13.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#191E4A").s().p("AAAAqIgMgDQgGgCgFgEQgEgDgDgFIAOgHQABADADACIAGADIAHABIAHgBIAFgDQACgCAAgDQAAgEgCgCIgGgDIgHgCIgOgFQgGgCgEgFQgEgEAAgHQAAgIAEgGQAEgFAHgDQAHgDAHAAQAJAAAIAEQAIAEAEAHIgNAIIgDgFIgGgDIgGgBIgHABQgDABgCACQgCADAAADQAAAEACABIAGADIAHADIAOAFQAGACAEAFQAEAFgBAGQAAAIgEAGQgFAFgHADQgGADgHAAIgBAAg");
	this.shape_19.setTransform(69.3528,13.1536);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#191E4A").s().p("AgPAnQgIgDgFgGQgGgGgEgIQgDgIAAgIQAAgIADgIQADgHAGgGQAGgGAHgDQAIgDAIAAQAIAAAHAEQAGAEAFAGIgBgMIARAAIAABPIgRAAIgBgLQgDAGgGAEQgGADgIAAQgIAAgIgDgAgLgVQgGADgEAGQgDAGAAAGQAAAIAEAFQADAGAGAEQAFADAGAAQAHAAAGgDQAFgEADgGQADgGAAgHQAAgGgDgGQgDgGgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_20.setTransform(61.125,13.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#191E4A").s().p("AgOA5QgHgDgDgHIAAAMIgRAAIAAh3IARAAIAAAzQADgFAHgEQAGgEAIgBQALABAKAFQAKAGAFAKQAGAIAAAMQAAAIgEAIQgCAIgHAFQgFAHgIADQgHADgJAAQgIAAgGgEgAgLgCQgGACgDAGQgDAGAAAHQAAAHADAGQADAGAGAEQAEADAHAAQAHAAAFgDQAGgEADgGQAEgGAAgHQAAgIgEgFQgDgGgGgCQgGgEgGAAQgHAAgEAEg");
	this.shape_21.setTransform(51.8,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#191E4A").s().p("AgNA4IAAhPIAQAAIAABPgAgIggIAGgXIAPAAIgLAXg");
	this.shape_22.setTransform(45.4,11.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#191E4A").s().p("AgXApIAAhPIARAAIAAAJQADgFAGgDQAGgDAGAAIAJABIgGARQgDgBgDAAQgFAAgFACQgDADgDAEQgCAFAAAFIAAAtg");
	this.shape_23.setTransform(40.5,13.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#191E4A").s().p("AgPAlQgJgGgGgKQgFgJAAgMQAAgIADgHQADgIAGgGQAFgFAIgEQAHgDAHAAQAKAAAIAFQAJAEAFAIIgPAIQgDgEgFgCQgEgCgFAAQgGAAgFADQgFAEgDAGQgDAFAAAGQAAAHADAGQADAGAFADQAGAEAFAAQAFAAAEgDQAFgCADgDIAPAIQgFAHgJAFQgIAEgKAAQgKAAgJgFg");
	this.shape_24.setTransform(33.025,13.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#191E4A").s().p("AAAAqIgMgDQgGgCgFgEQgEgDgDgFIAOgHQABADADACIAGADIAHABIAHgBIAFgDQACgCAAgDQAAgEgCgCIgGgDIgHgCIgOgFQgGgCgEgFQgEgEAAgHQAAgIAEgGQAEgFAHgDQAHgDAHAAQAJAAAIAEQAIAEAEAHIgNAIIgDgFIgGgDIgGgBIgHABQgDABgCACQgCADAAADQAAAEACABIAGADIAHADIAOAFQAGACAEAFQAEAFgBAGQAAAIgEAGQgFAFgHADQgGADgHAAIgBAAg");
	this.shape_25.setTransform(25.5028,13.1536);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#191E4A").s().p("AATApIAAgtQAAgFgCgFQgDgEgEgDQgEgCgGAAQgEAAgFACQgEADgDAEQgCAFAAAFIAAAtIgRAAIAAhPIARAAIAAAJQAEgFAGgDQAGgDAGAAQAJAAAIAEQAGAFAFAHQAEAHAAAJIAAAxg");
	this.shape_26.setTransform(17.8,13.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#191E4A").s().p("AgHA4IAAhvIAPAAIAABvg");
	this.shape_27.setTransform(11.225,11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#191E4A").s().p("AgGA5IAAhOIANAAIAABOgAgFgpQgDgDAAgDQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_28.setTransform(7.525,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUBHEAD, new cjs.Rectangle(4,0,144,42.4), null);


(lib.OHIMlogowyellowai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// OHIM logo w yellow.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA/QgbgzgIhIIACgCIAlAAQAFA7AQAqIABAAQAPgpAFg8IAeAAIACACQgHBHgcA0g");
	this.shape.setTransform(319.525,52.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAvQgQgQAAgfQAAgeAQgRQAQgQAdAAQAeAAAQAQQAQARAAAeQAAAfgQAQQgRARgdAAQgdAAgQgRgAgXAAQAAAWAGAMQAHALAKAAQALAAAGgLQAHgMAAgWQAAgsgYAAQgXAAAAAsg");
	this.shape_1.setTransform(306.025,52.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAyQgVgQAAghQAAgeATgRQASgSAfABQAXgBANAGIAAAZIgCAAQgKgLgTAAQgjAAAAAtQAAAWAJAMQAIAKAOAAIAEAAIAAgiIgNAAIAAgSIAxAAIAAA+IgEADQgRAHgWgBQgcAAgRgOg");
	this.shape_2.setTransform(292.15,52.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAQIgDgDIAAgZIADgDIAcAAIACADIAAAZIgCADg");
	this.shape_3.setTransform(282.775,57.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVB1Ig+iCQgKgVgHgdIgBAAQACAaAAAYIAACCIgvAAIAAjqIBVAAIA+CDQAJATAHAeIABAAQgCgUAAgdIAAiDIAuAAIAADqg");
	this.shape_4.setTransform(266.7,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBZQgfggAAg5QABg6AegfQAegfA3AAQA5AAAeAfQAdAfAAA6QABA5gfAgQgfAgg3AAQg2AAgfgggAggg+QgMAVAAApQAAApAMAWQAMAVAUAAQAVAAAMgVQAMgXAAgoQAAgpgMgVQgMgWgVABQgVgBgLAWg");
	this.shape_5.setTransform(239.75,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BfQgnggAAg+QAAg5AjggQAjggA7AAQAsAAAYALIAAAuIgGAAQgIgJgPgGQgPgFgPAAQhCAAAABVQAAAoARAWQAPAUAbAAIAGAAIAAg/IgXAAIAAgkIBbAAIAAB3IgGAFQgjAMgoAAQg0AAghgag");
	this.shape_6.setTransform(213.125,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOB1IAAjqICbAAIAAAlIhXAAIAAA4IBFAAIAAAkIhFAAIAABEIBZAAIAAAlg");
	this.shape_7.setTransform(191.525,47.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfB1IgSg+QgFgTgLgFQgKgGgWAAIAABcIhEAAIAAjqIBKAAQAkABARACQAbADARAMQAWARAAAgQAAAVgMAQQgNAPgVAGIAAADQAZAIAMAfIAXA+IAAAFgAgjgJIAPABQAnAAAAglQAAgVgOgIQgLgGgdAAg");
	this.shape_8.setTransform(168.55,47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhVBZQgfggAAg5QAAg6AfgfQAegfA3AAQA5AAAeAfQAdAfAAA6QAAA5geAgQgfAgg3AAQg3AAgegggAggg+QgMAVgBApQAAApANAWQAMAVAUAAQAVAAAMgVQAMgXAAgoQAAgpgMgVQgLgWgWABQgVgBgLAWg");
	this.shape_9.setTransform(142,47.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAUIgEgEIAAggIAEgDIAkAAIADADIAAAgIgDAEg");
	this.shape_10.setTransform(352.55,25.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIBQIAAifIBAAAQBRAAAABPQAAAngVAVQgVAUgnAAgAgZA2IAHAAQAWAAAKgLQAKgNAAgeQAAgdgKgNQgKgMgWAAIgHAAg");
	this.shape_11.setTransform(341.425,19.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBDQgUgQAAgfIAAhkIAvAAIAABtQAAANAHAHQAGAHALAAQALAAAHgHQAHgIAAgMIAAhtIAnAAIAABkQAAAdgTARQgSAPgeAAQgfAAgRgOg");
	this.shape_12.setTransform(323.475,19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBQIAAifIAuAAIAACFIA3AAIAAAag");
	this.shape_13.setTransform(309.775,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBQQgBgUgEgSIgtAAIgDAmIgoAAIgDgCQAFgrAMgoQAMgsAQgeIA5AAQAQAfANArQALApAFAqIgDACgAgWAQIAkAAQgHgjgLgeIgCAAQgKAegGAjg");
	this.shape_14.setTransform(294.2,19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BHIAAgjIAFAAQAQAVAXAAQAIAAAFgFQAFgEAAgIQAAgJgHgGQgCgDgQgHQgTgKgHgFQgNgMAAgTQAAgaATgNQAPgLAYAAQAdAAASAKIAAAfIgGAAQgNgQgVAAQgJAAgEAEQgGAFAAAHQAAAJAHAFIARAKQATAJAIAHQAOALAAATQAAAbgUAOQgQALgZAAQgdAAgTgLg");
	this.shape_15.setTransform(279.175,19.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BQIAAifIBpAAIAAAZIg6AAIAAAmIAvAAIAAAYIgvAAIAAAuIA8AAIAAAag");
	this.shape_16.setTransform(265.275,19.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBQIAAifIA/AAQBRAAAABPQAAAngUAVQgWAUgnAAgAgaA2IAIAAQAWAAAKgLQAKgNAAgeQAAgdgKgNQgKgMgWAAIgIAAg");
	this.shape_17.setTransform(249.35,19.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5A9QgVgWAAgnQAAgmAUgWQAVgVAlAAQAnAAAUAVQAUAWAAAmQAAAngUAWQgVAVgmAAQgkAAgVgVgAgVgqQgJAPAAAbQAAAcAJAPQAIAOANAAQAOAAAIgOQAJgPAAgcQAAg4gfAAQgNAAgIAOg");
	this.shape_18.setTransform(230.825,19.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhHBQIAAifIA/AAQBRAAAABPQAAAngWAVQgUAUgnAAgAgZA2IAHAAQAWAAAJgLQALgNAAgeQAAgdgLgNQgJgMgWAAIgHAAg");
	this.shape_19.setTransform(213.05,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWBQQgBgUgDgSIgsAAQgEAVgBARIgnAAIgDgCQAFgqAMgpQAMgsAQgeIA5AAQARAeALAsQAMApAFAqIgDACgAgXAQIAlAAQgHgjgMgeIgBAAQgLAhgGAgg");
	this.shape_20.setTransform(195.4,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIBQIAAifIA/AAQBSAAAABPQAAAngWAVQgUAUgoAAgAgZA2IAGAAQAWAAAKgLQALgNAAgeQAAgdgLgNQgJgMgXAAIgGAAg");
	this.shape_21.setTransform(178.65,19.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWBQIAAifIAtAAIAACfg");
	this.shape_22.setTransform(165.05,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvBDQgUgQAAgfIAAhkIAvAAIAABtQAAANAGAHQAHAHAKAAQAMAAAHgHQAGgIAAgMIAAhtIAoAAIAABkQAAAdgUARQgSAPgeAAQgeAAgRgOg");
	this.shape_23.setTransform(152.05,19.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA9QgWgWAAgnQAAgmAVgWQAVgVAoAAQAZAAAQAHIAAAgIgEAAQgMgOgUAAQgmAAAAA4QAAAcAKAPQAJAOATAAQATAAANgOIAEAAIAAAgQgQAHgZAAQgnAAgVgVg");
	this.shape_24.setTransform(135.875,19.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004E88").s().p("AlCEbIgBgBQgkg7AAhBQABglASgqQASgqABgTIAGjUIgEgmQgEgfACgKQADgOAuAIQAwAJAJAgQAKAhAOAKQAHAGAQABQAIAAAggIQAjgIAOgCQANgBAqACQAkABALgDQAJgDAZgMQAZgLAagCIBVgIQA8gFAsADQAQAFAYAbQAWAZABAGQAAADgQAqIgVA3QgIARgBAHQgEAOAGAJQAEAIANAOQAJAOgGAXQgLAjAKDgg");
	this.shape_25.setTransform(35.9754,37.3144);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004E88").s().p("AgVG2QgvgvhAgfQgmgShKgYQgQgEgXgJQhKgZgjgjIB8AAIArAPQBHAXAnARQBBAeAyAtQA1gvBDgfQAogSBHgWQA1gSARgHIAJgEQAkgRARgZQATgfAAg2IAAnyIr8AAIAAA3Ig8AAIAAh1IN1AAIAAIwQAABEgZAsQgaArg3AbIgMAFQgZALgzAQQhLAYglASQhCAggxAxIgWAVg");
	this.shape_26.setTransform(64,45.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF4A2").s().p("AhzE4QgngRhHgXIgrgPQgzgUgXgeQgdgmAAhAIgKlaIAAiQIL7AAIAAHyQAAA2gTAfQgRAZgkARIgJAEQgRAHg1ASQhHAWgoASQhDAfg1AvQgygthBgeg");
	this.shape_27.setTransform(64,44.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#192040").s().p("A0MFgQAkgqAAhNIAApJMAl+AAAQAxAAAjAkQAjAiAAAxIAAHTQAAAxgjAjQgjAjgxgBg");
	this.shape_28.setTransform(240.725,35.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,91.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAACADQAEADAAAEQAAAEgEAEQgCADgFAAQgEAAgDgDg");
	this.shape.setTransform(101.85,44.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgGgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAGgHAKgEQAJgFAJAAQAOAAALAIQAMAHAGAMQAHAMAAANQAAALgEAKQgEAJgGAHQgIAIgJAEQgJAEgKAAQgNAAgLgHgAgOgaQgHAEgEAHQgDAIAAAHQAAAJAEAHQAEAIAGAEQAHAEAHAAQAJAAAGgEQAGgFAFgHQADgHAAgJQAAgHgDgIQgFgHgHgEQgGgFgIAAQgHAAgHAFg");
	this.shape_1.setTransform(94.35,39.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBMIAAiVIAVAAIAAAPQAFgIAHgFQAIgEAKAAQALAAAJAEQAKAEAHAHQAHAHAEAKQAEAJAAALQAAALgEAKQgEAIgHAIQgHAHgKAEQgJAEgLAAQgKAAgIgFQgHgFgFgHIAABAgAgPgzQgGAFgEAHQgEAHAAAJQAAAJAEAIQAEAGAGAEQAHAFAIAAQAIAAAHgFQAIgEAEgGQAEgIAAgJQAAgJgEgHQgEgHgIgFQgHgEgIAAQgIAAgHAEg");
	this.shape_2.setTransform(82.925,42.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA6AzIAAg4QAAgGgDgGQgDgGgGgDQgFgDgHAAQgGAAgGADQgFADgDAFQgDAGAAAHIAAA4IgUAAIAAg4QAAgHgDgGQgEgFgFgDQgGgDgGAAQgHAAgFADQgGADgDAGQgDAGAAAGIAAA4IgVAAIAAhiIAVAAIAAAKQAFgGAIgEQAHgDAJAAQALgBAJAGQAIAFAFAJQAFgJAJgFQAJgGALABQALgBAJAGQAJAFAGAKQAFAIAAAMIAAA9g");
	this.shape_3.setTransform(67.825,39.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_4.setTransform(53.1875,39.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBEIAAhjIATAAIAABjgAgHgwQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_5.setTransform(45.4,38.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_6.setTransform(39.7,38.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_7.setTransform(25.275,39.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBDQgJgEgIgHQgHgIgEgJQgEgKAAgLQAAgLAEgIQAEgKAHgHQAHgHAJgEQAKgEAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgPQgFAIgHAFQgIAEgKAAQgKAAgKgEgAgOgIQgIAEgEAGQgEAIAAAJQAAAJAEAHQAFAIAHAEQAHAEAIAAQAIAAAHgEQAHgEADgIQAEgHAAgJQAAgJgEgIQgEgGgGgEQgHgFgIAAQgIAAgHAFgAgCgpIAHgdIAVAAIgPAdg");
	this.shape_8.setTransform(8.625,38.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_9.setTransform(-0.65,38.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAA1QgIgBgIgDQgHgCgGgFQgFgFgDgGIARgHIAFAFIAIAEIAIACQAFAAAEgCQAEgBACgDQADgDAAgDQAAgFgDgCIgHgEIgJgDQgJgCgIgEQgIgDgFgFQgFgHAAgIQAAgKAFgHQAFgHAJgEQAIgEAJAAQAMAAAKAFQAKAGAFAIIgQAKIgFgFIgHgEIgHgCIgJABQgEACgDADQgCADAAAEQAAAFADACIAIADIAIADQAJADAIAEQAIADAFAGQAEAGAAAIQAAAKgFAHQgGAHgJAEQgIADgJAAIgBAAg");
	this.shape_10.setTransform(-8.575,39.9281);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_11.setTransform(-18.4625,39.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_12.setTransform(-34.875,39.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBGIAAhjIAUAAIAABjgAgLgoIAIgdIAUAAIgPAdg");
	this.shape_13.setTransform(-42.25,38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAyIglhjIAWAAIAbBLIAchLIAWAAIglBjg");
	this.shape_14.setTransform(-50.725,40);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_15.setTransform(-62.325,39.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTBIQgKgEgHgHQgHgHgEgKQgEgJAAgLQAAgLAEgKQAEgIAHgHQAHgIAKgEQAJgEAKAAQALAAAIAFQAIAFAFAHIAAhAIAUAAIAACVIgUAAIAAgPQgFAIgIAFQgIAEgLAAQgKAAgJgEgAgOgDQgHADgFAHQgEAIAAAJQAAAJAEAHQAFAIAHAEQAHAEAIAAQAIAAAHgEQAHgEADgIQAEgHAAgJQAAgJgEgIQgEgHgGgDQgHgFgIAAQgIAAgHAFg");
	this.shape_16.setTransform(-74.575,37.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgGgMQgHgMAAgPQAAgKAEgJQAEgKAGgHQAIgHAJgEQAIgFAKAAQAOAAALAIQAMAHAGAMQAHAMAAANQAAALgEAKQgEAJgGAHQgIAIgJAEQgJAEgKAAQgNAAgLgHgAgOgaQgHAEgEAHQgDAIAAAHQAAAJAEAHQAEAIAGAEQAHAEAHAAQAJAAAGgEQAGgFAFgHQADgHAAgJQAAgHgDgIQgFgHgGgEQgHgFgIAAQgHAAgHAFg");
	this.shape_17.setTransform(-86,39.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBGIAAh2IgsAAIAAgVIBtAAIAAAVIgtAAIAAB2g");
	this.shape_18.setTransform(-97.85,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHBEQgDgDAAgFQAAgEADgDQADgEAEAAQAEAAADAEQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDgAgIAbIAAhhIARAAIAABhg");
	this.shape_19.setTransform(72.25,14.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTBIQgKgEgHgHQgHgHgEgKQgEgJAAgLQAAgLAEgKQAEgIAHgHQAHgIAKgEQAJgEAKAAQALAAAIAFQAIAFAFAHIAAhAIAUAAIAACVIgUAAIAAgPQgFAIgIAFQgIAEgLAAQgKAAgJgEgAgOgDQgHADgFAHQgEAIAAAJQAAAJAEAHQAFAIAHAEQAHAEAIAAQAIAAAHgEQAHgEADgIQAEgHAAgJQAAgJgEgIQgEgHgGgDQgHgFgIAAQgIAAgHAFg");
	this.shape_20.setTransform(63.925,13.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAuQgJgFgGgKQgFgJAAgLIAAg9IAVAAIAAA4QAAAHADAFQADAGAGADQAFADAGAAQAHAAAFgDQAFgDAEgGQADgFAAgHIAAg4IAVAAIAABjIgVAAIAAgLQgFAGgIAEQgHADgIAAQgLAAgJgFg");
	this.shape_21.setTransform(52.85,16.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKBLIAAiVIAVAAIAACVg");
	this.shape_22.setTransform(45.35,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_23.setTransform(37.075,15.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAA1QgIgBgIgDQgHgCgGgFQgFgFgDgGIARgHIAFAFIAIAEIAIACQAFAAAEgCQAEgBACgDQADgDAAgDQAAgFgDgCIgHgEIgJgDQgJgCgIgEQgIgDgFgFQgFgHAAgIQAAgKAFgHQAFgHAJgEQAIgEAJAAQAMAAAKAFQAKAGAFAIIgQAKIgFgFIgHgEIgHgCIgJABQgEACgDADQgCADAAAEQAAAFADACIAIADIAIADQAJADAIAEQAIADAFAGQAEAGAAAIQAAAKgFAHQgGAHgJAEQgIADgJAAIgBAAg");
	this.shape_24.setTransform(26.925,15.9281);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAuQgJgFgFgKQgGgJAAgLIAAg9IAVAAIAAA4QAAAHADAFQADAGAGADQAGADAFAAQAGAAAGgDQAGgDADgGQADgFAAgHIAAg4IAVAAIAABjIgVAAIAAgLQgFAGgIAEQgHADgIAAQgLAAgJgFg");
	this.shape_25.setTransform(12.55,16.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAA1QgIgBgIgDQgHgCgGgFQgFgFgDgGIARgHIAFAFIAIAEIAIACQAFAAAEgCQAEgBACgDQADgDAAgDQAAgFgDgCIgHgEIgJgDQgJgCgIgEQgIgDgFgFQgFgHAAgIQAAgKAFgHQAFgHAJgEQAIgEAJAAQAMAAAKAFQAKAGAFAIIgQAKIgFgFIgHgEIgHgCIgJABQgEACgDADQgCADAAAEQAAAFADACIAIADIAIADQAJADAIAEQAIADAFAGQAEAGAAAIQAAAKgFAHQgGAHgJAEQgIADgJAAIgBAAg");
	this.shape_26.setTransform(2.925,15.9281);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgIgIQgHgHgEgKQgEgKAAgKQAAgKAEgKQAEgJAHgHQAHgHAJgEQAKgFAKAAQAKAAAJAFQAIAFAFAIIAAgPIAUAAIAABjIgVAAIAAgOQgFAHgHAFQgIAFgKAAQgKAAgKgEgAgOgbQgIAEgEAIQgEAHAAAIQAAAJAEAIQAFAHAHAEQAHAFAIAAQAIAAAHgFQAHgEADgHQAEgIAAgJQAAgIgEgHQgEgIgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_27.setTransform(-12.225,15.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVBIQAHAAAEgCQAFgDADgFQACgFAAgGIAAhrIAVAAIAABrQAAALgGAKQgGAKgJAFQgJAGgMAAgAADhJQgDgDAAgFQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFQAAAFgEADQgDADgEAAQgFAAgDgDg");
	this.shape_28.setTransform(-21.35,16.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgHgMQgHgMAAgPQAAgKAEgJQAEgKAHgHQAHgHAJgEQAJgFAJAAQAMAAAJAFQAKAFAHAIQAHAJADALQADAKgBAMIhMAAQABAGAEAGQADAGAGADQAGADAGAAQAIAAAGgEQAGgEAEgGIAVAFQgGANgMAIQgMAJgPAAQgNAAgLgHgAAdgHQgBgIgEgFQgEgGgHgEQgGgDgHAAQgGAAgGADQgGAEgEAFQgEAGgBAIIA4AAIAAAAg");
	this.shape_29.setTransform(-28.3125,15.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMBCIAAhOIgQAAIAAgVIAQAAIAAggIATAAIABAgIAVAAIAAAVIgVAAIgBBOg");
	this.shape_30.setTransform(-37.35,14.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgGgMQgHgMAAgPQAAgKAEgJQAEgKAGgHQAHgHAJgEQAKgFAJAAQAOAAALAIQALAHAHAMQAHAMAAANQAAALgEAKQgEAJgHAHQgGAIgKAEQgIAEgLAAQgNAAgLgHgAgOgaQgGAEgFAHQgDAIAAAHQAAAJAEAHQAEAIAHAEQAGAEAHAAQAIAAAHgEQAHgFADgHQAEgHAAgJQAAgHgEgIQgEgHgGgEQgHgFgIAAQgHAAgHAFg");
	this.shape_31.setTransform(-46.55,15.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAzIAAhjIAVAAIAAALQAEgGAHgEQAHgDAJAAQAGgBAFACIgIAVIgHgCQgHABgGADQgEADgEAGQgCAFAAAHIAAA4g");
	this.shape_32.setTransform(-55.4,15.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIAvAAQALAAAJAGQAKAFAFAKQAFAJAAAMQAAAMgFAJQgGAIgJAGQgJAGgLAAIgaAAIAAA4gAgWgHIAYAAQAGAAAFgCQAFgEADgFQADgEAAgGQAAgHgDgFQgDgFgFgDQgFgDgGAAIgYAAg");
	this.shape_33.setTransform(-64.875,14);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIBHIAAhhIARAAIAABhgAgHg0QgDgDAAgEQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAQgDAAgEgEg");
	this.shape_34.setTransform(-72.6,17.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.instance = new lib.OHIMlogowyellowai("synched",0);
	this.instance.setTransform(48.25,12.8,0.278,0.278,0,0,0,177.6,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-1.1,0,102.89999999999999,25.6), null);


// stage content:
(lib.OHIM_Retarg_Phase4_SPAN_300x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2.setTransform(221.35,29.35,1.29,1.29,0,0,0,49.4,12.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).wait(100).to({scaleX:1.36,scaleY:1.36,x:221.4,y:29.4},0).to({alpha:0},13).to({_off:true},1).wait(113).to({_off:false,alpha:1},0).wait(19));

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
p.nominalBounds = new cjs.Rectangle(-10,24.5,310.5,26.5);
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