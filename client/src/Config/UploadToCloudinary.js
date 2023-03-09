// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'dnbw04gbs',
//   api_key: '326683399772921',
//   api_secret: 'LqcJG3jFmJSLT5DDBdnLk3_onaI'
// });

// // Upload an image or video to Cloudinary
// export async function uploadToCloudinary(file) {
//   try {
//     const result = await cloudinary.uploader.upload(file, {
//       // Set upload options here, such as public ID, folder, tags, etc.
//       // For example:
//       // public_id: 'my_folder/my_image',
//       // tags: ['my_tag'],
//       // resource_type: 'auto'
//     });

//     console.log('Uploaded to Cloudinary:', result.url);
//     return result.url;

//   } catch (error) {
//     console.error('Cloudinary upload error:', error.message);
//     throw error;
//   }
// }

export const uploadToCloudinary = async (pics) => {
  if (pics) {
    
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "instagram");
    data.append("cloud_name", "dnbw04gbs");

    const res = await fetch("https://api.cloudinary.com/v1_1/dnbw04gbs/image/upload", {
      method: "post",
      body: data,
    })
      
      const fileData=await res.json();
      console.log("url : ", fileData.url.toString());
      return fileData.url.toString();

  } else {
    console.log("error");
  }
};


