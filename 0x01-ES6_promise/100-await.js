import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promisePhoto = uploadPhoto();
    const promiseUser = createUser();
    const [photoPromiseRes, userPromiseRes] = await Promise.allSettled([promisePhoto, promiseUser]);

    if (photoPromiseRes.status === 'rejected' || userPromiseRes.status === 'rejected') {
      return {
        photo: null,
        user: null,
      };
    }

    return {
      photo: photoPromiseRes.value,
      user: userPromiseRes.value,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
