<select
onChange={ ()=>{} }
value = { 1 }>
{
  [1,2,3].map((item,i) => {
    return (
      <option key={"op"+i} index={i} value={item}>{item}</option>
    )
  })
}
</select>

<div className="ui-select">
                                <select> 
                                </select>
                            </div>
                            <div className="ui-select">
                                <select> 
                                </select>
                            </div>
                            <div className="ui-select">
                                <select> 
                                </select>
                            </div>