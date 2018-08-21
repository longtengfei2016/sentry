(() => {
  window.onload = () => {
    document.getElementById('container').addEventListener('click', e => {
      console.log(window['aaa'].aaa)
    }, false)
  }
  function test(){
    if(a.length>0){
      console.log('error')
    }
  }
  test();
})()