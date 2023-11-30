console.log('Log 1');
    // React.useEffect(()=>{
    //   console.log('Loog 2');
    //   //parte demorada o pesada
    //   //se ejecuta log1,log2 y log 3 cada vez qeu se renderiza
    // });

    // React.useEffect(()=>{
    //   console.log('Loooog 2');
      //con el array vacio como segundo parametro solo se ejecuta una vez
    // }, []);

    React.useEffect(()=>{
      console.log('Loooog 2');
      //ejecuta el log2 solo cuando cambia el estado de totalTodos
    }, [totalTodos]);