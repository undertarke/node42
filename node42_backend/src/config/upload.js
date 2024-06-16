
import multer, { diskStorage } from 'multer'

// yarn add multer

export const upload = multer({
    storage: diskStorage({
        destination: process.cwd() + "/public/img", // nơi khai báo đường dẫn lưu file
        filename: (req, file, callback) => {  // đổi tên file

            // lưu ý nhảy audition =>>> 156234234325_●◉✿๖ۣۜLiên Kích ✘Liên Kích Đẹpッ✿◉●
            let date = new Date()
            callback(null, date.getTime() + "_" + file.originalname) // 1718200974007_cat.jpeg
        }
    })
})