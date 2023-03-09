const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dnbw04gbs',
  api_key: '326683399772921',
  api_secret: 'LqcJG3jFmJSLT5DDBdnLk3_onaI'
});

// Upload an image or video to Cloudinary
export async function uploadToCloudinary(file) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      // Set upload options here, such as public ID, folder, tags, etc.
      // For example:
      // public_id: 'my_folder/my_image',
      // tags: ['my_tag'],
      // resource_type: 'auto'
    });

    console.log('Uploaded to Cloudinary:', result.url);
    return result.url;

  } catch (error) {
    console.error('Cloudinary upload error:', error.message);
    throw error;
  }
}
