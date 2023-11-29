(function(){
  document.addEventListener("DOMContentLoaded", function() {
  // Chèn mã vào thẻ <head>
  var headScript = document.createElement('script');
  headScript.type = 'text/javascript';
  headScript.async = true;
  headScript.src = '//cdn.taboola.com/libtrc/nghethanhca/loader.js';
  headScript.id = 'tb_loader_script';
  document.head.appendChild(headScript);

  window._taboola = window._taboola || [];
  _taboola.push({article:'auto'});

  if(window.performance && typeof window.performance.mark == 'function') {
    window.performance.mark('tbl_ic');
  }

  // Chèn mã vào div có id 'taboolabody1'
  var adElement = document.getElementById('taboolabody1');
  if (adElement) {
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'thumbnails-a',
      container: 'taboolabody1',
      placement: 'Below Article Thumbnails',
      target_type: 'mix'
    });
  }

  // Chèn mã ngay trước thẻ </body>
  var bodyScript = document.createElement('script');
  bodyScript.type = 'text/javascript';
  bodyScript.innerHTML = 'window._taboola = window._taboola || []; _taboola.push({flush: true});';
  document.body.appendChild(bodyScript);
});

})();
