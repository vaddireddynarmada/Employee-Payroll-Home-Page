window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList=getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent=empPayrollList.length;
  createInnerHtml();
});
const getEmployeePayrollDataFromStorage=() =>{
  return localStorage.getItem('EmployeePayrollList') ? 
   JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();
  for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
      <tr>
      <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td>
          <img name="${empPayrollData._id}" onclick="remove(this)"src="../Assets\icons\delete-black-18dp.svg" alt="delete">
        <img name="${empPayrollData._id}" onclick="update(this)" src="../Assets\icons\create-black-18dp.svg" alt="edit" >
                  </td>
       </tr>
              `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
      {
          _name: 'Rinku Berde',
          _gender: 'Female',
          _department: [
              'Engineering',
              'Finance'
          ],
          _salary: '500000',
          _startDate: '22 may 2019',
          _note: '',
          _id: new Date().getTime(),
          _profilePic: '../Assets\profile-images\Ellipse -1.png'
      },
      {
          _name: 'Omkar Mane',
          _gender: 'male',
          _department: [
              'Sales'
          ],
          _salary: '300000',
          _startDate: '29 Oct 2019',
          _note: '',
          _id: new Date().getTime() + 1,
          _profilePic: '../Assets\profile-images\Ellipse -5.png'

      }
  ];

  return empPayrollListLocal;
}
const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
      deptHtml += "<div class='dept-label'>" + dept + "</div>"
  }

  return deptHtml;
}
