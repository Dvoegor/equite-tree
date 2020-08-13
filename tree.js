const json = {
  value: "1",
  children: [
    {
      value: "2",
    },
    {
      value: "3",
      children: [
        {
          value: "4",
        },
        {
          value: "5",
          children: [
            {
              value: "6",
            },
            {
              value: "7",
            },
          ],
        },
      ],
    },
  ],
};

function print(tree) {
  console.log(tree.value);
  function findValue(lastChildren) {
    for (let i = 0; i < lastChildren.length; i++) {
      if (lastChildren[i].children !== undefined) {
        console.log(lastChildren[i].value);
        lastChildren = lastChildren[i].children;
        findValue(lastChildren);
      } else {
        console.log(lastChildren[i].value);
      }
    }
  }
  findValue(tree.children);
}

print(json);
