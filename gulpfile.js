const gulp = require("gulp");
const spsave = require("gulp-spsave");
let spsaveCoreOption = {
    siteUrl: "https://my.sharepoint.com/sites/reports/",
    folder: "upload/",
    checkin: true,
    checkinType: 1,
    flatten: false,
    notification: true,
  };
let spsaveCredential = {
  username: "satsundev@outlook.com",
  password: "*******"
};

gulp.task("upload", function () {
    return gulp.src('./file.txt')
    .pipe(spsave(spsaveCoreOption, spsaveCredential))
    .on('end', () => {
        // Do something after upload like send mail
    })
    .on('error', (err) => {
        console.log(err);
    });
});