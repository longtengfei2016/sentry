(() => {
  window.onload = () => {
    document.getElementById('container').addEventListener('click', e => {
      console.log(window['aa'].aaa)
    }, false);
    document.getElementById('warning').addEventListener('click', e =>{
	var b = false;
	if(!b){
	   console.warn('warning message');
	}
    });
    document.getElementById('info').addEventListener('click', e =>{
        var b = false;
        if(!b){
           console.info('info message');
        }
    });
  }
  function test(){
    var a = [];
    if(a.length>0){
      console.log('error')
    }
  }
  test();
})()
