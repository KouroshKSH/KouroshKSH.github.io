import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig({
  head: {
    additionalHead: [
      `<script>
(function(){
  function logLayout(runId){
    var body=document.getElementById('quartz-body');
    var center=document.querySelector('#quartz-body .center');
    var p=document.querySelector('#quartz-body .center article p');
    var data={
      runId:runId||'verify',
      bodyWidth:body?body.getBoundingClientRect().width:0,
      centerWidth:center?center.getBoundingClientRect().width:0,
      pWidth:p?p.getBoundingClientRect().width:0,
      bodyFont:p?getComputedStyle(p).fontFamily:'',
      bodyMaxWidth:body?getComputedStyle(body).maxWidth:'',
      centerMaxWidth:center?getComputedStyle(center).maxWidth:''
    };
    fetch('http://127.0.0.1:7305/ingest/cd2729f2-2308-4e98-8125-abf2a30c5c21',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'da1779'},body:JSON.stringify({sessionId:'da1779',location:'layout-debug',message:'layout metrics',data:data,timestamp:Date.now(),hypothesisId:'A'})}).catch(function(){});
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){logLayout('verify');});}
  else{logLayout('verify');}
})();
</script>`,
    ],
  },
})
export default config
export const layout = await loadQuartzLayout()
