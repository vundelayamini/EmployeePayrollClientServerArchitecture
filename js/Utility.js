const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}

const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw "Name is Incorrect!";
}

const checkstartDate = (startDate) => {
    let now = new Date();
    if (startDate > now) throw 'Start Date is a Future Date';
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        throw 'Start Date is beyond 30 Days';
}

const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData.id == node.id);
    if(!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
} 