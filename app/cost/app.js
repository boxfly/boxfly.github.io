app={
    data:{
      list :[
        { t:   '生活采购' ,c:11  },{ t:   '生活采购' ,c:11  },{ t:   '生活采购' ,c:11  },
      ],
      map:{}, 
    },
    init(){

      this.renderList();
    },
    renderList(){
      var _this = this;
      var list = this.data.list; 
      var html =[]        
      list.map((e,i)=>{
      var color = "#000"
      if(parseInt(e.c)>30)color = "#55af8e"
      if(parseInt(e.c)>50)color = "#428ad6"
      if(parseInt(e.c)>100)color = "#d64263"
      html.push(`
        <a class="cell-item" href="javascript:;" id="${e.id}">
        <div class="cell-left"><i class="cell-icon demo-icons-order"></i>${e.t}</div>
        <div class="cell-right ">
           <span style="color:${color}">${e.c}</span>
           <i class="icon-error-outline" onclick="app.delete('${e.id}')"></i> 
          </div>
      </a>`)
      if(!_this.data.map[e.t]) _this.data.map[e.t] = 0
      _this.data.map[e.t] += parseInt(e.c) 
    })
      $(".list").html(html.join(""))    
      this.renderGard();
    },
    renderGard(){
      var html = `
      <li class="grids-item"><div class="grids-txt flex" >生活采购(${this.data.map['生活采购'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >服装购物(${this.data.map['服装购物'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >家庭(${this.data.map['家庭'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >话费(${this.data.map['话费'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >公交(${this.data.map['公交'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >医疗防卫(${this.data.map['医疗防卫'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >未来计划(${this.data.map['未来计划'] || 0})</div></li>
      <li class="grids-item"><div class="grids-txt flex" >献爱心(${this.data.map['献爱心'] || 0})</div></li>
      ` 
      $(".myGard").html(html)
    },
    delete(id){ 
       
       var _this =this;
       _this.data.list.map((e,i)=>{ if(e.id+"" === id) { 
        _this.data.list.splice(i,1); 
        _this.update()
       } })
       
      
    },
    append(s){
      var str =$("#cost").val()  
      switch(s){ 
         case 'C':str="";break;
         default:str+=s;
      }
      $("#cost").val(str)  
    },
    title(str){$("#title").val(str)  },
    add(){
     var e={ t: $("#title").val() || '生活采购' ,c: $("#cost").val(),id:Date.now()  } 
   
     if(!e.c)return;
     this.data.list.unshift(e)
    
 
     document.getElementById("list").scrollTop = 0;
     $('#cost').val("")
     this.update()

    },
    update(){
      var _this = this
      if(!appNameID)return;
      leancloud.updateObj(appName,appNameID,{costList:this.data.list}).then((res)=>{
        _this.renderList();  
      })
    },
    analysisList(){
     
    },
}