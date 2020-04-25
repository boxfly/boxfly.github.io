boxfly_record_app = {
    data:[],
    init(){
      // getData render list  
      this.data = JSON.parse(localStorage.getItem("record_app") ||"[]")
      $(".add").click(()=>{ this.addLine() })
      $(".clear").click(()=>{ this.cancleList() })
      this.renderList()
    },
    renderList(){
      var tmp = JSON.parse(localStorage.getItem("record_app")||"[]").reverse()
      html = ""
      tmp.map((e,i)=>{  
          html += this.renderLine(e)
      })
      $(".list").html(`
      <table class="layui-table layui-form">
      <thead>
        <tr>  
          <th>记录</th>
          <th>时间</th> 
          <th>间隔</th> 
          <th>操作</th></tr>
      </thead>
      <tbody>
      ${html}</tbody></table>`)
    },
    renderLine(e){
      return `<tr><td><span class='box-max-span'>${e.desc|| '-'}</span></td>
        <td>${e.time}</td>
        <td>${e.diff}</td>
        <td>
            <a title="删除" onclick="boxfly_record_app.cancleLine(${e.id})" href="javascript:;">
                <i class="layui-icon"></i>
            </a>
        </td>  
      </tr>`
    },
    addLine(){
      
      var last = this.data[this.data.length-1]  || {}
      this.data.push({
          id:Date.now(),
          desc:$(".desc").val() || '-',
          time:new Date().format("yyyy-MM-dd hh:mm:ss"),
          diff:this.getDiff(last.time,new Date())
      }) 
      localStorage.setItem("record_app",JSON.stringify(this.data))
      this.renderList()
    },
    getDiff(last,now){
       if(!last)  return '-'
       diff = (now.getTime() - new Date(last).getTime())/1000
       diff = ~~ diff
       if(diff>60){
           return `${~~(diff/60)}分钟${diff%60}秒`
       } else{
           return  `${diff%60}秒`
       }
        
    },
    cancleList(){
        var _this = this;
        layer.confirm('确认要清空吗？',function(index){ 
            $(".list").html("数据清空了")
            _this.data =[]
            localStorage.setItem("record_app","") 
            layer.msg('已清空!',{icon:1,time:1000});
        });
        
        
    },
    cancleLine(id){
         
        this.data.map((e,i)=>{ if(e.id === id ) this.data.splice(i, 1); return e })
        localStorage.setItem("record_app",JSON.stringify(this.data))
        this.renderList()
    },
    
    

}
window.onload=function(){ 
  window.$= layui.jquery
  boxfly_record_app.init()
}
