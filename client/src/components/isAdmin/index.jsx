import Auth from '../../utils/auth'


const isAdmin = () => {
    try {
      return Auth.isAdmin();
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

  export default isAdmin