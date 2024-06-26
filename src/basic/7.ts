const page1:pageAll = {
      title: 'The awesome page',
      likes: 100,
      accounts: ['Max', 'Anton', 'Nikita'],
      status: 'open',
      details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
      }
    }
    
    const page2:pageAll = {
      title: 'Python or Js',
      likes: 5,
      accounts: ['Alex'],
      status: 'close',
    }
    
    type pageAll = {
        title:string;
        likes:number;
        accounts:string[];
        status:string;
        details?:Details;
    }

    type Details ={
        createAt:Date;
        updateAt:Date;
    }