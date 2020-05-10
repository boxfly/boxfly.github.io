function NewItem(props) { 
    const { name ,setName,msg,setMsg,msgModel,setMsgModel,} = React.useContext(Context);
    const [ item,setItem]  = React.useState("");
    const addItem = ()=>{
       if(item.length>1){
           leancloud.createObj("x_records",{ record: item } ).then((res)=>{
             setItem("")
             message('成功添加');
           })
       }else{
             message('暂无内容');
       } 
       
    }
    const onChange = (e)=>{ 
        setItem(e.target.value)
    }
    const message = (msg)=>{ 
     console.log(msg)    
     setMsg(msg);
     setMsgModel(true);
     setTimeout(()=>{ setMsgModel(false); },2000)
    }
    return ( 
       <Context.Consumer>
           {( contextObj ) =>
               <div>
                   <button className="ui-btn ui-btn-primary" onClick={ ()=>{ addItem() }}>新建(add)</button><br/>
                   <textarea  className="new-item-textarea"  value ={item}  onChange={ (e)=>{onChange(e)} } > </textarea>
              </div>
           }
       </Context.Consumer>
   );
}
 