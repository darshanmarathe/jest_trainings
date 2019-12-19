const delay = (num = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, num);
  });
  a;
};

const resp = {
  data: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "delectus aut autem",
      completed: false
    }
  ]
};

export { delay, resp };
