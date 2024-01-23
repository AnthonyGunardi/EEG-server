const User = require('../model/user');
const excelJS = require("exceljs");
const FileSaver = require('file-saver');

exports.getUsersExcel = async(req,res) => {
  try {
    const workbook = new excelJS.Workbook();  // Create a new workbook
    const worksheet = workbook.addWorksheet("My Users"); // New Worksheet
    const path = "./files";  // Path to download excel
    let counter = 1;

    // Column for data in excel. key must match data key
    worksheet.columns = [
      { header: "No.", key: "no", width: 10 }, 
      { header: "Nama Lengkap", key: "fname", width: 30 },
      { header: "Tanggal Lahir", key: "birthday", width: 20 },
      { header: "WCST - Jumlah Trial", key: "wcstrial", width: 20 },
      { header: "WCST - Jumlah Benar", key: "wcstrue", width: 20 },
      { header: "Digit Span", key: "digitspan", width: 30 },
  ];
    // Looping through User data
    const users= await User.find().sort({ _id: -1 });
    users.forEach((user) => {
      user.s_no = counter;
      worksheet.addRow({no: user.s_no, 
        fname: user.fullname, 
        birthday: user.birthday,
        wcstrial: user.wcst_test[0]?.total_trials,
        wcstrue: user.wcst_test[1]?.total_correct,
        digitspan: user.digit_span[0]?.score,
      }); // Add data in worksheet
      counter++;
    });

    // Making first line in excel bold
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    // const buffer = await workbook.xlsx.writeBuffer();
    // const fileType = 'application/vnd.ms-excel;charset=utf-8';
    // const excelExtension = '.xlsx';
    // const blob = new Blob([buffer], {type: fileType})
    // FileSaver.saveAs(blob, `Brain Wave Assessment Users` + excelExtension)
    const data = await workbook.xlsx.writeFile(`${path}/Brain Wave Assessment Users.xlsx`)
     .then(() => {
        res.status(200).json({message: 'file is successfully downloaded'})
     });
  } catch (err) {
      res.send({
        status: "error",
        message: err.message,
      });
    }
};
