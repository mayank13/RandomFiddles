//Script to download Frontend Masters content.

(function getLinks() {
    videoLinks = jQuery('.video-link')
    videoLinksDownloadable = [];
    for (var i = 0; i < videoLinks.length; i++) {
        var linkId = videoLinks[i].id.split('-')[2];
        (function(linkId) {
            jQuery.getJSON('https://fast.wistia.com/embed/medias/' +
                linkId + '.json',
                function(data) {
                    jQuery('[id$='+linkId+']')[0].href =  data.media.assets[0].url;
                    jQuery('[id$='+linkId+']')[0].download =  "";
                    videoLinksDownloadable.push({
                        "id": linkId,
                        "urlHD": data.media.assets[6].url,
                        "completeData": data,
                        "quality": data.media.assets[6].display_name
                    })
                });
        })(linkId);
    }
})(); 