(() => {
  window.onload = () => {
    document.getElementById('container').addEventListener('click', e => {
      console.log(window['aaa'].aaa)
    }, false)
  }
  function test(){
    var a = [];
    if(a.length>0){
      console.log('error')
    }
  }
  test();
})()
