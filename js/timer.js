
self.addEventListener('message', function(e){
  switch(e.data){
      case 'stepEvenInactive':
          interval = setInterval(function() {
              self.postMessage('step');
          }, 10);
          break;
      case 'pause':
          this.clearInterval(interval);
          break;
  }
}, false);
