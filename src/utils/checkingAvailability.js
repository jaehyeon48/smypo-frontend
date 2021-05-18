import axios from 'axios';

export async function checkUsernameAvailability(username) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const reqBody = JSON.stringify({ username });

  try {
    const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/availability/username`,
      reqBody, config);
    return result.data; // returns 0
  } catch (error) {
    console.error(error);
    return -2;
  }
}

export async function checkEmailAvailability(email) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const reqBody = JSON.stringify({ email });

  try {
    const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/availability/email`,
      reqBody, config);
    return result.data;
  } catch (error) {
    console.error(error);
    return -2;
  }
}
