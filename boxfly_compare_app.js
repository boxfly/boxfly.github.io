boxfly_compare_app = {
    data:{
        curTab:"shop",
		curShop:"shop",
		curItem:"QZ",
        shopNames:["shop","shop1","shop2"],
		itemNames:["QZ","QZ1","QZ2"],
        records:[
		{
id:Date.now()+Math.random(),
shopName:"shop",
itemName:"QZ",
price:1,
history:[]
},
{
    id:Date.now()+Math.random(),
shopName:"shop",
itemName:"QZ",
price:10,
history:[]
},
{
    id:Date.now()+Math.random(),
shopName:"shop1",
itemName:"QZ",
price:5,
history:[]
},
{
    id:Date.now()+Math.random(),
shopName:"shop1",
itemName:"QZ111",
price:5,
history:[]
}
		],
    },
    init(){
      this.data = JSON.parse(localStorage.getItem("compare_app") ||"{curTab:'',curShop:'',curItem:'',shopNames:[],itemNames:[],records:[]}")
      this.renderShops()
      this.renderItems()
      
    },
    addShop(){ 
        var name = $(".new-shop-name").val()
        if(name.trim()===""){
            return;
        }
        this.data.shopNames.push(name) 
        localStorage.setItem("compare_app",JSON.stringify(this.data))
        this.renderShops()
    },
    deleteShop(){ 
        var _this = this;
        layer.confirm('确认要删除本店么？',function(index){ 
            index = _this.data.shopNames.indexOf(_this.data.curShop) 
            if(index == -1){
                layer.msg('暂未选中店铺',{icon:1,time:1000});
                return
            }
            _this.data.shopNames.splice(index,1)
    
            var other =  _this.data.records.filter((e,i)=>{
                return e.shopName != _this.curShop
            }) 
            _this.data.curShop="";
            _this.data.records = other
            _this.renderShops()
            localStorage.setItem("compare_app",JSON.stringify(_this.data))
            layer.msg('已删除本店数据!',{icon:1,time:1000});
        });
    },
    renderShops(){
        if(!this.data.shopNames)return;
        html =""
        var list =this.data.shopNames.reverse()
        list.map((e,i)=>{
            html +=`<li>${e}`
        })
        $(".shops").html(html)
        this.renderShopItems()
    },
    renderShopItems(){

        var list =  this.data.records.filter((e,i)=>{
            
            console.log(this.data.curShop)
            return e.shopName == this.data.curShop
        }) 
        html =""
        list.map((e,i)=>{
         html+= this.renderShopItem(e) 
        })
       

        $(".shopItems").html(html)
    },
    renderShopItem(e){ 
         html =""
		 html +=` <div class="shopItem">
                      ${e.itemName} ${e.price} 
                      <a title="删除" onclick="boxfly_compare_app.deleteShopItem(${e.id})" href="javascript:;">
                           <i class="layui-icon"></i>
                      </a>
                    </div> ` 
		return html;			
    },
    addShopItem(data){ 
        var name = data.field.name
        var price = parseFloat(data.field.price)
        if(name.trim()===""){
            return;
        }
        this.data.itemNames.push(name) 
        this.data.records.push({
            id:Date.now()+Math.random(),
            shopName:this.data.curShop,
            itemName:name,
            price:price,
            history:[]
        })
        layer.alert("增加成功", {icon: 6});
        layer.closeAll('iframe'); //关闭所有的iframe层
        
        console.log(window.name,112)
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        console.log(index,parent.layer.closeAll)
        console.log(parent.layer.closeAll())
        //parent.layer.close(index); //再执行关闭
        localStorage.setItem("compare_app",JSON.stringify(this.data))
        this.renderShopItems()
    },
    deleteShopItem(id){  
        var list = this.data.records;
        list.map((e,i)=>{ if(e.id === id ) list.splice(i, 1); return e })
        localStorage.setItem("compare_app",JSON.stringify(this.data))
        this.renderShopItems()
    },
    
    /*找货比价*/
    renderItems(){
        if(!this.data.itemNames)return;
        html=""
        this.data.itemNames.map((e,i)=>{
           html +=`<li>${e}`
        })
        $(".items").html(html)
        this.renderItemShops()
    },
    
    renderItemShops(){
        var list =  this.data.records.filter((e,i)=>{
            return e.itemName == this.data.curItem
        }).sort((a,b)=>{ 
            return a.price - b.price
        })
        console.log(list)
        html =""
        list.map((e,i)=>{
         html+= this.renderItemInShop(e)
         console.log(html)
        })
        $(".itemShops").html(html)
    }, 
    renderItemInShop(e){
        //  if(!this.data.itemNames)return;
          html =""
           html +=` <div class="shopItem">
                         ${e.price} ${e.shopName}
                      </div> ` 
          return html;			
      },

} 
window.onload=function(){ 
    window.$= layui.jquery
    boxfly_compare_app.init()
  }