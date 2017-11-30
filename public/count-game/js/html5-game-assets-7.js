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

	// states
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
	this.shape_7.graphics.rf(["#FFFFFF","#000000"],[0,1],-1,1,0,-1,1,288).s().p("AuDEsIAApXIcHAAIAAJXg");

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

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AuDEsIAApXIcHAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(4));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.627)","rgba(0,0,0,0.686)"],[0,1],0,0,0,0,0,80).s().p("Aj0D1IAAnpIHpAAIAAHpg");
	this.shape.setTransform(24.5,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.627)","rgba(0,0,0,0.686)"],[0,1],0,0,0,0,0,92.2).s().p("AkZEaIAAozIIzAAIAAIzg");
	this.shape_1.setTransform(24.5,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.627)","rgba(0,0,0,0.686)"],[0,1],0,0,0,0,0,68.5).s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_2.setTransform(24.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// basecolor
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("Aj0D1IAAnpIHpAAIAAHpg");
	this.shape_3.setTransform(24.5,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCCC").s().p("AkZEaIAAozIIzAAIAAIzg");
	this.shape_4.setTransform(24.5,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCCC").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_5.setTransform(24.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,49);


(lib.bg_tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE3FF").s().p("Ap6LzIAA3lIT1AAIAAXlg");
	this.shape.setTransform(63.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_tile, new cjs.Rectangle(0,0,127,151), null);


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

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// RestartButton
	this.restartBootan = new lib.RestartButton();
	this.restartBootan.parent = this;
	this.restartBootan.setTransform(152.1,227);
	new cjs.ButtonHelper(this.restartBootan, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartBootan).wait(40));

	// YOU WIN!
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

	// bg_tile
	this.instance = new lib.bg_tile();
	this.instance.parent = this;
	this.instance.setTransform(77.5,216.9,1,1,0,0,0,63.5,75.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(18));

	// bg_tile
	this.instance_1 = new lib.bg_tile();
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.4,336.5,1,1,0,0,0,63.5,75.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(21));

	// bg_tile
	this.instance_2 = new lib.bg_tile();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.5,324.5,1,1,0,0,0,63.5,75.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(3));

	// bg_tile
	this.instance_3 = new lib.bg_tile();
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.5,292.4,1,1,0,0,0,63.5,75.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(14));

	// bg_tile
	this.instance_4 = new lib.bg_tile();
	this.instance_4.parent = this;
	this.instance_4.setTransform(214.6,292.4,1,1,0,0,0,63.5,75.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(6));

	// bg_tile
	this.instance_5 = new lib.bg_tile();
	this.instance_5.parent = this;
	this.instance_5.setTransform(139.5,367.9,1,1,0,0,0,63.5,75.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(9));

	// bg_tile
	this.instance_6 = new lib.bg_tile();
	this.instance_6.parent = this;
	this.instance_6.setTransform(139.5,292.4,1,1,0,0,0,63.5,75.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(19));

	// bg_tile
	this.instance_7 = new lib.bg_tile();
	this.instance_7.parent = this;
	this.instance_7.setTransform(279.5,227.5,1,1,0,0,0,63.5,75.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(12));

	// bg_tile
	this.instance_8 = new lib.bg_tile();
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.6,170.5,1,1,0,0,0,63.5,75.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(20));

	// bg_tile
	this.instance_9 = new lib.bg_tile();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.4,181.5,1,1,0,0,0,63.5,75.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(23));

	// bg_tile
	this.instance_10 = new lib.bg_tile();
	this.instance_10.parent = this;
	this.instance_10.setTransform(289.5,0,1,1,0,0,0,63.5,75.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(18));

	// bg_tile
	this.instance_11 = new lib.bg_tile();
	this.instance_11.parent = this;
	this.instance_11.setTransform(279.5,106.5,1,1,0,0,0,63.5,75.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},14,cjs.Ease.get(1)).wait(26));

	// bg_tile
	this.instance_12 = new lib.bg_tile();
	this.instance_12.parent = this;
	this.instance_12.setTransform(112.5,-5.5,1,1,0,0,0,63.5,75.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(25));

	// bg_tile
	this.instance_13 = new lib.bg_tile();
	this.instance_13.parent = this;
	this.instance_13.setTransform(204.5,19.5,1,1,0,0,0,63.5,75.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(23));

	// bg_tile
	this.instance_14 = new lib.bg_tile();
	this.instance_14.parent = this;
	this.instance_14.setTransform(102.5,121.5,1,1,0,0,0,63.5,75.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(14));

	// bg_tile
	this.instance_15 = new lib.bg_tile();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.5,60.5,1,1,0,0,0,63.5,75.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(20));

	// Layer 115
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_7.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,343,400);


// stage content:
(lib.html5game_workfile_v004 = function(mode,startPosition,loop) {
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
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.NumberedBox(), 3);

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