//Code to generate file name Map to be used for renaming.

Files = (function(){

	var getNames = function() {

			var fileNameMap = {};
			for (var i = 0; i < videoLinks.length; i++) {
                var binPath = /[a-zA-Z0-9]{40}\.bin/.exec(videoLinks[i].href);
				fileNameMap[binPath] = this.getID(i)+"_"+jQuery(jQuery(videoLinks[i]).children()[1]).children()[1].innerText;
			}
			return fileNameMap;
		};

		var getID = function(d) {
			return (d < 10) ? '0' + d.toString() : d.toString();
		};

	return {
		"getFileNames": getNames,
		"getID":getID
	};
})();

f = Files.getFileNames();
console.log(JSON.stringify(f));