boxfly_compare_app = {
     name:"random-app",
        data:{
            textarea:["奇数","偶数"],
            number:1,
            history:[],
        },
        
        
        init(){
              local = localStorage.getItem(this.name)   
              if(local){
                local =JSON.parse(local)
                this.data.textarea = local.textarea;
                this.data.number = local.number;
                this.data.history = local.history;
              }
              $("#randomNumber").val(this.data.number)
              $("#mytextarea").val(this.data.textarea[this.data.textarea.length-1])
              console.log(['init()',this.data])
			  
              this.renderHistory() 
			  $("#historySelect").change(function () {
				$("#mytextarea").val($("#historySelect").find("option:selected").text());
			  });
        },
        str2Arr(str){ 
                console.log(['str2Arr()',str])  
				str = str.replace(/,/g," ")
				str = str.replace(/，/g," ")
                return str.split(" ") 
        },
        choose(){
            this.data.number = $("#randomNumber").val()
            var str = $("#mytextarea").val()
            this.data.textarea.push(str)
            var arr = this.str2Arr(str).sort(()=>{return Math.random()-0.5}).slice(0,this.data.number)
            this.data.history.push(arr)
            console.log(['choose()',this.data])  
            this.save()
            this.renderHistory()
        },
        save(){
            this.data.history = this.data.history.slice(-5);
			this.data.textarea = this.data.textarea.slice(-50);
            localStorage.setItem(this.name,JSON.stringify(this.data))   
        },
        renderHistory(){
            console.log(['renderHistory()',this.data])  
            html=""
            list = [...this.data.history]
            list.reverse().map((e,i)=>{
                html += e + ",<br>"
            })  
			$('.history').html(html)
			html=""
			list = [...this.data.textarea]
            list.reverse().map((e,i)=>{
                html += `<option value="${i}">${e}</option>`
            })  
            $('#historySelect').html(html)
        },
        commonPositiveInteger(num) {
           console.log(['test()',num])   
           return num.match(/^((?!0)\d{1,9})$/)
         } 

} 
window.onload=function(){ 
    window.$= layui.jquery
    boxfly_compare_app.init()
  }