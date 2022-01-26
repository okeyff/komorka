import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    const logoutFn = async () => {
      console.log('logged out');
    };
    logoutFn();
  }, []);
  return <div>Log out</div>;
};

export default Logout;
