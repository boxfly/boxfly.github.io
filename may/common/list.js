function ItemList(props) { 
    const { name ,setName,msg,setMsg,msgModel,setMsgModel,} = React.useContext(Context);
     const [ list,setList]  = React.useState([]);

     React.useEffect(() => {
        loadAll();
     },[]);
     
     const loadAll = ()=>{
        leancloud.search("x_records" ).then((res)=>{
         setList( res)
	   })
     }
     const onChange = (e,index)=>{ 
        var ls =  [...list];
        ls[index].attributes.record = e.target.value;

        setList(ls)
        console.log(123456,list)
     }
     const updateItem = (index)=>{ 
        var cur = list[index] 
        leancloud.updateObj("x_records",cur.id,{record:cur.attributes.record} ).then((res)=>{
	    message('成功更新');
	   })
     }
     const deleteItem = (id,index)=>{ 
        leancloud.delObj("x_records",id ).then((res)=>{
			  message('成功删除');
              var ls = [...list]
			  ls.splice(index,1);
              setList(ls)
		})  
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
                    <button className="ui-btn ui-btn-primary" onClick={ ()=>{ loadAll() }}>加载(load)</button><br/>
                    {
                        list.map((item,index)=>{
                            return <div key={index}> 
                            <textarea  value ={item.attributes.record}  onChange={ (e)=>{onChange(e,index)} }>  </textarea>
						      <button className="ui-btn ui-btn-primary"  onClick={ ()=>{ updateItem(index) }}  >更新(update)</button>
					          <button className="ui-btn ui-btn-danger"  onClick={ ()=>{ deleteItem(item.id,index) }}>删除(delete)</button>
                            </div>
                        })
                    }
               </div>
            }
        </Context.Consumer>
    );
}