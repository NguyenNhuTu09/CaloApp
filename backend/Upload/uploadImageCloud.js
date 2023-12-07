import cloudinary from 'cloudinary'

cloudinary.v2.config({
     cloud_name: "dozs7ggs4",
     api_key: "749332554812144",
     api_secret: "nz5Sg21DZI5JLkT2l9TQa86t5e8",
});

export const uploadImage = (filePath) => {
     return new Promise((resolve, reject) => {
          cloudinary.v2.uploader.upload(filePath, (error, result) => {
               if (error) {
                    reject(error);
               } else {
                    resolve(result.url);
               }
          });
     });
};