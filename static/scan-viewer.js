// Global Manuscript Scan Viewer for Quartz
window.changeScanPage = function(slug, delta, maxPages) {
  var inp = document.getElementById('input-' + slug);
  var cur = parseInt(inp ? inp.value : 1) || 1;
  window.jumpScanPage(slug, cur + delta, maxPages);
};

window.jumpScanPage = function(slug, target, maxPages) {
  var p = Math.max(1, Math.min(parseInt(target) || 1, maxPages));
  var inp = document.getElementById('input-' + slug);
  var img = document.getElementById('img-' + slug);
  if (inp) inp.value = p;
  var pad = ('0000' + p).slice(-4);
  if (img) img.src = '/data/images/' + slug + '/page_' + pad + '.jpg';
};
