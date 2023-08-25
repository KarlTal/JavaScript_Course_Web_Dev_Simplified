export const me = {
  name: "Karl",
  age: 21,
};

export const sally = {
  name: "Sally",
  age: 22,
};

export default function printUser(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// export default me; //Export this variable

// export default printUser;
