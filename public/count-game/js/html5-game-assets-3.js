(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape.setTransform(48.3,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgBQgFgCgMgBIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIAMQAHALAAAQQAAASgLANQgLAMgXADQALAHAIAIQAHAHAMAVIAVAhgAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgFgIgBIgYAAIgbAAg");
	this.shape_1.setTransform(33.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAAWASIgWg+IgYA+IAuAAg");
	this.shape_2.setTransform(15,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape_3.setTransform(-1,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwBKQgSgPgDgdIAigDQADARAJAIQAKAIAPAAQAQAAAJgIQAIgHAAgJQAAgGgEgEQgDgFgJgDIgagHQgcgHgMgJQgPgPAAgUQgBgNAIgMQAIgLAOgGQAOgGATAAQAgAAAQAOQAQAOABAYIgjACQgCgOgHgFQgHgGgOAAQgQAAgIAGQgGAEAAAHQABAGAFAEQAHAGAXAGQAaAGAMAGQAMAGAHAKQAHALAAARQAAAOgIANQgJANgPAHQgOAGgXAAQgfAAgSgPg");
	this.shape_4.setTransform(-16.4,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhABWIAAirIB+AAIAAAeIhcAAIAAAmIBWAAIAAAbIhWAAIAAAvIBfAAIAAAdg");
	this.shape_5.setTransform(-32,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgBQgFgCgMgBIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIAMQAHALAAAQQAAASgLANQgLAMgXADQALAHAIAIQAHAHAMAVIAVAhgAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgFgIgBIgYAAIgbAAg");
	this.shape_6.setTransform(-48.1,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AuDEsIAApXIcHAAIAAJXg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AuDEsIAApXIcHAAIAAJXg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape_9.setTransform(48.3,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgBQgFgCgMgBIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIAMQAHALAAAQQAAASgLANQgLAMgXADQALAHAIAIQAHAHAMAVIAVAhgAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgFgIgBIgYAAIgbAAg");
	this.shape_10.setTransform(33.1,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAAWASIgWg+IgYA+IAuAAg");
	this.shape_11.setTransform(15,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape_12.setTransform(-1,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBKQgSgPgDgdIAigDQADARAJAIQAKAIAPAAQAQAAAJgIQAIgHAAgJQAAgGgEgEQgDgFgJgDIgagHQgcgHgMgJQgPgPAAgUQgBgNAIgMQAIgLAOgGQAOgGATAAQAgAAAQAOQAQAOABAYIgjACQgCgOgHgFQgHgGgOAAQgQAAgIAGQgGAEAAAHQABAGAFAEQAHAGAXAGQAaAGAMAGQAMAGAHAKQAHALAAARQAAAOgIANQgJANgPAHQgOAGgXAAQgfAAgSgPg");
	this.shape_13.setTransform(-16.4,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABWIAAirIB+AAIAAAeIhcAAIAAAmIBWAAIAAAbIhWAAIAAAvIBfAAIAAAdg");
	this.shape_14.setTransform(-32,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgBQgFgCgMgBIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIAMQAHALAAAQQAAASgLANQgLAMgXADQALAHAIAIQAHAHAMAVIAVAhgAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgFgIgBIgYAAIgbAAg");
	this.shape_15.setTransform(-48.1,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996D3B").s().p("AuDEsIAApXIcHAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-30,180,60);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.numberText = new cjs.Text("98", "bold 24px 'Arial'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 29;
	this.numberText.lineWidth = 45;
	this.numberText.parent = this;
	this.numberText.setTransform(24.5,11);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.627)","rgba(0,0,0,0.686)"],[0,1],0,0,0,0,0,80).s().p("Aj0D1IAAnpIHpAAIAAHpg");
	this.shape.setTransform(24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// basecolor
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("Aj0D1IAAnpIHpAAIAAHpg");
	this.shape_1.setTransform(24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberedBox, new cjs.Rectangle(0,0,49,49), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBC68F").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,300,400), null);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.restartButton = new lib.RestartButton();
	this.restartButton.parent = this;
	this.restartButton.setTransform(160,230);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgPBWIAAghIAgAAIAAAhgAgIAqIgJhXIAAgoIAjAAIAAAoIgIBXg");
	this.shape.setTransform(211.1,124.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAhBWIhEhvIAABvIggAAIAAirIAiAAIBFByIAAhyIAgAAIAACrg");
	this.shape_1.setTransform(198.5,124.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_2.setTransform(186.6,124.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAiBWIgiiAIghCAIgmAAIgpirIAkAAIAZB1IAgh1IAoAAIAeB3IAbh3IAjAAIgqCrg");
	this.shape_3.setTransform(171.9,124.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiBSQgNgGgHgJQgIgJgCgKQgEgPABgdIAAhbIAjAAIAABdQAAAWABAHQACAKAJAHQAHAGAOAAQAPAAAIgGQAHgGACgJQABgJAAgUIAAhfIAjAAIAABaQgBAfgCAMQgDANgIAJQgHAJgNAGQgNAEgTABQgYAAgNgGg");
	this.shape_4.setTransform(145.2,124.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_5.setTransform(127.3,124.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgRBWIAAhIIg/hjIAqAAIAmBEIAphEIAnAAIg/BjIAABIg");
	this.shape_6.setTransform(110,124.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_7.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.restartButton}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOverView, new cjs.Rectangle(0,0,300,400), null);


// stage content:
(lib.html5game_workfile_v002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GameOverView();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1);

	this.Background = new lib.Background();
	this.Background.parent = this;
	this.Background.setTransform(366.4,-199.9,1,1,0,0,0,-150,-199.9);

	this.instance_1 = new lib.NumberedBox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.Background},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.1,200,816.3,400);
// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;