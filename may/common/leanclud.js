var { Query, User } = AV;  AV.init("MW9UfmNmX0phVCcw2YCPQmye-MdYXbMMI","XslNotJgRdIcWVdNlTTWtCAv");    
 
var leancloud ={ 
    createObj(table, data) { 
        var Obj = AV.Object.extend(table); var obj = new Obj();
        for (var key in data) { obj.set(key, data[key]); }
        return obj.save()   
    },
    updateObj(table, id, data) {
      var obj = AV.Object.createWithoutData(table, id);
      for (var key in data) {  obj.set(key, data[key]);}
      return obj.save();	 
    },
search(table,skip,limit,key,value) {
      skip = skip || 0; limit = limit || 20;
      var query = new AV.Query(table);
      query.skip(skip); // 第一次跳过0 个 第二次跳过 skip = (i -1) *10个  
      query.limit(limit); // 默认值100
      if(key){ query.equalTo(key, value); }
      query.addAscending('id');
      query.addDescending('createdAt');
      return query.find();
},	 
 delObj(table, id) {
      var obj = AV.Object.createWithoutData(table, id);
      return obj.destroy();
},
}
 