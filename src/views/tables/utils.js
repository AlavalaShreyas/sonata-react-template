import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

const tableData = [
  {
    empId: 1608,
    firstName: "John",
    lastName: "Deer",
    hobby: "playing cricket",
    status: "single",
    salary: 25000,
  },
  {
    empId: 1689,
    firstName: "Ganesh",
    lastName: "Patil",
    hobby: "playing badminton",
    status: "single",
    salary: 23000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  {
    empId: 1120,
    firstName: "Mark",
    lastName: "Jeo",
    hobby: "playing badminton",
    status: "single",
    salary: 23000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1120,
    firstName: "Mark",
    lastName: "Jeo",
    hobby: "playing badminton",
    status: "single",
    salary: 23000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1120,
    firstName: "Mark",
    lastName: "Jeo",
    hobby: "playing badminton",
    status: "single",
    salary: 23000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1120,
    firstName: "Mark",
    lastName: "Jeo",
    hobby: "playing badminton",
    status: "single",
    salary: 23000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  },
  {
    empId: 1334,
    firstName: "Brad",
    lastName: "Keneol",
    hobby: "swimming",
    status: "single",
    salary: 28000,
  },
  {
    empId: 1698,
    firstName: "Mahesh",
    lastName: "Guarav",
    hobby: "playing badminton",
    status: "single",
    salary: 27000,
  }
  
];

export function getData(){
  return tableData;
}