Ext.onReady(function(){
   Ext.select('.tab-buttons-panel').on('click', function(e, t) {
       Ext.fly(t).radioClass('tab-show');
       Ext.get('content' + t.id.slice(-1)).radioClass('tab-content-show');
   }, null, {delegate: 'li'});
});