const alart=()=>{
    alert('Comming Alart');
}

const going=()=>{
  const res= confirm('ami ajke jabo ja');
  console.log(res);
  if(res===true){
      alert('comfram kor tk gase na ki')

  }else{
      console.log('tai taka protorok er kase gase');
  }
};

const nameAsk=()=>{
   const name= prompt('Whats Your Name ?')
   if(name){
       console.log(name);
   }else{
       console.log('No name');
   }
}