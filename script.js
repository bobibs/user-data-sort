class User {
  constructor(a, b, c, d) {
    (this.nama = a), (this.umur = b), (this.gender = c), (this.pekerjaan = d);
  }
}

// Array untuk menampung data
let arrUser = [];

// Fungsi tampilkan data
displayData = a => {
  let output = '';

  a.forEach((val, index) => {
    output += `
              <tr>
                  <td scope="row">${index + 1}</td>
                  <td >${val.nama}</td>
                  <td >${val.umur}</td>
                  <td >${val.gender}</td>
                  <td >${val.pekerjaan}</td>
              </tr>
          `;
  });
  // Tampilkan data (output) di table
  document.getElementById('table-body').innerHTML = output;
};

// Fungsi submitData()
document.getElementById('btn-submit').addEventListener('click', e => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const umur = document.getElementById('umur').value;
  const pekerjaan = document.getElementById('pekerjaan').value;
  let gender;
  if (document.getElementsByName('radio')[0].checked) {
    gender = 'Pria';
  } else if (document.getElementsByName('radio')[1].checked) {
    gender = 'Wanita';
  } else {
    gender = '';
  }

  // Push data ke arrUser
  arrUser.push(new User(nama, umur, gender, pekerjaan));

  // Reset form
  document.getElementById('user-form').reset();

  // Tampilkan data ke table
  displayData(arrUser);
});

// Fungsi sort sesuai nama
document.getElementById('btn-sort-nama').addEventListener('click', () => {
  arrUser.sort((user1, user2) => {
    if (user1.nama > user2.nama) return 1;
    if (user1.nama < user2.nama) return -1;
  });

  // Tampilkan data
  displayData(arrUser);
});

// Fungsi sort sesuai umur
document.getElementById('btn-sort-umur').addEventListener('click', () => {
  arrUser.sort((user1, user2) => {
    if (user1.umur > user2.umur) return 1;
    if (user1.umur < user2.umur) return -1;
  });

  // Tampilkan data
  displayData(arrUser);
});

// Fungsi sort sesuai gender
document.getElementById('btn-sort-gender').addEventListener('click', () => {
  arrUser.sort((user1, user2) => {
    if (user1.gender > user2.gender) return 1;
    if (user1.gender < user2.gender) return -1;
  });

  // Tampilkan data
  displayData(arrUser);
});

// Fungsi sort sesuai pekerjaan
document.getElementById('btn-sort-pekerjaan').addEventListener('click', () => {
  arrUser.sort((user1, user2) => {
    if (user1.pekerjaan > user2.pekerjaan) return 1;
    if (user1.pekerjaan < user2.pekerjaan) return -1;
  });

  // Tampilkan data
  displayData(arrUser);
});
